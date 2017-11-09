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
  let blocks = Math.abs(startingBlock-endingBlock);
  let feet = blocks * 264;
  return feet;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let feet = distanceTravelledInFeet(startingBlock, endingBlock);
  let fare;

  switch(feet) {
    case (feet <= 400) {
      return fare = 0; //break?
    }
    case (feet >= 400 && feet <= 2000) {
      return fare = feet * 0.02;
    }
    case (feet >= 2000 && feet <= 2500 ) {
      return fare = 25;
    }
    case (feet > 2500) {
      return 'cannon travel that far';
    }
  }
}
