export default class Calculator {

    add(input: string) {
        const nums = input.split(",");
        if (nums.length > 1) {
            return parseInt(nums[0]) + parseInt(nums[1]);
        }
        return input === "" ? 0 : parseInt(input);
    }
}