const amqp = require('amqplib');
const express = require('express');
const app = express();

async function sendToQueue(message) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'tasks';

  await channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(message));
  console.log(`Message sent: ${message}`);

  setTimeout(() => {
    connection.close();
  }, 500);
}

app.get('/send', async (req, res) => {
  const message = 'Process this task';
  await sendToQueue(message);
  res.send(`Message sent: ${message}`);
});

app.listen(3000, () => {
  console.log('Producer is running on http://localhost:3000');
});
