

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const batteries = [
    {
        id: 1,
        brand: "Hart",
        type: "Battery",
        image: "images/hart_battery.png",
        title: "Hart 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information."
    },
    { 
        id: 2,
        brand: "Craftsman",
        type: "Battery",
        image: "images/craftsman_battery.png",
        title: "Craftsman 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421539579",
        description: "Very important product information."
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "Battery",
        image: "images/dewalt_battery.png",
        title: "DeWalt 20V Battery Holder Mount & Dock",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information."
    },
    { 
        brand: "Black & Decker",
        type: "Battery",
        image: "images/bd_battery.png",
        title: "Black & Decker 20V Battery Holder Mount & Dock",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383899226414",
        description: "Very important product information."
    },
  ];

router.get('/batteries', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    // res.json({
    //     'Hello': 'hi'
    // });
    res.status(200).json(batteries);
});

router.get('/batteries/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let result = batteries.find((item) => item.id == id);

    res.status(200).json(result);
});

router.get('/test', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.json({
        'Hello': 'hi'
    });
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);