import { cnNumbers } from "../utils/chars";

/**
 * Checks whether the character is part of a number (either a number itself, or
 * a space/comma), or a part of unrelated text.
 * @param {string} character - A string containing only one character to be
 *    checked.
 * @returns {boolean} True if the `character` is a Chinese or Arabic number
 *    or a character like "comma" and "space", which should not delimit two
 *    numbers; rather, they mean that the number may continue. E.g. "6,000" or
 *    "6 000".
 */
export const isNumberOrSpace = (character: string): boolean => {
  // Make sure `character`.length is exactly 1:
  if (!character || character.length !== 1) {
    throw new Error(
      "isNumberOrSpace() must receive exactly one character for checking."
    );
  }

  // Check for Arabic numbers, commas and spaces:
  if (/[\d\s,.]/u.test(character)) {
    return true;
  }

  // Check if the character is on the list of Chinese number characters:
  return !!cnNumbers[character];
};
