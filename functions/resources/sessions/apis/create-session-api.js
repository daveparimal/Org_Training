const Route = require("route");
const { logInfo } = require("lib/functional/logger");
const { respond, whenResult } = require("lib");
const Result = require("folktale/result");
const db = require("db/repository");
const FindUserByEmailQuery = require("resources/sessions/queries/find-user-by-email-query.js");

async function createSession(req) {
  let { email, password } = req.body;
  let response = await db.findOne(new FindUserByEmailQuery(email));
  let authenticationResult = await whenResult((user) => {
    if (user) {
      if (user.password == password) {
        return Result.Ok({
          name: user.name,
          email: user.email,
        });
      } else {
        return Result.Error("Password didnt match");
      }
    } else {
      return Result.Error("User doesn't exist");
    }
  })(response);

  return respond(
    authenticationResult,
    "Successfully created new session",
    "Authentication failed"
  );
}

Route.withOutSecurity().noAuth().post("/sessions", createSession).bind();
