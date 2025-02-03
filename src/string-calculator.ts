export default class Calculator {

    add(input: string) {
        if (input === "") {
            return 0;
        }
        return parseInt(input);
    }
}