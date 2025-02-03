export default class Calculator {

    add(input: string) {
        return input === "" ? 0 : parseInt(input);
    }
}