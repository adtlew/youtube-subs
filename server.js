const ytch = require ('yt-channel-info');

/**
 * To get the youtube channel stats for Grace Foods
 * @TODO Add mongoose configuration to the script
 * @param {*} channelId 
 */
async function getChannelDetails (channelId) {
    const payload = {
        channelId: channelId,
        channelIdType: 0,
        httpsAgent: ''
    };//payload for the api
    ytch.getChannelInfo(payload).then((res) => {
        let channelDetails = {
            author: res.author,
            channelId: res.authorId,
            description: res.description,            
            subscribers: res.subscriberCount
        };
        console.log(channelDetails);
        return channelDetails;
    }).catch((err) => {
        console.log("There was an error");
        console.error(err);
    });
}

getChannelDetails('UC7_LPOqjqw5eWezUpe7mLoA');