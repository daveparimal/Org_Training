const chai = require("chai");
const { expect } = chai;
const { verifyResultOk, verifyResultError } = require("helpers/verifiers");
const uuid = require("uuid");
const db = require("db/repository");
const ds = require("helpers/dataSetup");
const RunQuery = require("data/run-query");
const CreateAadhaarQuery = require("resources/aadhaar/queries/create-aadhaar-query.js");

describe.only("Create aadhaar query", () => {
  let aadhaar;
  beforeEach(async () => {
    aadhaar = await ds.createSingle(ds.aadhaar);
  });

  it("Should create a aadhaar for a given user", async () => {
    console.log(aadhaar);
  });

  afterEach(async () => {
    await ds.deleteAll();
  });
});
