var assert = require("assert");

describe("just following some tutorials", function () {
  var a = 10;
  var b = 10;

  before("Before all tests", () => {
    console.log("Execute before all tests");
  });
  beforeEach("Before each test", () => {
    console.log("Execute before each test");
  });
  after("After all tests", () => {
    console.log("Execute after all tests");
  });
  afterEach("After each test", () => {
    console.log("Execute after each test");
  });

  it("number addition", function () {
    var c = a + b;
    assert.equal(c, 20);
  });
  it("number subtraction", function (done) {
    this.retries(2);
    this.timeout(500);
    setTimeout(done, 3000);
    var c = a - b;
    assert.equal(c, 0);
  });
  it("number multiplication", function () {
    var c = a * b;
    assert.equal(c, 100);
  });
  it("number division", function () {
    var c = a / b;
    assert.equal(c, 1);
  });
  //   it("observing pending test case behavior in mocha");
  //   //test cases without a callback function become pending
});
