const https = require('https');

getStockInformation = (date) => {
    https.get('https://jsonmock.hackerrank.com/api/stocks?date=' + date, (resp) => {
        let data = '';

        //A chunck of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        //The whole response has been received. Print out the result.
        resp.on('end', () => {
            let hasil = {
                "open": JSON.parse(data).data[0].open,
                "high": JSON.parse(data).data[0].high,
                "low": JSON.parse(data).data[0].low,
                "close": JSON.parse(data).data[0].close,
            }
            return console.log(hasil);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
}

getStockInformation('5-January-2000')

