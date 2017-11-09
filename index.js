// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    let blocks = pickup - 42;
    return blocks;
  } else if (pickup < 42) {
    let blocks = 42 - pickup
    return blocks;
  }
}

function distanceFromHqInFeet(pickup) {
  let blocks = distanceFromHqInBlocks(pickup);
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(start, end) {

}

function calculatesFarePrice() {

}
