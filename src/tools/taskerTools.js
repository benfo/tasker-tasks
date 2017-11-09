/**
 * Export the given key/values to tasker as local variables.
 * @param {Object} values - An object with key value pairs.
 */
export function exportLocal(values) {
    for (var key of Object.keys(values)) {
        setLocal(key, values[key])
    }
}

/**
 * Export the given key/values to tasker as global variables.
 * @param {Object} values - An object with key value pairs.
 */
export function exportGlobal(values) {
    for (var key of Object.keys(values)) {
        setGlobal(key, values[key])
    }
}