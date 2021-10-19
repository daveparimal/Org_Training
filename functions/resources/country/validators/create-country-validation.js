const {
  validate,
  notEmpty,
} = require("validation");

const rule = {
  name: [[notEmpty, "country name should not be empty!"]],
};

module.exports.validate = async (data) => validate(rule, data);
