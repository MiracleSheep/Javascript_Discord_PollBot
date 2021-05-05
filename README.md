# Javascript_Discord_PollBot

## Description

This is a poll discord bot I made. 
Features include:
* A help command which prints an embed explaining the commands
* A ping command
* A yes or no poll command
* A multiple choice poll command

## How to set up

### Requrements
* Docker
* That is pretty much it

### Instructions
1. Git clone the repo ``git clone https://github.com/MiracleSheep/Javascript_Discord_ServerAssistantBot.git``
2. Create a discord application using the discord developer portal https://discord.com/developers/docs/
3. Create a bot in the application, customize it to your liking, and grab the bot token
4. Set up a .env file inside of the container with the following variables:
* DISCORD_TOKEN (set it to the token of the bot you just created)
* PREFIX (the prefix you want the discord bot to have)
5. Build the image in the directory with ``docker build -t pollbot .``
6. Run the image ``docker run -d --name [insert name here] pollbot``
7. Enjoy!
