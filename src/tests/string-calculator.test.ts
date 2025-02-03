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
});