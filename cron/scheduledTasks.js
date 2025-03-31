const cron = require('node-cron');

module.exports = (client) => {
  // Schedule a task to run every day at 9 AM
  cron.schedule('0 9 * * *', () => {
    const channel = client.channels.cache.get('YOUR_CHANNEL_ID');
    if (channel) {
      channel.send('Good morning! This is your daily scheduled message.');
    }
  }, {
    timezone: "America/New_York"
  });

  // Schedule a task to run every hour
  cron.schedule('0 * * * *', () => {
    console.log('Hourly task running...');
    // Add your hourly task logic here
  });

  // Schedule a task to run every 5 minutes
  cron.schedule('*/5 * * * *', () => {
    console.log('Task running every 5 minutes...');
    // Add your 5-minute task logic here
  });
};