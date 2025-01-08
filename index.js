document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const mole = document.querySelector('.mole');
    mole.style.display = 'none';
    const grounds = document.querySelectorAll('.ground');
    let currentGround = Math.floor(Math.random() * grounds.length);
    let spawnInterval = 1200; // Start with 1.2 seconds
    function getRandomGround() {
      let randomGround = Math.floor(Math.random() * grounds.length);
      if(randomGround === currentGround) {
        currentGround = randomGround === 0 ? randomGround + 1 : randomGround - 1;
        return currentGround
      }
      currentGround = randomGround;
      return currentGround;
    }
    function spawnMole() {
      currentGround = getRandomGround();
      let rect = grounds[currentGround].getBoundingClientRect();
        mole.style.top = `${rect.top + -60}px`;
        mole.style.left = `${rect.left + 30}px`;
        let randomImage = Math.floor(Math.random() * 11);
        mole.setAttribute('src', `flowers/${randomImage}.png`);
        mole.style.display = 'block';
        mole.style.animationDuration = `${spawnInterval / 1000}s`;
    }
    mole.addEventListener('click', () => {
      score++;
      document.querySelector('.score').textContent = score;
      mole.style.display = 'none';
      if (spawnInterval > 500) { // Decrease interval until it reaches 0.5 seconds
        spawnInterval -= 20;
        clearInterval(spawnIntervalId);
        spawnIntervalId = setInterval(spawnMole, spawnInterval);
      }
    });
    let spawnIntervalId = setInterval(spawnMole, spawnInterval);
});
