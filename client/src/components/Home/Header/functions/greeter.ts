export const greeter = (): string => {
  const now = new Date().getHours();
  let msg: string;

  if (now >= 18) msg = 'header.greeter.evening';
  else if (now == 12) msg = 'header.greeter.noon';
  else if (now >= 10) msg = 'header.greeter.day';
  else if (now >= 6) msg = 'header.greeter.morning';
  else msg = 'header.greeter.night';

  return msg;
};
