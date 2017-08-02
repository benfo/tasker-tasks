import cleanup from 'rollup-plugin-cleanup';

export default {
    entry: 'src/tasks/get-packpub-daily-deal.js',
    dest: 'dist/get-packpub-daily-deal.min.js',
    format: 'iife',
    plugins: [cleanup()]
};