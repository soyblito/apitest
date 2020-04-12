const Model = require('./model');

function addRequest(item) {
    const myRequest = new Model(item);
    return myRequest.save();
}

function listRequests() {
    return Model.find();
}

async function getRequest(id){
    /*
    return Model.findOne({
        _id: id
    });
    */
    return new Promise((resolve, reject) => {
    /*
        let filter = {};
    if (filterChat !== null) {
        filter = { chat: filterChat };
    }
    */
    Model.findOne({ _id: id })
        .populate({
            path: 'items',
            model: 'Products'
        })
        .exec((error, populated) => {
            if (error) {
                reject(error);
                return false;
            }

            resolve(populated);
        });
    })

}

module.exports = {
    add: addRequest,
    list: listRequests,
    getone: getRequest,
}