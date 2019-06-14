export const store = {
    state: {
        numbers: [1, 2, 3, 4, 5]
    }, 
    addNumber(newNumber) {
        this.state.number.push(newNumber);
    }
};