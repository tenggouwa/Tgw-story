let webpackConfig = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        name: 'js/bundle-[name]-[hash].js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/dist/'
    },
    module: {
        rules:[{
            test: /(\.jsx|\.js)$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["es2015", "react"]
              }
            },
            exclude: /node_moudles/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }]
    }
}

