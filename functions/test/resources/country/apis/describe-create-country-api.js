const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;

const db = require("db/repository");
const { resolveOk } = require("helpers/resolvers");

const TestRoutes = require("helpers/test-route");

describe.only("create aadharDetail api", () => {
  const sandbox = sinon.createSandbox();
  let req, res , resultData;

  beforeEach(() => {
    req = {
      body: {
        name: "India",
      },
    };
    res = {
      setHeader: sandbox.spy(),
      send: sandbox.spy(),
      status: sandbox.spy(() => {
        return res;
      }),
    };
    resultData = {
    "message": "Successfully created country!",
    "status": true,
    "entity": {
        "id": "9fbd639b-7b75-4eb7-915e-631dbec1643f",
        "name": "Bharat",
        "updatedAt": "2021-10-12T09:25:55.517Z",
        "createdAt": "2021-10-12T09:25:55.517Z"
    }
}
  });

  it("should create a Country", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(
        resolveOk(resultData)
      );
    const response = await TestRoutes.execute("/country", "Post", req, res);
    console.log(response);
    console.log("=================================")
    console.log(resultData);


    expect(response).to.eql(resultData);
  });
  afterEach(() => {
    sandbox.verifyAndRestore();
  });
});
