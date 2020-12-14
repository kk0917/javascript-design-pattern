import pubsub from 'PubSubImpl';

// easy message handler

// Output topic and data received from subscriber as message log.
let messageLogger = (topics, data) => {
  console.log('Logging: ' + topics + ': ' + data);
};

/** Subscriber monitor subscribed topics
 *  and Call callback function(message logger) when new notificationto the topic
 */
let subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

// To be responsible for notification to publising's topic or application.
pubsub.publish('inbox/newMessage', 'hello, world!');

// or
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);

// or
pubsub.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey again!'
});

// You can also unsubscribe when you no longer want to be notified by your subscribers.
pubsub.unsubscribe(subscription);

/**
 * Once you unsubscribe, for example, if you do the following,
 *   the subscriber is no longer monitoring
 *     and you will not get the result when the message logger is running.
 */
pubsub.publish('inbox/newMessage', 'Hello! are you still there?');
