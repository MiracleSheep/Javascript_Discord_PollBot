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
1. Git clone the repo
2. Create a discord bot using the discord developer portal
3. Set up a .env file with the following:
* DISCORD_TOKEN (set it to the token of the bot you just created)
* PREFIX (the prefix you want the discord bot to have)
* LINK (the link you want the bot to post)
* ROLE (the role id of the news role)
4. Build the image in the directory with ``docker build -t pollbot .``
5. Run the image
6. Enjoy!
