module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    // uncomment line below if the application is available on a specific path like https://zenika.github.io/conference-toolkit/
    // publicPath: process.env.NODE_ENV === 'production' ? '/conference-toolkit/' : '/'
    configureWebpack: {
        resolve: {
            fallback: { "timers": require.resolve('timers-browserify') }
        },
    }
};
