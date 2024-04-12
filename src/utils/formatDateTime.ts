export function getFormattedTime(dateTime: string) {
  const dateTimeObject = new Date(dateTime);

  const hours = dateTimeObject.getHours();
  const minutes = dateTimeObject.getMinutes();

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return "Invalid date";
  }

  const meridiem = hours >= 12 ? "p.m." : "a.m.";
  const roundedHours = hours % 12 ? hours : 12;
  const formattedHours = roundedHours < 10 ? `0${roundedHours}` : roundedHours
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${meridiem}`;
}
