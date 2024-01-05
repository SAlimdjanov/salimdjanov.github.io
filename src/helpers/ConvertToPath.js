/**
 * ConvertToPath.js
 */

/**
 * Convert a component name to a path for use in the DOM router
 *
 * @param {Array} array Array containing strings of component names
 * @param {String} item String name of required component
 * @returns {String} String path for specified component
 */
const itemToPath = (array, item) => {
    const index = array.indexOf(item);
    return "/" + array[index].toLowerCase();
};

export default itemToPath;
