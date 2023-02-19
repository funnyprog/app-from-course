import { classNames } from 'shared/lib';

const NAME = 'Test of classNames func';

describe(NAME, () => {
    test('return class string', () => {
        const className = classNames('app', { selected: true, hovered: false }, []);
        expect(className).toBe('app selected');
    });

    test('empty', () => {
        const className = classNames('', {}, []);
        expect(className).toBe('');
    });

    test('mods', () => {
        const className = classNames('app', { selected: false }, []);
        expect(className).toBe('app');
    });
});
