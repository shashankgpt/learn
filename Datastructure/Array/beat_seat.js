function bestSeat(seats) {
  const indexofSeats = [];
  for (let i = 0; i < seats.length; i++) {
    if (!seats[i]) {
      indexofSeats.push(i);
    }
  }
  let bestSeat = -1;
  let sum = -1;
  let diff = -1
  for (let i = 0; i < indexofSeats.length; i++) {
    debugger;
    const [seatIndex, left, right] = checkSeat(indexofSeats[i], seats);
    let s = left + right
    let d = left > right ? left -right : right -left;
    if (bestSeat === -1 || sum < s || sum === s && diff > d) {
        bestSeat = seatIndex;
        sum = s;
        diff = d
    }
  }
  return bestSeat;
}

const checkSeat = (index, seats) => {
  const pivotSeat = index;
  let left = 0;
  for (let i = pivotSeat - 1; i > 0; i--) {
    if (seats[i] === 0) {
      left++;
    } else {
      break;
    }
  }
  let right = 0;

  for (let i = pivotSeat + 1; i < seats.length; i++) {
    if (seats[i] === 0) {
      right++;
    } else {
      break;
    }
  }
  return [pivotSeat, left, right];
};

bestSeat([1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
