const findDate = require("./findDate");
it("finds dd.mm.yyyy", () => {
  const fragments = ["asd", "12.03.2015", "34983"];

  const date = findDate(fragments);

  expect(date).toEqual(new Date("2015-03-12"));
});

it("finds dd.mm.yy", () => {
  const fragments = ["asd", "12.03.15", "34983"];

  const date = findDate(fragments);

  expect(date).toEqual(new Date("2015-03-12"));
});

it("finds yyyy-mm-dd", () => {
  const fragments = ["asd", "12.03.15", "34983"];

  const date = findDate(fragments);

  expect(date).toEqual(new Date("2015-03-12"));
});

it("returns null if no dates are present", () => {
  const fragments = ["asd", "..", "34983"];

  const date = findDate(fragments);

  expect(date).toBe(null);
});

it("returns the latest date if multiple dates are present", () => {
  const fragments = ["asdf", "2014-03-12", "2017-06-06", "12.03.2015"];

  const date = findDate(fragments);

  expect(date).toEqual(new Date("2017-06-06"));
});

it("returns null if date is invalid", () => {
  const fragments = ["asd", "50.03.2010", "34983"];

  const date = findDate(fragments);

  expect(date).toBeNull();
});

it("returns null if date is in the future", () => {
  const fragments = ["asd", "10.03.2030", "34983"];

  const date = findDate(fragments);

  expect(date).toBeNull();
});

it("returns null if date is older than 10 years", () => {
  const fragments = ["asd", "10.03.2005", "34983"];

  const date = findDate(fragments);

  expect(date).toBeNull();
});
