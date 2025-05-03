const ToDo = require("./ToDo");
const User = require("./User");

ToDo.belongsTo(User);
User.hasMany(ToDo);
