const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/login', function(req, res) {
    console.log("post login req: ");
    console.log(req.body);
    controller.loginUser(req.body.name, req.body.pass)
    .then( data => {
        response.success(req,res,data,200)
        // data
        console.log(data)
    })
    .catch( err => {
        response.error(req,res,'Login Error', 500, err)
    })
});

router.post('/', function(req, res) {
    controller.addUser(req.body.name, req.body.pass, req.body.level, req.body.state)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res) {
    controller.listUsers()
        .then(users => {
            response.success(req, res, users, 200);
            console.log("list users");
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;