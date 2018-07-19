// Code your solutions in this file
function printBadges(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  let flip = 1
  let counter = 0
  while (flip === 1) {

    flip = Math.floor(Math.random() * 2)

    if (flip === 1) {
      counter++
      console.log('tails');
    } else {
      return `You got ${counter} tails in a row!`
    }

  }
}
