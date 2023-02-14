import { ResolveOptions } from 'webpack';
import { BuildWebpackOptions } from './types/config';

export function buildResolvers({ paths }: BuildWebpackOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {},
    };
}
