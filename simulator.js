const seedrandom = require('seedrandom');

(() => {
  let seedValue = 'Fixed Seed';
  let useFixedSeed = false;
  let generateRandomValue = seedrandom(seedValue);

  let unitSampleSpace = 27;
  let randomSampleSize = 4;
  let totalPulls = 10;

  let pullsArray = [];

  /* Simulate pulls */

  for (let i = 0; i < totalPulls; i++) {
    let pullArray = [];

    if (!useFixedSeed) {
      seedValue = (Math.random());
      generateRandomValue = seedrandom(seedValue);
    }

    for (let i = 0; i < randomSampleSize; i++) {
      let randomValue =
        Math.floor(generateRandomValue() * 100) % unitSampleSpace;
      pullArray.push(randomValue);
    }

    console.log('Pull Number ' + (i + 1) + ': ' + pullArray);

    pullsArray.push(pullArray);
  }

  console.log('All Pulls:');
  console.log(pullsArray);

  /* Check for identical pulls (exact same permutation) */

  let identicalPulls = [];

  // Simulate identical pulls
  // pullsArray = [
  //   [0, 1, 2, 3],
  //   [3, 2, 1, 0],
  //   [3, 3, 3, 3],
  //   [0, 1, 2, 3],
  //   [3, 3, 3, 3],
  //   [3, 3, 3, 3]
  // ];

  for (let i = 0; i < pullsArray.length; i++) {
    let identicalPullCounter = 0;

    for (let j = i + 1; j < pullsArray.length; j++) {
      let identicalValueCounter = 0;

      for (let k = 0; k < randomSampleSize; k++) {
        if (pullsArray[i][k] !== pullsArray[j][k]) {
          break;
        } else {
          identicalValueCounter = identicalValueCounter + 1;
        }
      }

      if (identicalValueCounter === randomSampleSize) {
        identicalPullCounter = identicalPullCounter + 1;

        if (!(identicalPulls.includes(i + 1))) {
          identicalPulls.push(i + 1);
        }

        if (!(identicalPulls.includes(j + 1))) {
          identicalPulls.push(j + 1);
        }

        console.log(
          'Pull Number ' + (i + 1) +
          ' is identical to Pull Number ' + (j + 1) + '!'
        );
      }
    }

    if (identicalPullCounter !== 0) {
      console.log(
        'Pull Number ' + (i + 1) +
        ' with units ' + pullsArray[i] +
        ' repeated ' + identicalPullCounter +
        ' time(s) out of ' + pullsArray.length +
        ' pulls!'
      );
    }
  }

  console.log('Total Number of Identical Pulls: ' + identicalPulls.length);
  console.log('Identical Pulls:');
  console.log(identicalPulls);
})();
