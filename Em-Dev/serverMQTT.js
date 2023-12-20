const mosca = require('mosca');

const settings = {
  port: 1883,
};

const server = new mosca.Server(settings);

server.on('ready', () => {
  console.log('Servidor MQTT está rodando na porta 1883');
});

server.on('clientConnected', (client) => {
  console.log('Cliente MQTT conectado:', client.id);
});

server.on('published', (packet, client) => {
  if (!client) return;
  console.log('Mensagem MQTT publicada por:', client.id);
});

