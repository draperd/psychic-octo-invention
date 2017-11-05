module.exports = {
    title: 'Munikum styleguide',
    serverPort: 6770,
    sections: [
        { name: 'Common', components: './src/components/**/*.tsx' }
    ],
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
};