export const range = (start = 0, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  return Array.from({ length: end - start }, (_, i) => i + start);
};
