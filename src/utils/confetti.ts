import confetti from 'canvas-confetti';

export function fireInaugurationConfetti() {
  const duration = 4.5 * 1000;
  const animationEnd = Date.now() + duration;

  // AJIET Staff Club Official Palette: Royal Blue, Gold, Green, Crimson
  const colors = ['#1d4ed8', '#f59e0b', '#047857', '#dc2626', '#38bdf8', '#fbbf24'];

  // Left wing cannon
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 70,
    origin: { x: 0, y: 0.75 },
    colors: colors,
    zIndex: 9999,
  });

  // Right wing cannon
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 70,
    origin: { x: 1, y: 0.75 },
    colors: colors,
    zIndex: 9999,
  });

  // Center golden sparkle burst after 400ms
  setTimeout(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { x: 0.5, y: 0.55 },
      colors: ['#fbbf24', '#f59e0b', '#ffffff', '#60a5fa'],
      zIndex: 9999,
    });
  }, 450);

  // Gentle falling stars interval
  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 25 * (timeLeft / duration);

    confetti({
      particleCount,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: colors,
      zIndex: 9999,
    });
  }, 350);
}
