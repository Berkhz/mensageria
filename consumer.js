const amqp = require('amqplib');

async function consumeFromQueue() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'tasks';

  await channel.assertQueue(queue, { durable: false });
  console.log(`Waiting for messages in ${queue}`);

  channel.consume(queue, (msg) => {
    console.log(`Received message: ${msg.content.toString()}`);
    channel.ack(msg);
  });
}

consumeFromQueue();
