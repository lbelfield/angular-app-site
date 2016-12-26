module.exports = {
    entry: "./js/app.module.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
        {
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        },
        {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
        ]
    }
}