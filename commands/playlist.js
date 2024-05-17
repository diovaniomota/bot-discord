const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A melhor playlIst para estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0OCsgGpYnIuSlk9VgKbeDi?si=dfad9c74a63a44cb")
    }
}