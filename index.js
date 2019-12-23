const dotenv = require('dotenv')
const SlackBot = require('slackbots');

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'wemco'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':cat:'
    }

    bot.postMessageToUser(
        'mariolopez027',
        'Wemco has started!',
        params
    );

})

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
})

function handleMessage(message) {
    if(message.includes(' test')) {
        runTest()
    }
}

function runTest(){
    const params = {
        icon_emoji: ':smirk_cat:'
    }

    bot.postMessageToGroup(
        'general2',
        'Test Successful!',
        params
    );
}

// Error Handler
bot.on('error', (err) => {
    console.log(err);
})