/**
 * Export the given key/values to tasker as local variables.
 * @param {Object} values - An object with key value pairs.
 */
export function exportLocal(values) {
    Object.keys(values).forEach((key, value) => {
        setLocal(key, value);
    });
}

/**
 * Export the given key/values to tasker as global variables.
 * @param {Object} values - An object with key value pairs.
 */
export function exportGlobal(values) {
    Object.keys(values).forEach((key, value) => {
        setGlobal(key, value);
    });
}