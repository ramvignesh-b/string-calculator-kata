export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }

        const nums = this.parseNumbers(input);
        let sum;

        if (nums.length === 1) {
            sum = parseInt(nums[0]);
        } else {
            sum = nums.reduce((acc, num) => acc + parseInt(num), 0);
        }
        return sum;
    }

    private parseNumbers(input: string) {
        return input.replace('\n', ',').split(",");
    }
}