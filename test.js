const postTimestamp = 1637852580 * 1000;
const currentTimestamp = new Date().getTime();

const seconds = Math.floor((currentTimestamp - postTimestamp) / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

const daysOfTheMonth = (y, m) => new Date(y, m, 0).getDate();

const months = Math.floor(days)
