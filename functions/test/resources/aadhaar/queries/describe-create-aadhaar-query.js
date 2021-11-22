const chai = require("chai");
const { expect } = chai;
const { verifyResultOk, verifyResultError } = require("helpers/verifiers");
const uuid = require("uuid");
const db = require("db/repository");
const ds = require("helpers/dataSetup");
const RunQuery = require("data/run-query");
const CreateAadhaarQuery = require("resources/aadhaar/queries/create-aadhaar-query.js");

describe.only("Create aadhaar query", () => {
  let user, aadhaar;

  beforeEach(async () => {
    // create single will create data in database and give you data
    // build single will only give you data.
    // remember - whichever will are testing we need to do build single.
    user = await ds.createSingle(ds.user);
    aadhaar = await ds.buildSingle(ds.aadhaar, { user });
  });

  it("Should create a aadhaar for a given user", async () => {
    const createAadhaarResponse = await db.execute(
      new CreateAadhaarQuery(aadhaar.aadhaar_number, user.id)
    );

    verifyResultOk((createdAaadhaar) => {
      expect(aadhaar.aadhaar_number.toString()).to.eql(
        createdAaadhaar.dataValues.aadhaar_number
      );
      expect(aadhaar.user.id.toString()).to.eql(
        createdAaadhaar.dataValues.userId
      );
    })(createAadhaarResponse);

    const fetchedAadhaar = await db.findOne(
      new RunQuery(
        'select * from public."Aadhaars" where aadhaar_number=:aadhaar_number',
        { aadhaar_number: aadhaar.aadhaar_number.toString() }
      )
    );

    verifyResultOk((createdAadhaar) => {
      console.log(createdAadhaar);
      expect(aadhaar.aadhaar_number.toString()).eq(
        createdAadhaar.aadhaar_number
      );
      expect(aadhaar.user.id).eq(createdAadhaar.userId);
    })(fetchedAadhaar);
  });

  afterEach(async () => {
    await ds.deleteAll();
  });
});
