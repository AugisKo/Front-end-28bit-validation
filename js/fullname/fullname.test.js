const fullname = require ('./fullname');

test
    expect(fullname('Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
});

Test('error without lastname', () => {
    expect(fullname('Vardenis', '')).toBe(false);
})