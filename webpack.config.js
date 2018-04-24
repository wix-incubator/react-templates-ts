module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    // resolve: {
        // extensions: ['.js', '.jsx', '.ts', '.tsx', '.rt', '.es6', '.json', '.scss', '.css'],
        // plugins: [new TsconfigPathsPlugin()]
    // },
    output: {
        filename: './output.js',
        // path: path.resolve(__dirname)
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [
            // // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            //
            // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.rt$/,
                loader: 'react-templates-loader?target-version=15.0.0&modules=commonjs',
                // include: `${__dirname}/src`,
            }
        ]
    }
}