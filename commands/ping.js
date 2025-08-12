const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Checkin with the bot 2"),
    async execute(interaction) {
        await interaction.reply("Pong!");
    }
}