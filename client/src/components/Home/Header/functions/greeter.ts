export const greeter = (): string => {
  const now = new Date().getHours();
  let msg: string;
/*
  const greetingsSchemaRaw =
    localStorage.getItem('greetingsSchema') ||
    'Good evening!;Good afternoon!;Good morning!;Good night!';
  const greetingsSchema = greetingsSchemaRaw.split(';');
*/
  if (now >= 18) msg = 'header.greeter.evening';
  else if (now == 12) msg = 'header.greeter.noon';
  else if (now >= 12) msg = 'header.greeter.day';
  else if (now >= 6) msg = 'header.greeter.morning';
  else if (now >= 0) msg = 'header.greeter.night';
  else msg = 'header.greeter.generic';

  return msg;
};
