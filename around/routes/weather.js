'use strict'
const express = require('express'),
    router = express.Router(),
    request = require('request')



router.get('/page', async(req, res) => {
    const Request = (url) => new Promise((resolve, reject) => {
        request(url, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                const obj = JSON.parse(body);
                const result = {
                    temp_min: obj.main.temp_min,
                    temp_max: obj.main.temp_max,
                    weather: obj.weather[0].description,
                    regionName: obj.name
                };
                return resolve(result);
            } else {
                return reject(err);
            }
        });
    });

    var weather = []
    var apiKey = '0ba0d987d20eeedf54a659072a0eb9ca';
    var regionList = new Array("Seoul", "Seongnam-si", "Paju", "Incheon", "Gangneung", "Chuncheon" ,
      "Chungju", "Cheongju-si", "Daejeon", "Jeonju" , "Naju", "Gyeongju" , "Sangju" , "Gwangju" , "Daegu" , "Ulsan", "Busan" , "Jeju-do");
    

    for (var i = 0; i < regionList.length; i++) {
        var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${regionList[i]}&appid=${apiKey}&lang=kr&units=metric`
        try {
            weather.push(await Request(apiURL));
        } catch (e) {
            console.log('에러')
        }
    }

    res.send(weather);
})




module.exports = router