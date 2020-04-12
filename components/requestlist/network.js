const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addRequest(req.body.title, req.body.fromdate, req.body.todate, req.body.state, req.body.items)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error requests', 500, err);
        });
});

router.get('/', function(req, res) {
    controller.listRequests()
        .then(users => {
            response.success(req, res, users, 200);
            console.log("list requests");
        })
        .catch(err => {
            response.error(req, res, 'Internal error requests', 500, err);
        });
});

router.get('/id/:id', function(req,res){
    controller.getRequest(req.params.id)
        .then(request => {
            response.success(req, res, request, 200);
            console.log("show request");
        })
        .catch(err => {
            response.error(req, res, 'Internal error request', 500, err);
        });
})

module.exports = router;