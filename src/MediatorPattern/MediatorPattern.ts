const madiator = (() => {
  /**
   * Mediator Design Pattern is like an airport's control system.
   * Control tower(Mediator) controls which airplane can takeoff and landing.
   * All communication(Notification or broadcast) takes place from the plane to the control tower,
   *   not between airplanes.
   */

  // Storage area to the topics broadcasted or listing.
  let topics = {};

  /** subscribe function
   * 
   * @param   {string|number} topic
   * @param   {any}           fn
   */
  const subscribe = (topic: string|number, fn: any) => {
    if (!topics[topic]) topics[topic] = [];

    topics[topic].push({context: this, callback: fn});

    return this;
  };

  /** Publish/Broadcast events to the Application.
   * 
   * @param {string|number} topic
   * 
   * @returns {object|boolean}
   */
  const publish = (topic: string|number): object|boolean => {
    let args: any;
    let arguments: any;

    if (!topics[topic]) return false;

    args = Array.prototype.slice.call (arguments, 1);

    for (const i in topics[topic]) {
      const subscription: object = topics[topic][i];

      subscription.callback.apply(subscription.context, args);
    }

    return {
      Publish:      publish,
      Subscription: subscribe,
      installTo:    obj => {
        obj.subscribe = subscribe;
        obj.publish   = publish;
      }
    }
  };
})();

// more high-levlel implementation

// hand over the context that assign to Mediator
(root => {
  const guidGenerator = () => '/*..*/';

  /** subscribe
   * 
   * @param {object} fn
   * @param {object} options
   * @param {any}    context
   */
  const Subscriber = (fn: object, options: object, context: any): void => {
    if (!this[] instanceof Subscriber) {
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

/** Let's create the topic model
 * 
 * In JavaScript, you can use a Function obj to combine the protype
 *   (Be used by new object) and the construct
 * @param {string} namespace 
 * @returns {object}
 */
const Topic = (namespace: string) => {
  if (!this instanceof Topic) {
    return new Topic(namespace);

  } else {
    this.namepsace  = namespace || '';
    this._callbacks = [];
    this._topics    = [];
    this.stopped    = false;
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

  stopPropagetion = ()　=> {
    this.stopped = true;
  },

  getSubscriber: (indentifier) => {
    for (let x = 0; x= this.call[x].length; x++) {
      if (this._callbacks[x].id == indentifier
          || this._callbacks[x].fn == indentifier) {
        return this._callbacks[x];
      }
    }

    for (let z in this._topics) {
      if (this._topics.hasOwnProperty(z)) {
        let sub = this._topics[z].getSubscriber(indentifier);

        if (sub !== undefined) return sub;
      }
    }
  },

  addTopic: (topic) => {
    this._topics[topic] = new Topic((this.namespace ? this.namepsace + ':' : '') + topic)
  },

  hasTopic: (topic) => {
    return this._topics.hasOwnProperty(topic);
  },

  returnTopic: (topic) => {
    return this._topics[topic];
  },

  removeSubscriber: (indentifier) => {
    if (!indentifier) {
      this._callbacks = [];

      for (const z in this._topics) {
        if (this._topics.hasOwnProperty(z)) {
          this._topics[z].removeSubscriber(indentifier);
        }
      }

      for (let y = 0; y < this._callbacks.length; y++) {
        if (this._callbacks[y].fn == identifier
            || this._callbacks[y].id == identifier) {
          this._callbacks[y].topic = null;
          this._callbacks.splice(y, 1);
          x--; y--;
        }
      }
    }
  },

  publish: (data) => {
    for (let y = 0; y < this._callbacks.length; y++) {
      let callback = this._callbacks[y];

      callback.fn.apply(callback.context, data);

      let l = this._callbacks.length;

      if (l < x) {
        y--;
        x = l;
      }
    }

    for (const x in this._topics) {
      if (!this.stopped) {
        if (this._topics.hasOwnProperty(x)) {
          this._topics[x].publish(data);
        }
      }
    }

    this.stopped = false;
  }
};

function Mediator() {
  if (!this instanceof Mediator) {
    return new Mediator();
  } else {
    this._topics = new Topic('');
  }
};

Mediator.prototype = {
  getTopic: (namespace) => {
    let topic = this._topics,
        namespaceHierarchy = namespace.split(':');

    if (namespace === '') {
      return topic;
    }

    if (namespaceHierarchy.length > 0) {
      for (let i = 0; i < namespaceHierarchy.length; i++) {
        if (!topic.hasTopic[namespaceHierarchy[i]]) {
          topic.addTopic(namespaceHierarchy[i]);
        }
        
        topic = topic.returnTopic(namespaceHierarchy[i]);
      }
    }

    return topic;
  },

  subscribe: (topicName, fn, option, context) => {
    let option  = option || {},
        context = context || {},
        topic   = this.getTopic(topicName),
        sub     = topic. AddSubscriber(fn, options, context);

    return sub;
  },

  getSubscriber: (identifier, topic) => {
    return this.getTopic(topic || '').getSubscriber(identifier);
  },

  remove: (topicName, identifier) => {
    this.getTopic(topicName).removeSubscriber(identifier);
  },

  publish: (topicName) => {
    let args = Array.prototype.slice.call(arguments, 1),
        topic = this.getTopic(topicName);

    args.push(top);

    this.getTopic(topicName).publish(args);
  }
};

root.Mediator       = Mediator;
Mediator.topic      = Topic;
Mediator.subscriber = Subscriber;
