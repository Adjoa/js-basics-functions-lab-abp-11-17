// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    let blocks = pickupLocation - 42;
    return blocks;
  } else if (pickupLocation < 42) {
    let blocks = 42 - pickupLocation
    return blocks;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  let blocks = distanceFromHqInBlocks(pickupLocation);
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let feet = Math.abs(startingBlock-endingBlock);
  return feet;
}

function calculatesFarePrice() {

}
