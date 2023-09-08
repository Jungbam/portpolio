/* eslint-disable @typescript-eslint/no-explicit-any */
export const reduceList = (tagList: any) => {
  return tagList.filter((tag: any, idx: number) => idx < 5);
};
