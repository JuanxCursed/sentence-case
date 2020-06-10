export const SententeCase = (string) => {
 return string
      .trim()
      .toLowerCase()
      .split('.')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join('.')
};
