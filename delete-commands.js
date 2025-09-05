/*
This code needs to be run manually when you want to get rid of slash commands.
It takes in a command line arguments for the commands you want to delete.
*/
const {REST, Routes} = require('discord.js');
const {clientId, guildId, token} = require('./config.json');

const rest = new REST().setToken(token);

//Process command line arguments
//Create a new array consisting of the third command line argument onwards
const args = process.argv.slice(2);

//Delete each command listed as an argument
args.forEach((commandId) => {
    rest.delete(Routes.applicationCommand(clientId, `${commandId}`))
        .then(() => console.log(`Successfully deleted command ${commandId}`))
        .catch(console.error);
});
