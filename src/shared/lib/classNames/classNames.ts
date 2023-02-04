type Mods = Record<string, string | boolean>

export const classNames = (
    mainClass: string,
    mods: Mods,
    additional: Array<string>
): string => {
    return [
        mainClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([cls]) => cls)
    ]
        .join(' ')
}