const Model = require('./model');
const bcrypt = require('bcrypt');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

function listUsers() {
    return Model.find();
}

async function loginUser(name, pass){
    /*
    const user = await Model.findOne({ name: name });
    if (user && bcrypt.compareSync(pass, user.pass)) {
        //return Promise.resolve(true);
    }else{
        //return Promise.reject('Error');
    }
    return { data: "asdasd" }
    */
    return new Promise( async (resolve, reject) => {
        const user = await Model.findOne({ name: name });
        if (user && bcrypt.compareSync(pass, user.pass)) {    
            if(user.level === 1 && user.state === 1){
                resolve(user);
            }      
            reject('Error Level or Status');
        }else{
            reject('Error Login');
        }        
    })
}

module.exports = {
    add: addUser,
    list: listUsers,
    login: loginUser,
}