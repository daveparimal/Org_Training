const chai = require("chai");
const expect = chai.expect;
const { whenResult } = require("lib");
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../../helpers/verifiers");
const Result = require("folktale/result");

describe.only("result", () => {
  it("should wrap data", () => {
    let data = Result.Ok({ id: 1, name: "some user" });

    let response = data.matchWith({
      Ok: ({ value }) => `Ok: ${JSON.stringify(value)}`,
      Error: ({ value }) => `Error: ${value}`,
    });

    expect(response).to.eql('Ok: {"id":1,"name":"some user"}');
  });

  it("should wrap error", () => {
    let data = Result.Error("some error");

    let response = data.matchWith({
      Ok: ({ value }) => `Ok: ${JSON.stringify(value)}`,
      Error: ({ value }) => `Error: ${value}`,
    });

    expect(response).to.eql("Error: some error");
  });
});

describe.only("whenResult", () => {
  it("should handle result Ok", async () => {
    let data = Result.Ok({ id: 1, name: "some user" });

    let response = await whenResult(
      (user) => {
        return `Ok: ${JSON.stringify(user)}`;
      },
      (error) => {
        return `Error: ${error}`;
      }
    )(data);
    expect(response).to.eql('Ok: {"id":1,"name":"some user"}');
  });

  it("should handle result Error", async () => {
    // prettier-ignore
    let data = Result.Error("some error");

    let response = await whenResult((user) => {
      return `Ok: ${JSON.stringify(user)}`;
    })(data);

    console.log(response.value);
    // prettier-ignore
    expect(response.value).to.eql("some error");
  });
});
