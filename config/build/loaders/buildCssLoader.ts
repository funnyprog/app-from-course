import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildWebpackOptions } from '../types/config';

export const buildCssLoader = (isDev: BuildWebpackOptions['isDev']) => ({
    test: /\.(sa|sc|c)ss$/,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                importLoaders: 0,
                modules: {
                    auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]'
                        : '[hash:base64:5]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
