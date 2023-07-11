const path = require("path");
const getFiles = require("../utils/getFiles");

module.exports = (client) => {
  const eventsFolder = getFiles(path.join(__dirname, "..", "Events"), true);
  
};
