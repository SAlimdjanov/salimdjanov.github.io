/**
 * GenerateListElements.js
 */

/**
 * Converts an array of strings to renderable list elements
 *
 * @param {Array} array Array containing strings
 * @returns li elements containing strings from input array
 */
const generateListElements = (array) =>
    array.map((item, index) => <li key={index}>{item}</li>);

export default generateListElements;
