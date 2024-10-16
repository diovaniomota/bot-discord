const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "JavaScript",
                description: "Veja a documentação de JavaScript",
                value: "JavaScript"
            },

            {
                label: "Flutter",
                description: "Veja a documentação de Flutter",
                value: "Flutter"
            },

            {
                label: "FlutterFlow",
                description: "Veja a documentação de FlutterFlow",
                value: "FlutterFlow"
            },

            {
                label: "discord.js",
                description: "Veja a documentação de discord.js",
                value: "discord.js"
            },

            {
                label: "NextJS",
                description: "Veja a documentação de NextJS",
                value: "NextJS"
            }
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }
}