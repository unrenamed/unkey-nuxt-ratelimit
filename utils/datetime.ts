import {
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
} from "date-fns";

export const timeUntilDate = (target: Date) => {
  const now = new Date();
  const secondsUntil = differenceInSeconds(target, now);
  const minutesUntil = differenceInMinutes(target, now);
  const hoursUntil = differenceInHours(target, now);

  // If the target date is in the past
  if (secondsUntil < 0) {
    return "The date has already passed.";
  }

  if (secondsUntil < 60) {
    return `${secondsUntil} seconds`;
  } else if (minutesUntil < 60) {
    return `${minutesUntil} minutes`;
  } else {
    return `${hoursUntil} hours`;
  }
};
