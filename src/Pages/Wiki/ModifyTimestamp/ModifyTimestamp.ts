// Separate arrow function for converting timestamp to "X hr ago" format
const ModifyTimestamp = (timestamp: string): string => {
  const now = new Date();
  const past = new Date(timestamp);
  const differenceInMilliseconds = now.getTime() - past.getTime();

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours < 0) {
    return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} sec${seconds > 1 ? "s" : ""} ago`;
  }
};

export default ModifyTimestamp;
