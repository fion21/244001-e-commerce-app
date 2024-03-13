import sum  from "../sum";


test("Should raise an error if one of the inputs is not a number", function() {
  expect(() => sum("0", -2)).toThrowError("Both arguments must be numbers");
});
