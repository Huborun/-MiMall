// const webpack = require("webpack");

module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 6789,
        proxy: {
            '/mimall':{
                target:'http://localhost:3000/',
                pathRewrite: { '^/mimall': '' }
            }
        }
    },
};
