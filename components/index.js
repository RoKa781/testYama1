document.addEventListener("DOMContentLoaded", () => {
  const buttonUp = document.querySelector(".main__button--up");
  const buttonDown = document.querySelector(".main__button--down");
  const imgFirst = document.querySelector(".main__img--first");

  let animationId;
  const animationDuration = 2000;
  let maxTranslateY = -75;
  const minTranslateY = 0;
  let currentTranslateY = 0;

  const animateTable = (direction) => {
    if (window.innerWidth <= 435) {
        maxTranslateY = -20;
    }
    const startTime = performance.now();
    const initialTranslateY = currentTranslateY;
    const targetTranslateY = direction === "up" ? maxTranslateY : minTranslateY;

    const step = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      currentTranslateY =
        initialTranslateY + (targetTranslateY - initialTranslateY) * progress;

      imgFirst.style.transform = `translateY(${currentTranslateY}px)`;

      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      }
    };

    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(step);
  };

  buttonUp.addEventListener("click", () => animateTable("up"));
  buttonDown.addEventListener("click", () => animateTable("down"));
});
