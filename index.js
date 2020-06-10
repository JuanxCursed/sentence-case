export const SententeCase = (string) => {
  string = string.trim().toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};
