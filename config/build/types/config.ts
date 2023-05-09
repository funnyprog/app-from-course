export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    api: string
}

export interface BuildWebpackOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    api: string
}
