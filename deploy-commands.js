const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
    {
        name: 'aç',
        description: 'Embed özelliğini açar.'
    },
    {
        name: 'kapat',
        description: 'Embed özelliğini kapatır'
    }
]; 

const rest = new REST({ version: '9' }).setToken('token');

(async () => {
  try {
    console.log('Started refreshing application (/) commands for the testing guild.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands for the testing guild.');
  } catch (error) {
    console.error('Error! Could not reload application (/) commands for the testing guild. ');
    console.error(error);
  }
      try {
    console.log('Started refreshing application (/) commands for all guilds.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands for all guilds.');
  } catch (error) {
    console.error('Error! Could not reload application (/) commands for all guilds.');
    console.error(error);
  }
})();