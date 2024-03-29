import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '../../src'),
};

export default ({ config }: {config: webpack.Configuration}) => {
    config.resolve.extensions.push('ts', 'tsx');
    config.resolve.modules.push(paths.src);
    config.module.rules.push(buildCssLoader(true));

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push(buildSvgLoader());

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }),
    );

    return config;
};
