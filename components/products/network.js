const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//const elftps = require('ftps');
const nodemailer = require('nodemailer');

router.patch('/:id', function (req, res) {
    controller.updateProduct(
        req.params.id,
        req.body.name,
        req.body.state,
        req.body.description,
        req.body.price,
        req.body.sizex,
        req.body.sizey,
        req.body.sizez,
        req.body.color,
        req.body.size,
        req.body.stock,
        req.body.cat,
        req.body.img_home,
        req.body.img_featured,
        req.body.link_mp,
        req.body.link_ig,)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.post('/', function(req, res) {
    controller.addProduct(req.body.name,
        req.body.state,
        req.body.description,
        req.body.price,
        req.body.sizex,
        req.body.sizey,
        req.body.sizez,
        req.body.color,
        req.body.size,
        req.body.stock,
        req.body.cat,
        req.body.img_home,
        req.body.img_featured,
        req.body.link_mp,
        req.body.link_ig,
        )
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error products', 500, err);
        });
});

router.get('/ftp', function(req, res) {
    //console.log(req.body.name);    
    var transporter = nodemailer.createTransport({
        host: "smtp.dreamhost.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "info@gluck3d.com.ar",
          pass: "5eWQH3Rs"
        }
    });

    var mailOptions = {
    from: 'info@gluck3d.com.ar',
    to: 'pablomisfit@gmail.com',
    subject: 'Sending Email using Node.js',
    text: JSON.stringify(req.body)
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    /*
    console.log("-----------");
    console.log(req);
    console.log("-----------");
    */
    response.success(req, res, "request", 200);
});

router.get('/', function(req, res) {
    controller.listProducts()
        .then(users => {
            response.success(req, res, users, 200);
            console.log("list products");
        })
        .catch(err => {
            response.error(req, res, 'Internal error products', 500, err);
        });
});


router.get('/id/:id', function(req,res){
    controller.getProduct(req.params.id)
        .then(product => {
            response.success(req, res, product, 200);
            console.log("show product");
        })
        .catch(err => {
            response.error(req, res, 'Internal error product', 500, err);
        });
})

module.exports = router;