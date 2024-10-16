const { SlashCommandBuilder} = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A melhor playlIst para estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0OCsgGpYnIuSlk9VgKbeDi?si=dfad9c74a63a44cb")
        
    }
}


// await interaction.reply("https://open.spotify.com/playlist/33aRC6C7IFNx5ISqFeFXWB?si=1e8389efb483420d"),
        // await interaction.reply("https://open.spotify.com/playlist/2iEVRo6DdN10YyctlQp2uc?si=a7be8f117aa64718")