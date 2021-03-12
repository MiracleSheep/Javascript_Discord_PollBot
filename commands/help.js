module.exports = {

    name: 'help',
    description: "This is a help command",
    execute(message,args) {
        message.channel.send('Commands:');
        message.channel.send('1: !help');
        message.channel.send('2: !p or !poll then <question> for yes or no poll');
        message.channel.send('Then !p or !poll then <question>;<option1>;<option2> ect... (max of nine options) for multiple choice poll');
        message.channel.send('3: !ping for response');
    }

}