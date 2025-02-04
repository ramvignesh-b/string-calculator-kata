export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }

        const nums = input.replace('\n', ',').split(",");
        let sum = 0;

        if (nums.length === 1) {
            sum = parseInt(nums[0]);
        } else {
            sum = nums.reduce((acc, num) => acc + parseInt(num), 0);
        }
        return sum;
    }
}