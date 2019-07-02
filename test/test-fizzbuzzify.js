/*global describe, it*/

import chai from "chai";
import { fizzbuzzify } from "../src/fizzbuzzify";

const expect = chai.expect;

const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

describe("fizzbuzzify", function () {
  it("should return \"Fizz\" for multiples of 3", function () {
    expect(fizzbuzzify(3)).to.equal(fizz);
    expect(fizzbuzzify(6)).to.equal(fizz);
    expect(fizzbuzzify(9)).to.equal(fizz);
    expect(fizzbuzzify(12)).to.equal(fizz);
    expect(fizzbuzzify(303)).to.equal(fizz);
    expect(fizzbuzzify(3000003)).to.equal(fizz);
  })

  it("should return \"Buzz\" for multiples of 5", function () {
    expect(fizzbuzzify(5)).to.equal(buzz);
    expect(fizzbuzzify(10)).to.equal(buzz);
    expect(fizzbuzzify(20)).to.equal(buzz);
    expect(fizzbuzzify(200)).to.equal(buzz);
    expect(fizzbuzzify(2000005)).to.equal(buzz);
  })

  it("should return \"FizzBuzz\" for multiples of 15", function () {
    expect(fizzbuzzify(15)).to.equal(fizzBuzz);
    expect(fizzbuzzify(30)).to.equal(fizzBuzz);
    expect(fizzbuzzify(150)).to.equal(fizzBuzz);
    expect(fizzbuzzify(3000000)).to.equal(fizzBuzz);
  })

  it("should return a stringified number for everything else", function () {
    expect(fizzbuzzify(7)).to.equal("7");
    expect(fizzbuzzify(98)).to.equal("98");
    expect(fizzbuzzify(701)).to.equal("701");
  })

  it("should blow up on non-numbers", function () {
    expect(() => fizzbuzzify(null)).to.throw()
    expect(() => fizzbuzzify([])).to.throw()
    expect(() => fizzbuzzify({})).to.throw()
    expect(() => fizzbuzzify("potato")).to.throw()
    expect(() => fizzbuzzify("10")).to.throw()
    expect(() => fizzbuzzify(10)).not.to.throw()
  })
});
