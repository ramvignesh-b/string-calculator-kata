export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }

        const nums = this.filterNumbers(this.parseNumbers(input));
        this.validateNumbers(nums);

        let sum;

        if (nums.length === 1) {
            sum = nums[0];
        } else {
            sum = nums.reduce((acc, num) => acc + num, 0);
        }
        return sum;
    }

    private filterNumbers(numbers: number[]) {
        return numbers.filter(num => num <= 1000);
    }

    private validateNumbers(nums: number[]) {
        if (nums.some(num => num < 0)) {
            const negativeNumbers = nums.filter(nums => nums < 0);
            throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
        }
    }

    private parseNumbers(input: string): number[] {
        let _input = input;
        let customDelimiter = this.getDelimiter(_input);
        _input = _input.replace(new RegExp(`[//${customDelimiter}\n]`, 'g'), ',');
        return _input.split(',').filter(Number).map(x => Number(x));
    }

    private getDelimiter(_input: string) {
        let delimiter = ',';
        if (_input.startsWith("//[")) {
            delimiter = this.concatMultiDelimiters(_input);
        } else if (_input.startsWith("//")) {
            delimiter = _input.charAt(2);
        }
        return delimiter;
    }

    private concatMultiDelimiters(_input: string) {
        const delimiterMatches = _input.match(/\[(.*?)]/g);
        let delimiter = _input.split('\n')[0].substring(3, _input.split('\n')[0].length - 1);
        if (delimiterMatches) {
            delimiter = delimiterMatches.map(delimiter => delimiter.substring(1, delimiter.length - 1)).join('|');
        }
        return delimiter;
    }
}