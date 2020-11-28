/** Observer Design Pattern
 * 
 * 4 elements
 */

// Refer to DOM elements
let controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn          = document.getElementById('addNewObserver'),
    container       = document.getElementById('observersContainer');

// Concreate Subject

// extends controle checkbox by Subject Class
extend(new Subject(), controlCheckbox);

// Notify to Observer when the checkbox clicks
controlCheckbox.addEventListener('click', () => {
  new Function('controlCheckbox.Notify(controlCheckbox.checked)')
}, false);

addBtn.addEventListener('click', () => {
  AddNewObserber;
}, false);

// Concreate Observer

function AddNewObserber() {
  // create adding new checkbox
  let check  = document.createElement('input');
  check.type = 'checkbox';

  // extends checkboxes by using Obserber Class
  extend(new ObserverList(), check);

  // override when update motion occures
  check.Update = () => {
    this.checked = value;
  };

  // add new Obserber in Main subject's observer list
  controlCheckbox.AddObserber(check);

  // add fields to containers
  container.appendChild(check);
}

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.Add = obj => {
  return this.observerList.push(obj);
};

ObserverList.prototype.Empty = () => {
  this.observerList = [];
};

ObserverList.prototype.Count = () => {
  return this.observerList.length;
};

ObserverList.prototype.Get = index => {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.Insert = (obj, index) => {
  var pointer = -1;

  if (index === 0) {
    this.observerList.unshift(obj);
    pointer = index;
  } else if (index === this.observerList.length) {
    this.observerList.push(obj);
    pointer = index;
  }

  return pointer;
};

ObserverList.prototype.indexOf = (obj, startIndex) => {
  let i       = startIndex
  let pointer = -1;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }
  }

  i++;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }

    i++;
  }
};

ObserverList.prototype.RemoveIndexAt = index => {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length -1) {
    this.observerList.pop();
  }
}

// extend objects by extension
function extend(obj, extension) {
  for (let key in obj) {
    extension[key] = obj[key];
  }
}

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.AddObserver = observer => {
  this.observers.Add(observer);
}

Subject.prototypeRemoveObserver = observer => {
  this.observers.RemoveIndexAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.Notify = context => {
  let observerCount = this.observers.Count();

  for (let i = 0; i < observerCount; i++) {
    this.observers.Get(i).Update(context);
  }
};

/** Pub/Sub Sample. Infeasible(No define -> subscribe(), publish(), unsubscribe())
 * Diffirence Observer and publish/subscribe Design Pattern
 ******************************************************************************/
// Description how to use publish/subscribe Design Patterns

// Very simply mail processing program

// 受信したメッセージの数
// let mailCounter = 0;

// Initialize subscriber waiting for receive an email named [inbox/newMessage] 

// Show preview of new Message
// let subscriber1 = subscribe('inbox/newMessage', (topic, data) => {
//   // Output log's topic for debugging
//   console.log('A new message was received: ', topic)

  // Show the message preview for user by using the data received from subject
//   document.querySelector('.messageSender').forEach(element => {
//     element.innerHTML = data.sender;
//   });
//   document.querySelector('.messagePreview').forEach(element => {
//     element.innerHTML = data.body;
//   });
// });

// Subscriber executing different task with using same data

// Update counter and show the new messages number received from publisher
// let subscriber2 = subscribe('index/newMessage', (topic, data) => {
//   document.querySelector('.newMessageCounter').forEach(element => {
//     element.innerHTML = mailCounter++;
//   });
// });

// publish('inbox/newMessage', [{
//   sender: 'hello@google.com',
//   body: 'Hey there! How are you doing today?'
// }]);

// enable to stop receiving of topic notification later
// unsubscribe(subscriber1);
// unsubscribe(subscriber1);
/******************************************************************************/

/**
 * Implement of publish/subscribe pattern instead of jQuery library
 */

// Publish
$(obj).trriger('channel', [arg1, arg2, arg3]);
$(el).trriger('/login', [{username: 'test', userData: 'test'}])

// Subscribe
$(obj).on('channel', [data], fn);
$(el).on('/login', event => {
  console.log('...');
});

// Subscription discountinued
$(obj).off('channel');
$(el).off('/login');

/** Pub/Sub Definition.
 * Introduce author's core concept such as subscribe, publish and subscription discontinued.
 */
let pubsub = {};

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
    for (const m in topics) {
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

/** Execution of the above Pub/Sub
 * 
 */
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

//...
// pubsub.unsubscribe(subscription);

// ...
// ...
pubsub.publish('inbox/newMessage', 'Hello! are you still there?');
