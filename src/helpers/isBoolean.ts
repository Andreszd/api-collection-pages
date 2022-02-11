export const isBoolean = (param: string) => {
  return param.toLowerCase() === 'true' || param.toLowerCase() === 'false';
};

export const isValidFilterParam = (param: any) =>
  typeof param === 'string' && isBoolean(param);
