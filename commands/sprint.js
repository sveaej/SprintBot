const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    //This command is going to need to do a LOT
    data: new SlashCommandBuilder()
        .setName('sprint')
        .setDescription('Initiates a writing sprint!'),
    async execute(interaction) {
        await interaction.reply("This command will start a sprint someday!");
    }
}