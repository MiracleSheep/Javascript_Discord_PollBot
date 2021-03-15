module.exports = {

    name: 'help',
    description: "This is a help command",
    execute(message,args) {

        const embed = {
            color: "#0099ff",
            title: "PollBot help page",
            //url: 'https://discord.js.org',
            author: {
              name: 'Pollbot',
              icon_url: 'https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png',
              url: 'https://discord.js.org',
            },
            //description: 'Multiple choice poll',
            thumbnail: {
              //url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [
              {
                name: "1: Help command:",
              value: "Use ?help or ?h to trigger",
                inline: false,
              },
              {
                name: "2: Ping command",
                value: "Do ?ping for a response",
                inline: false,
              },
              {
                name: "3: Yes or No poll",
                value: "Do ?p <question> ",
                inline: false,
              },
              {
                name: "4: Multiple choice poll",
                value: "Do ?p <question>;<option1>;<option2>...ect (maximum of nine options)",
                inline: false,
              },
            ],
            // image: {
            //   url: 'https://i.imgur.com/wSTFkRM.png',
            // },
            timestamp: new Date(),
            footer: {
              text: 'This is a small reminder of the commands this bot has.',
              //icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
          };

          message.delete(); 
        message.channel.send({ embed });

    }

}