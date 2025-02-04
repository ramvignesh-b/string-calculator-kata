export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }

        const nums = this.parseNumbers(input);

        if (nums.some(nums => parseInt(nums) < 0)) {
            const negativeNumbers = nums.filter(nums => parseInt(nums) < 0);
            throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
        }

        let sum;

        if (nums.length === 1) {
            sum = parseInt(nums[0]);
        } else {
            sum = nums.reduce((acc, num) => acc + parseInt(num), 0);
        }
        return sum;
    }

    private parseNumbers(input: string) {
        let _input = input;
        let customDelimiter = this.getDelimiter(_input);
        _input = _input.replace(new RegExp(`[//${customDelimiter}\n]`, 'g'), ',');
        return _input.split(',').filter(Number);
    }

    private getDelimiter(_input: string) {
        let delimiter = ',';
        if (_input.startsWith("//")) {
            delimiter = _input.charAt(2);
        }
        return delimiter;
    }
}