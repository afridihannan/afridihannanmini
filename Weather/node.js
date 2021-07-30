const http = require('http');
const fs = require('fs');
const request = require('requests');

const replaceVal = (tempVal, realVal) => {
    let temperature = tempVal.replace("{%tempval%}", realVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", realVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", realVal.main.temp_max);
    temperature = temperature.replace("{%location%}", realVal.name);
    temperature = temperature.replace("{%country%}", realVal.sys.country);
    return temperature;

}
const homeFile = fs.readFileSync("index.html", "utf-8");
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        request('https://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=cd53e372a71a5447e5178d1bfdc17ff0')
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                //console.log(arrData);
                const rData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                //res.write(rData);
                console.log(rData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
               // console.log('end');
            });
    }
});
server.listen(8000, "127.0.0.1");

