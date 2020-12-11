const tweet = {
  // optional field
  externalInteraction: {
    type: 'favorite', // favorite || retweet || reply
    users: ['faux twit'], // [] of names, handle
  },
  userInfo: {
    name: 'James',
    handle: '@CaucasianJames',
    avi:
      'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png',
  },
  tweetInfo: {
    time: Date.now(),
    text: 'hello, i am a tweet text',
    media: 'something.jpg',
  },
  tweetInteractions: {
    replies: 1,
    retweets: 5,
    favorites: 20,
    favoritedByUser: false,
    retweetedByUser: true,
  },
};

export default tweet;