const express = require('express');
const os = require('os');
const { networkInterfaces } = require('os');

const app = express();
const PORT = 8080;

const getServerIP = () => {
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'Nie znaleziono';
};

app.get('/', (req, res) => {
    res.send(`
        <h1>Informacje o serwerze</h1>
        <p><strong>Adres IP:</strong> ${getServerIP()}</p>
        <p><strong>Nazwa hosta:</strong> ${os.hostname()}</p>
        <p><strong>Wersja aplikacji:</strong> ${process.env.VERSION || 'brak wersji'}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
