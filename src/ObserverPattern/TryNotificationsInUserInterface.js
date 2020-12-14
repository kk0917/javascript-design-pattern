import pubsub from 'PubSubImpl';

// Create the subscriptions to newDataAvailable topic
let subscriber = pubsub.subscribe('newDataAvailable', gridUpdate);

// Return current local time to use later in the UI
getCurrentTime = () => {
  let date = new Data(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      y = date.getFullYear(),
      t = date.toLocaleTimeString().toLowerCase();

  return (m + '/' + d + '/' + y + ' ' + t);
};

// Add new data in a fictitious grid component
function addGridRow(data) {
  // ui.grid.addRow(data);
  console.log('updated grid component with: ' + data);
}

function updateCounter(data) {
  // ui.grid.updateLastChanged(getCurrentTime());
  console.log('data last updated at: ' + getCurrentTime() + ' with ' + data);
}

gridUpdate = (topic, data) => {
  if (data !== 'undefined') {
    grid.addGridRow(data);
    grid.updateCounter(data);
  }
};

  /**
   * At last, show update to data layor.
   * If you use the ajax requests,
   * you can broadcast to the application to use available new data.
   */

  // Publish the change to gridUpdated topic represented new entry.
  pubsub.publish('newDataAvailable', {
    summary: 'Apple made $5 billion',
    identifier: 'APPL',
    stockPrice: 570.91
  });

  pubsub.publish('newDataAvailable', {
    summary: 'Microsoft made $20 million',
    identifier: 'MSFT',
    stockPrice: 30.85
  });
