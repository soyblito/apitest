const store = require('./store');
const bCrypt = require('bcrypt');

/**
  
if(bcrypt.compareSync('somePassword', hash)) {
 // Passwords match
} else {
 // Passwords don't match
}

 */

async function setPass(pass){
    return bCrypt.hash(pass, 5 ).then( data => {
        return data;
    });
}

async function addUser(name, pass, level, state) {
    if (!name || !pass) {
        return Promise.reject('Invalid name');
    }    
    const hashedPass = await setPass(pass);   
    user = {
        name: name,
        pass: hashedPass,
        level, 
        state
    };
    return store.add(user);
}

function listUsers() {
    return store.list();
}

function loginUser(name, pass){
    return store.login(name, pass); 
    //const resp = store.login(name, pass);
    //console.log("resp: ",resp);
}

module.exports = {
    addUser,
    listUsers,
    loginUser,
}