const path = require("path");
const getFiles = require("../utils/getFiles");

module.exports = (client) => {
  const eventsFolder = getFiles(path.join(__dirname, "..", "Events"), true);

  for (const eventFolders of eventsFolder) {
    const eventFiles = getFiles(eventFolders);
    const eventName = eventFolders.replace(/\\/g, "/").split("/").pop();

    client.on(eventName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg);
      }
    });
  }
};
