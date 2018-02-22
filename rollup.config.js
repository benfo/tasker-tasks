import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/tasklib.js',
    format: 'iife',
    name: 'tasklib'
  },
  context: 'window',
  plugins: [cleanup()]
}
