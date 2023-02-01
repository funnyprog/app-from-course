import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildWebpackOptions} from "./types/config";


export function buildLoaders({isDev}: BuildWebpackOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                            localIdentName: isDev
                                ? "[path][name]__[local]"
                                : "[hash:base64:5]",
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}