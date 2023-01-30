import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildWebpackOptions} from "./types/config";


export function buildPlugins({paths}: BuildWebpackOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}