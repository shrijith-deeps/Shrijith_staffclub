// Ceremonial Web Audio Synthesizer for Digital Inauguration Fanfare
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playInaugurationFanfare(enabled: boolean = true) {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Ceremonial Brass / Chime Chords in D Major / Royal Harmony:
    // D4 (293.66Hz), F#4 (369.99Hz), A4 (440.00Hz), D5 (587.33Hz), F#5 (739.99Hz), A5 (880.00Hz)
    const notes = [
      { freq: 293.66, delay: 0.0, dur: 3.2, gain: 0.18, type: 'sawtooth' as OscillatorType },
      { freq: 369.99, delay: 0.1, dur: 3.2, gain: 0.16, type: 'sawtooth' as OscillatorType },
      { freq: 440.00, delay: 0.2, dur: 3.4, gain: 0.20, type: 'triangle' as OscillatorType },
      { freq: 587.33, delay: 0.35, dur: 3.8, gain: 0.22, type: 'triangle' as OscillatorType },
      { freq: 739.99, delay: 0.5, dur: 4.0, gain: 0.15, type: 'sine' as OscillatorType },
      { freq: 880.00, delay: 0.65, dur: 4.5, gain: 0.24, type: 'sine' as OscillatorType },
      // Shimmering octave flourish
      { freq: 1174.66, delay: 0.8, dur: 4.2, gain: 0.12, type: 'sine' as OscillatorType },
    ];

    // Master Reverb/Delay effect simulator
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.85, now);
    masterGain.connect(ctx.destination);

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, now + n.delay);

      // Lowpass filter to give warm ceremonial brass warmth
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now + n.delay);
      filter.frequency.exponentialRampToValueAtTime(800, now + n.delay + n.dur);

      noteGain.gain.setValueAtTime(0.001, now + n.delay);
      noteGain.gain.exponentialRampToValueAtTime(n.gain, now + n.delay + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + n.delay + n.dur);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now + n.delay);
      osc.stop(now + n.delay + n.dur);
    });

    // Ceremonial bell chimes sparkle
    const bellPitches = [880, 1046.5, 1318.51, 1567.98, 1760];
    bellPitches.forEach((pitch, idx) => {
      const bell = ctx.createOscillator();
      const bellGain = ctx.createGain();
      const startTime = now + 0.9 + idx * 0.14;

      bell.type = 'sine';
      bell.frequency.setValueAtTime(pitch, startTime);

      bellGain.gain.setValueAtTime(0.001, startTime);
      bellGain.gain.exponentialRampToValueAtTime(0.14, startTime + 0.04);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.8);

      bell.connect(bellGain);
      bellGain.connect(masterGain);

      bell.start(startTime);
      bell.stop(startTime + 1.9);
    });
  } catch (err) {
    console.warn('Audio playback not permitted or unavailable:', err);
  }
}

export function playCurtainSlideSound(enabled: boolean = true) {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Realistic fabric friction swoosh / curtain rings gliding
    const bufferSize = ctx.sampleRate * 1.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.linearRampToValueAtTime(650, now + 0.7);
    filter.frequency.linearRampToValueAtTime(280, now + 1.4);
    filter.Q.setValueAtTime(2.5, now);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(0.15, now + 0.25);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 1.5);
  } catch (e) {
    // ignore
  }
}
