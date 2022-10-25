const batteryLevel = require('battery-level');

const FIVE_MINUTES_IN_MILISECONDS = 1000 * 60 * 5;

const logBattery = () =>
  console.log(
    batteryLevel().then((level: number) => {
      console.log(level);
    })
  );

setInterval(logBattery, FIVE_MINUTES_IN_MILISECONDS);
