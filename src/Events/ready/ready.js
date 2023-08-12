module.exports = (client) => {
    console.log(`${client.user.tag} is now up and running!`)
    client.user.setPresence({ activities: [{ name: 'at the hideout' }], status: 'dnd' });

}