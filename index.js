// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  const firstTwoArray = [...drivers];
  return [firstTwoArray[0], firstTwoArray[1]];
};

const returnLastTwoDrivers = function (drivers) {
  const lastTwoArray = [...drivers];
  return [lastTwoArray[2], lastTwoArray[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  return function (fares) {
    return fares ** 2;
  };
}

const fareDoubler = (fares) => {
  return fares * 2;
};

const fareTripler = (fares) => {
  return fares * 3;
};

function selectDifferentDrivers(drivers, selectingDrivers) {
  if (selectingDrivers === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if ( selectingDrivers === returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
  }
}
