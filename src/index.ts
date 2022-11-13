import batteryLevel from 'battery-level';
import { db, getStats } from './db';

interface BatteryLog {
  time: unknown;
  level: number;
}

const ONE_MINUTE_IN_MILLISECONDS = 1000 * 60;

setTimeout(() => getStats(db), 100);

let batteryLogs: BatteryLog[] = [];

// TODO: this should actually save logs in DB
const logBattery = () =>
  console.log(
    batteryLevel().then((level: number) => {
      console.log(level);
      batteryLogs = [...batteryLogs, { time: Date.now(), level }];
    })
  );

setInterval(logBattery, ONE_MINUTE_IN_MILLISECONDS);
