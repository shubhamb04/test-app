const Stack = require("../Stack")

describe("My stack", () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    //test if stack is intantiated with valid state
    it("is created empty", () => {

        expect(stack.top).toBe(-1); //toBe is a matcher

        expect(stack.items).toEqual({});    
    });

    it("can push at the top", () => {

        stack.push("Hi")

        expect(stack.top).toBe(0);

        expect(stack.peek).toBe("Hi")
    });

    it("can pop off", () => {

        stack.pop();

        expect(stack.top).toBe(-1); 

        expect(stack.peek).toBe(stack.items[stack.top])
    });
})