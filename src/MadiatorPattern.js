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