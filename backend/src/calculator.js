/**
 * @file calculator.js
 * @brief Demo module for testing quality gates
 */

/**
 * @brief Calculate total price with tax
 * @param {number} price - Base price before tax
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.07)
 * @return {number} Total price including tax
 * @throws {Error} if price < 0
 */
function calculateTotal(price, taxRate) {
    if (price < 0) {
        throw new Error('Price cannot be negative');
    }
    return price * (1 + taxRate);
}

module.exports = { calculateTotal };
// Test comment Tue Jan 13 00:02:44 +07 2026
