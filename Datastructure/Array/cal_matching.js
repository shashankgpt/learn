function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
    let startTimeBound = converToNumber(dailyBounds1[0]) < converToNumber(dailyBounds2[0]) ? dailyBounds2[0] : dailyBounds1[0];
    let endTimeBound = converToNumber(dailyBounds1[1]) < converToNumber(dailyBounds2[1]) ? dailyBounds1[1] : dailyBounds2[1];
    if (calendar1.length === 0 && calendar2.length === 0) {
        return [[startTimeBound, endTimeBound]]
    }
  const finalSlot = [...calendar1, ...calendar2];
  finalSlot.sort((a,b) => converToNumber(a[0]) - converToNumber(b[0]))
  const finalSlotMerged = [finalSlot[0]]
  debugger;
  for (let i =1;i<finalSlot.length;i++) {
    const prev = finalSlotMerged[finalSlotMerged.length -1];
    const current = finalSlot[i];
    if (converToNumber(prev[1]) > converToNumber(current[0])) {
        let final = converToNumber(current[1]) > converToNumber(prev[1]) ? current[1] : prev[1]
        finalSlotMerged[finalSlotMerged.length -1] = [prev[0], final]
    } else {
        finalSlotMerged.push(current)
    }
  }
  debugger;
 
  let startTime = startTimeBound;
  let endTime;
  let result = [];
  debugger;
  let i =0
  while (i <finalSlotMerged.length) {
    let current = finalSlotMerged[i];
    if (converToNumber(current[0]) <= converToNumber(startTime)) {
        startTime = converToNumber(startTimeBound) > converToNumber(current[1]) ? startTimeBound : current[1];
        endTime = i+1 === finalSlotMerged.length ? endTimeBound: finalSlotMerged[i+1][0]
        if (startTime !== endTime && isDurationWithin(startTime, endTime, meetingDuration)) {
            result.push([startTime, endTime])
        } 
        startTime = endTime
        i++
    } else {
        endTime = current[0]
        if (isDurationWithin(startTime, endTime, meetingDuration)) result.push([startTime, current[0]])
        startTime = current[0]
        
    }
  }
  console.log(startTimeBound, endTimeBound, finalSlotMerged)
  return result;
}

function minutesBetween(start, end) {
    let startHours = Math.floor(start / 100);
    let startMinutes = start % 100;
    let endHours = Math.floor(end / 100);
    let endMinutes = end % 100;

    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;
    debugger;
    return endTotalMinutes - startTotalMinutes;
}

const isDurationWithin = (startTime, endTime, min) => {
    debugger;
   return minutesBetween(converToNumber(startTime), converToNumber(endTime)) >= min
}

const converToNumber = (time) => {
    const b = time.split(":");
    a = b[0] + b[1];
    return Number(a);
}

const d = {
    "calendar1": [
      ["7:00", "7:45"],
      ["8:15", "8:30"],
      ["9:00", "10:30"],
      ["12:00", "14:00"],
      ["14:00", "15:00"],
      ["15:15", "15:30"],
      ["16:30", "18:30"],
      ["20:00", "21:00"]
    ],
    "dailyBounds1": ["6:30", "22:00"],
    "calendar2": [
      ["9:00", "10:00"],
      ["11:15", "11:30"],
      ["11:45", "17:00"],
      ["17:30", "19:00"],
      ["20:00", "22:15"]
    ],
    "dailyBounds2": ["8:00", "22:30"],
    "meetingDuration": 30
  };

calendarMatching(
  d.calendar1,
  d.dailyBounds1,
  d.calendar2,
  d.dailyBounds2,
  d.meetingDuration
);
