require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
  {
    name: 'pointcheck',
    description: 'point check',
    options: [
      {
        name: 'first-user',
        description: 'the first user',
        type: ApplicationCommandOptionType.User,
        required: true
      },
      {
        name: 'second-user',
        description: 'the second user',
        type: ApplicationCommandOptionType.User,
        required: true
      }
    ]
  }
];

const rest = new REST( { version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...')
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands}
    )

    console.log('Successfully registered slash commands');
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
})();