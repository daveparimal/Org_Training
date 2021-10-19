
const Route = require("route");
const { logInfo } = require("lib/functional/logger");
const { respond, whenResult, composeResult, withArgs } = require("lib");
const db = require("db/repository");
const uuid = require("uuid");
const CreateCountryQuery = require("resources/country/queries/create-country-query.js");
const CreateCountryValidation = require("../validators/create-country-validation");
async function post(req) {
  const { name } = req.body;

  logInfo("Request to create country", {name});
  const countryId = uuid.v4();

  let response = await composeResult(
    withArgs(db.execute ,new CreateCountryQuery(countryId, name)),
    CreateCountryValidation.validate
  )({name})

  return respond(
    response,
    "Successfully created country!",
    "Failed to create country!"
  );
}

Route.withOutSecurity().noAuth().post("/country", post).bind();
