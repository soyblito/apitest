const store = require('./store');

async function addRequest(title, fromdate, todate, state, items) {
    //if (!title || !fromdate || !todate || !state ) {
    if (!title) {
        return Promise.reject('Invalid input request');
    }    
    item = {
        title,
        fromdate,
        todate, 
        state,
        items,
    };
    return store.add(item);
}

function listRequests() {
    return store.list();
}

function getRequest(id){
    return store.getone(id);
}

module.exports = {
    addRequest,
    listRequests,
    getRequest,
}