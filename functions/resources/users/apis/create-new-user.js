const Route = require("route");
const { logInfo } = require("lib/functional/logger");
const { respond, whenResult } = require("lib");
const db = require("db/repository");
const CreateUserQuery = require("resources/users/queries/create-user-query");
const CreateUserValidation = require("../validators/create-user-validation");

// const Result = require("folktale/result");
// const Models = require("models");

async function postUser(req) {
  // const user = req.body;
  const { full_name, country_code, email, aadhaar_id } = req.body;
  logInfo("Request to create user", {
    full_name,
    country_code,
    email,
    aadhaar_id,
  });

  //   const userId = uuid.v4();

  const validationResult = await CreateUserValidation.validate({
    full_name,
    email,
    country_code,
    aadhaar_id,
  });

  // whever the result is successful (validationResult is successful), execute the database.execute method.
  // If in case of failure return the error to the response variable.

  const response = await whenResult(() => {
    return db.execute(
      new CreateUserQuery(full_name, country_code, aadhaar_id, email)
    );
  })(validationResult);

  // const userResp = await addUser(user);

  // return respond(userResp, "Successfully added user", "Failed to add user");
  return respond(response, "Successfully added user", "Failed to add user");
}

// const addUser = (user) => {
//   return new Promise((resolve, reject) => {
//     Models.Users.create(user)
//       .then((user) => {
//         resolve(Result.Ok(user));
//       })
//       .catch((error) => {
//         resolve(Result.Error(error));
//       });
//   });
// };

Route.withOutSecurity().noAuth().post("/users", postUser).bind();
