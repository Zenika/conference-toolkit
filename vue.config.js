module.exports = {
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV !== 'production',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/conference-toolkit/'
        : '/',
};
