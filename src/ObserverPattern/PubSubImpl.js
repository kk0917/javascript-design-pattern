/** Pub/Sub Pattern implementation.
 * Introduce author's core concept such as subscribe, publish and subscription discontinued.
 */
export let pubsub = {};

(function(q) {
  let topics = {},
      subUid = -1;

  /**
   * Publish an events of interest, or broadcasting.
   * Specify a specific topic name, data to be passed together, etc. by arguments
   */
  q.publish = (topic, args) => {
    if (!topics[topic]) return false;

    let subscribers = topics[topic],
        length = subscribers ? subscribers.length : 0;

    while (length--) {
      subscribers[length].func(topic, args);
    }

    return this;
  };

  /**
   * Specify a specific topic name, callback function by arguments.
   * Callback function execute when topic/event is subscribed.
   */
  q.subscribe = (topic, func) => {
    if (!topics[topic]) topics[topic] = [];

    let token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });

    return token;
  };

  /**
   * Stops subscription of specific topic.
   * Topic tokenize to be able to search.
   */
  q.unsubscribe = token => {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);

            return token;
          }
        }
      }
    }
  };

})(pubsub);
