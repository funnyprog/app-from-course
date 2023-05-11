type Mods = Record<string, string | boolean>

export const classNames = (
    mainClass: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([, value]) => Boolean(value))
        .map(([cls]) => cls),
]
    .join(' ');
