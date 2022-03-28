const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value = "( )") {
        this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (
            Number.isInteger(position) &&
            this.arr[position - 1] !== undefined
        ) {
            this.arr.splice(position - 1, 1);
        } else {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        }
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        str = this.arr.join("~~");
        this.arr = [];
        return str;
    },
};

module.exports = {
    chainMaker,
};
