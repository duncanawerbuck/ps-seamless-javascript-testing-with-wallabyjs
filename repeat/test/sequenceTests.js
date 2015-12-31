/// <reference path="lib/chai.js" />
chai.should();

describe("My first wallaby test", function () {
    it("should work", function () {
        true.should.equal(true);
    });
});