export const updateTime = (date) => {
  const timeDifference = new Date(date) - new Date();
  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);
  return `${hours}:${minutes}:${seconds}`;
};
