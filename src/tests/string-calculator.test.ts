import Calculator from '../string-calculator';
import {beforeEach, describe, expect, it} from "vitest";

describe('String Calculator', () => {
    let calculator: Calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return 0 for an empty string", () => {
        expect(calculator.add("")).toBe(0);
    });

    it("should return the number for a single number", () => {
        expect(calculator.add("1")).toBe(1);
    });

    it("should return the sum for two numbers separated by a comma", () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    it("should return the sum for multiple numbers separated by a comma", () => {
        expect(calculator.add("1,2,3")).toBe(6);
    });

    it('should handle newlines as a separator', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    it('should handle custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    it('should throw error on negative numbers', () => {
        expect(() => calculator.add("1,-2")).toThrowError("negatives not allowed: -2");
    });

    it('should ignore numbers greater than 1000', () => {
        expect(calculator.add("2,1001,3")).toBe(5);
    });

    it('should handle arbitrary length of separators', () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });

    it('should handle multiple single length separators', () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    });

    it('should handle multiple longer-length separators', () => {
        expect(calculator.add("//[foo][bar]\n1foo2bar3")).toBe(6);
    });
});

