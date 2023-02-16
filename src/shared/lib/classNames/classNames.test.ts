import { classNames } from 'shared/lib';

describe('classNames', () => {
    test('return class string', () => {
        expect(classNames('app', { selected: true, hovered: false }, []))
            .toBe('app selected');
    });
});
