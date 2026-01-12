const { calculateTotal } = require('./calculator');

describe('Calculator', () => {
    test('calculateTotal applies tax correctly', () => {
        expect(calculateTotal(100, 0.07)).toBe(107);
    });

    test('calculateTotal throws on negative price', () => {
        expect(() => calculateTotal(-10, 0.07)).toThrow();
    });
});
