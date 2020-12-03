let madiator = (() => {
  /**
   * Mediator Design Pattern is like an airport's control system.
   * Control tower(Mediator) controls which airplane can takeoff and landing.
   * All communication(Notification or broadcast) takes place from the plane to the control tower,
   *   not between airplanes.
   */

  // Storage area to the topics broadcasted or listing.
  let subscribe = (topic, fn) => {
    if (!topics[topic]) topics[topic] = [];

    topics[topic].push({context: this, callback: fn});

    return this;
  };

  // Publish/Broadcast events to the Application.
  let publish = (topic) => {
    let args;

    if (!topics[topic]) return false;

    args = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < topics[topic].length; i++) {
      let subscription = topics[topic][i];
      
      subscription.callback.apply(subscription.context, args);
    }

    return {
      Publish:      publish,
      subscription: subscribe,
      installTo:    (obj) => {
        obj.subscribe = subscribe;
        obj.publish   = publish;
      }
    }
  };
})();

// more high-levlel implementation

// hand over the context that assign to Mediator
(root => {
  guidGenerator = () => { /*..*/ };

  subscriber = (fn, options, context) => {
    if (!this instanceof Subscriber) {
      return new Subscriber(fn, context, options);
    } else {
      /**
       * guidGenerator() is a function that generate GUID.
       * By this, you can reffer the instance of subscriber's Mediator.
       * To read more easily , the detail omit.
       */
      this.id      = guidGenerator();
      this.fn      = fn;
      this.options = options;
      this.context = null;

    }
  };
})();

/**
 * Let's create the topic model
 * In JavaScript, you can use a Function obj to combine the protype(Be used by new object)
 *   and the construct
 */
function Topic(namespace) {
  if (!this instanceof Topic) {
    return new Topic(namepsace);
  } else {
    this.namepsace  = namespace || '';
    this._callbacks = [];
    this._topics    = [];
  }
}

// Define the Topic's prototype.
//   That includes adding new subscriber ,refer the exist subscriber
Topic.prototype = {
  // Add new subscriber
  AddSubscriber: (fn, options, context) => {
    let callback = new Subscriber(fn, options, context);

    this._callbacks.push(callback);

    callback.topic = this;

    return callback;
  },
}
