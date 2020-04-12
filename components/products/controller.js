const store = require('./store');

function updateProduct(id, name='',state=1,description='',price=0,sizex=0,sizey=0,sizez=0,color=0,size=0,stock=0,cat=0,img_home='',img_featured='',link_mp='',link_ig='') {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateProd(id, name, state, description, price, sizex, sizey, sizez, color, size, stock, cat, img_home, img_featured,link_mp, link_ig);
        resolve(result);
    })
}

async function addProduct(name='',state=1,description='',price=0,sizex=0,sizey=0,sizez=0,color=0,size=0,stock=0,cat=0,img_home='',img_featured='',link_mp='',link_ig='') {    
    if (!name) {
        return Promise.reject('Invalid input product');
    }    
    item = {
        name,
        state,
        description,
        price, 
        sizex,
        sizey,
        sizez,
        color,
        size,
        stock,
        cat,
        img_home,
        img_featured,
    };
    return store.add(item);
}

function listProducts() {
    return store.list();
}

function getProduct(id){
    return store.getone(id);
}

module.exports = {
    addProduct,
    listProducts,
    getProduct,
    updateProduct,
}