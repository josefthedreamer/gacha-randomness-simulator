const seedrandom = require('seedrandom');

(() => {
  let seedValue = 'Fixed Seed';
  let useFixedSeed = true;
  let generateRandomValue = seedrandom(seedValue);

  // Seed tests
  for (let i = 0; i < 10; i++) {
    if (!useFixedSeed) {
      seedValue = (Math.random());
      generateRandomValue = seedrandom(seedValue);
    }

    let randomValue = generateRandomValue();
    console.log(randomValue);
    // console.log(Math.floor(randomValue * 100) % 27);
  }
})();
