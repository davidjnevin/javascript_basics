// Speed limit 70
// every +5 -> 1 point
// Math.floor(1.3) -> 1
// 12 pints -> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerIncrement = 5;
  const maxPointsBeforeSuspension = 12;

  if (speed >= speedLimit + pointsPerIncrement) {
    const points = Math.floor((speed - speedLimit) / pointsPerIncrement);
    if (points >= maxPointsBeforeSuspension) return "suspended";
    return points === 1 ? points + " point" : points + " points";
  }
  return "ok";
}

console.log(checkSpeed(130));
