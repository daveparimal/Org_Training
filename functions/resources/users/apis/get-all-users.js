const Route = require("route");
const { logInfo } = require("lib/functional/logger");
const { respond } = require("lib");
const Result = require("folktale/result");
const Models = require("models");

async function getUsers(req) {
  logInfo("Request to create user");

  //   const userId = uuid.v4();
  //   const response = await db.execute(new CreateUserQuery(userId, name));

  const allUsers = await getAllUsers();
  // return respond(
  //   Result.Ok(allUsers),
  //   "Successfully fetched users",
  //   "Failed to fetch users"
  // );
  return respond(
    allUsers,
    "Successfully fetched users",
    "Failed to fetch users"
  );
}

const getAllUsers = (req) => {
  // return Result.Ok([
  //   {
  //     id: 1,
  //     name: "user1",
  //     email: "user1@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "user2",
  //     email: "user2@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "user2",
  //     email: "user2@gmail.com",
  //   },
  // ]);

  return new Promise((resolve, reject) => {
    Models.User.findAll()
      .then((users) => {
        resolve(Reult.Ok(users));
      })
      .catch((error) => {
        resolve(Result.Error(error));
      });
  });
};

Route.withOutSecurity().noAuth().get("/users", getUsers).bind();
