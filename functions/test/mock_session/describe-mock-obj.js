const ApiError = require("lib/functional/api-error");
const ValidationError = require("lib/validation-error");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
const TestRoutes = require("helpers/test-route");
chai.use(sinonChai);
const uuid = require("uuid");
const db = require("db/repository");
const {
  resolveDbResult,
  resolveOk,
  resolveError,
  validationError,
} = require("helpers/resolvers");
const { verifyArgs } = require("helpers/verifiers");
const FindUserByEmailQuery = require("resources/sessions/queries/find-user-by-email-query.js");

describe.only("describe login api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;
  beforeEach(() => {
    req = {
      // dummy data to be passed
      body: {
        email: "user1@gmail.com",
        password: "password",
      },
    };
    res = {
      setHeader: sandbox.spy(),
      send: sandbox.spy(),
      status: sandbox.spy(() => {
        return res;
      }),
    };
  });

  it("should create a new session when right credential passed", async () => {
    sandbox
      .mock(db)
      .expects("findOne")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(FindUserByEmailQuery);
          expect(query.email).to.eql("user1@gmail.com");
        })
      )
      .returns(
        resolveOk({
          name: "user1",
          email: "user1@gmail.com",
          password: "password",
        })
      );
    const response = await TestRoutes.execute("/sessions", "Post", req, res);
    expect(response).to.eql({
      status: true,
      message: "Successfully created new session",
      entity: {
        name: "user1",
        email: "user1@gmail.com",
      },
    });
  });

  it("should not create a new session when wrong credential passed", async () => {
    sandbox
      .mock(db)
      .expects("findOne")
      .returns(
        resolveOk({
          name: "user 1",
          email: "user1@gmail.com",
          password: "password1",
        })
      );
    const response = await TestRoutes.executeWithError(
      "/sessions",
      "Post",
      req,
      res
    );
    expect(response).to.eql(
      new ApiError(0, "Password didnt match", "Authentication failed")
    );
  });

  it("should not create a new session is user does not exist", async () => {
    sandbox.mock(db).expects("findOne").returns(resolveOk(null));
    const response = await TestRoutes.executeWithError(
      "/sessions",
      "Post",
      req,
      res
    );
    expect(response).to.eql(
      new ApiError(0, "User doesn't exist", "Authentication failed")
    );
  });

  it("should not create a new session when something goes wrong", async () => {
    sandbox
      .mock(db)
      .expects("findOne")
      .returns(resolveError("Some random error"));
    const response = await TestRoutes.executeWithError(
      "/sessions",
      "Post",
      req,
      res
    );
    expect(response).to.eql(
      new ApiError(0, "Some random error", "Authentication failed")
    );
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
  });
});
