import cleanup from 'rollup-plugin-cleanup'

export default {
    entry: 'src/main.js',
    dest: 'dist/tasklib.js',
    format: 'iife',
    moduleName: 'tasklib',
    plugins: [cleanup()]
}