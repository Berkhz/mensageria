# Sistema de Mensageria Básico com RabbitMQ

Este projeto implementa um sistema básico de mensageria com **RabbitMQ** usando **Node.js** e **Express**, contendo um **produtor** que envia mensagens para uma fila e um **consumidor** que processa essas mensagens.

## Executando o Projeto

1. **Inicie o RabbitMQ no Docker** (se não estiver rodando):

   ```bash
   docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
Abra dois terminais:

No primeiro terminal, inicie o produtor:

node producer.js
No segundo terminal, inicie o consumidor:

node consumer.js
Enviar mensagens:

Com tudo funcionando, acesse http://localhost:3000/send para enviar mensagens e ver o consumidor processando.