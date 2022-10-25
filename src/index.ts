const batteryLevel = require('battery-level');

interface BatteryLog {
  time: unknown;
  level: number;
}

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60;

let batteryLogs: BatteryLog[] = [];

const logBattery = () =>
  console.log(
    batteryLevel().then((level: number) => {
      console.log(level);
      batteryLogs = [...batteryLogs, { time: Date.now(), level }];
    })
  );

setInterval(logBattery, FIVE_MINUTES_IN_MILLISECONDS);
