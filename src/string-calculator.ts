export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }

        const nums = input.split(",");
        let sum = 0;

        if (nums.length === 1) {
            sum = parseInt(nums[0]);
        } else {
            sum = parseInt(nums[0]) + parseInt(nums[1]);
        }
        return sum;
    }
}