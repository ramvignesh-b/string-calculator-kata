import Calculator from '../string-calculator';
import {describe, expect, it} from "vitest";

describe('String Calculator', () => {
    it("should return 0 for an empty string", () => {
        const calculator = new Calculator();
        expect(calculator.add("")).toBe(0);
    });

    it("should return the number for a single number", () => {
        const calculator = new Calculator();
        expect(calculator.add("1")).toBe(1);
    });

    it("should return the sum for two numbers separated by a comma", () => {
        const calculator = new Calculator();
        expect(calculator.add("1,2")).toBe(3);
    });

    it("should return the sum for multiple numbers separated by a comma", () => {
        const calculator = new Calculator();
        expect(calculator.add("1,2,3")).toBe(6);
    });

    it('should handle newlines as a separator', () => {
        const calculator = new Calculator();
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    it('should handle custom delimiters', () => {
        const calculator = new Calculator();
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    it('should throw error on negative numbers', () => {
        const calculator = new Calculator();
        expect(() => calculator.add("1,-2")).toThrowError("negatives not allowed: -2");
    });

    it('should ignore numbers greater than 1000', () => {
        const calculator = new Calculator();
        expect(calculator.add("2,1001,3")).toBe(5);
    });
});

