/*
This file deploys the slash commands after changes has been made.
Also has to run manually, as it is only required after changes have been made
to the commands.
*/

const {REST, Routes} = require('discord.js');
const {clientId, guildId, token} = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
//Get the command files
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
    }
    else {
        console.log(`The command at ${filePath} is missing "data" and/or "execute" properties`);
    }
}

const rest = new REST().setToken(token);

//Reload slash commands
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }
    catch(error) {
        console.error(error);
    }
})();