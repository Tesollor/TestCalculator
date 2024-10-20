/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Импортируем плагин

module.exports = {
    entry: "./script.js", // Ваш основной JS файл
    output: {
        path: path.resolve(__dirname, "dist"), // Куда будут сохраняться файлы
        filename: "bundle.js", // Имя собранного файла JS
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Обработка CSS файлов
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/, // Обработка JS и JSX файлов
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", // Ваш исходный index.html файл
            filename: "index.html", // Имя файла, который будет сгенерирован в dist
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
    },
    mode: "development",
};
