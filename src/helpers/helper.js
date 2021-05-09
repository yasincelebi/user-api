/**
 * Map function to keep the component file clean.
 * @param {array} arr Array to map.
 * @return {array} Mapped array.
 */
export const mapArr = (arr) => {
  let mappedArray = arr.map((e) => {
    return e;
  });
  return mappedArray;
};
/** 
   * Makes the first letter of the given string to uppercase
  @param {string} String 
  @return {string} String
  */
export const firstLetterUpper = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
