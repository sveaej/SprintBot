const {Client, Events, SlashCommandBuilder} = require("discord.js");
const {token} = require("./config.json");

const client = new Client({intents: []});

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.username}`);

    const ping = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Checkin with the bot");
    client.application.commands.create(ping);

    const quote = new SlashCommandBuilder()
        .setName("quote")
        .setDescription("Retrieve a random motivational quote to inspire you!");
    client.application.commands.create(quote);

    const prompt = new SlashCommandBuilder()
        .setName("prompt")
        .setDescription("Gives you a writing prompt from a writing prompts API.");
    client.application.commands.create(quote);

    const sprint = new SlashCommandBuilder()
        .setName("sprint")
        .setDescription("Starts a writing sprint and sets a timer for your desired length");
    client.application.commands.create(sprint);
});

client.on(Events.InteractionCreate, interaction => {
    if (interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }
    if (interaction.commandName === "quote") {
        interaction.reply("Motivational quotes will be shared here!");
    }
    if (interaction.commandName === "prompt") {
        interaction.reply("This command will eventually call a writing prompts API... but I probably have to make one first.");
    }
    if (interaction.commandName === "sprint") {
        interaction.reply("This command will start a writing sprint. Ready or not, here we go!");
    }
});

client.login(token);