const chai = require("chai");

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

let a = 2,
  b = 2;

expect(a).to.be.equals(b, "a and b not equal");
a.should.be.equals(b);
assert(a, b, "a and b not equal");

function obj() {
  return {
    a: 100,
    b: "Hello",
  };
}

x = new obj();
y = new obj();

expect(x).to.be.an("object");
// expect(x).to.be.equals(y, "x and y not equal");
// above assertion fails with this cos the check is not being performed on the contents of x and y..
// to check object content, use deep.equals
expect(x).to.be.deep.equals(y, "x and y not equal");

expect(x).to.be.an("object").and.to.be.deep.equals(y, "x and y not equal");
x.should.be.an("object").and.to.be.deep.equals(y, "x and y not equal");
// to use **expect**, it should precede any other assertions in a chain
// **should** extends an object.prototype to provide a single access point
assert.deepEqual(x, y, "x and y not equal");

let numArr = [1, 2, 3, 0];
expect(numArr).to.be.an("array").that.includes(3);
numArr.should.be.an("array").that.includes(0);
assert.isArray(numArr, "numArr is not an array");

assert.equal(a, "a");
