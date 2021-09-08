const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    let birthday = [];

    req.on('data', chunk => birthday.push(chunk.toString()));
    req.on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Tu día de nacimiento es: ${getDayOfBirthday(birthday)}`);
    })

});

function getDayOfBirthday(date) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const birthday = new Date(date);
    return days[birthday.getDay()]
}

server.listen(8001);

console.log('Servidor en la url http://localhost:8001')