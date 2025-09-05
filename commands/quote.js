const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quote")
        .setDescription("Gives you a quote from ZenQuote"),
    async execute(interaction) {
        //await interaction.deferReply();
        try {
            const response = await axios.get('https://zenquotes.io/api/random');
            //console.log(response);
            await interaction.reply(`${response.data[0].q} - ${response.data[0].a}`);
            //await interaction.editReply("Testing");
        }
        catch(error) {
            console.log(error);
            await interaction.editReply("Unable to retrieve quote. Please try again later.");
        }
    }
}