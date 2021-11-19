const {
  validate,
  notEmpty,
  shouldBeUuid,
  isEmail,
  isMobileNumber,
} = require("validation");

const rule = {
  full_name: [[notEmpty, "User name should not be empty"]],
  email: [
    [isEmail, "User email should be a valid email address"],
    [notEmpty, "Email is mandatory"],
  ],
  country_code: [[notEmpty, "country code is mandatory"]],
  aadhaar_id: [[notEmpty, "aadhaar id is mandatory"]],
  //   password: [[notEmpty, "password is mandatory"]],
  //   confirmPassword: [
  //     [                              // first argument is a function, it should always return either true or false
  //       (value, obj) => {            // value is value of confirmPassword, obj is the entire object password for validation.
  //         return value === obj.password;
  //       },
  //       "Confirm password did not match",
  //     ],
  //   ],
};

module.exports.validate = async (data) => validate(rule, data);
