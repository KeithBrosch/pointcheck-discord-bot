require ('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.username} is online`)
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  };
  if (message.content = "hello") {
    message.reply(`Howdy Pardner 🤠`)
  };
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'pointcheck') {
    const user1 = interaction.options.get('first-user')?.value;
    const user2 = interaction.options.get('second-user')?.value;
    
    
    // interaction.reply(`The sum is ${num1 + num2}`);
    
    console.log(user1, user2);
  };

});

client.login(process.env.TOKEN);

