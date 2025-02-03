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
});