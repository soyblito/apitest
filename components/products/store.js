const Model = require('./model');

function addProduct(item) {
    const myRequest = new Model(item);
    return myRequest.save();
}

function listProducts() {
    return Model.find();
}

function getProduct(id){
    return Model.findOne({
        _id: id
    });
}

async function updateProd(id, name, state, description, price, sizex, sizey, sizez, color, size, stock, cat, img_home, img_featured, link_mp, link_ig){
    const foundProd = await Model.findOne({
        _id: id
    });    
    const upd_name = name === '' ? foundProd.name : name;
    const upd_state = state === 1 ? foundProd.state : state;
    const upd_description = description === '' ? foundProd.description : description;
    const upd_price = price === 0 ? foundProd.price : price;
    const upd_sizex = sizex === 0 ? foundProd.sizex : sizex;
    const upd_sizey = sizey === 0 ? foundProd.sizey : sizey;
    const upd_sizez = sizez === 0 ? foundProd.sizez : sizez;
    const upd_color = color === 0 ? foundProd.color : color;
    const upd_size  = size === 0 ? foundProd.size : size;
    const upd_stock = stock === 0 ? foundProd.stock : stock;
    const upd_cat   = cat === 0 ? foundProd.cat : cat;
    const upd_img_home = img_home === '' ? foundProd.img_home : img_home;
    const upd_img_featured = img_featured === '' ? foundProd.img_featured : img_featured;
    const upd_link_mp = link_mp === '' ? foundProd.link_mp : link_mp;
    const upd_link_ig = link_ig === '' ? foundProd.link_ig : link_ig;
    foundProd.name = upd_name;
    foundProd.state = upd_state;
    foundProd.description = upd_description;
    foundProd.price = upd_price;
    foundProd.sizex = upd_sizex;
    foundProd.sizey = upd_sizey;
    foundProd.sizez = upd_sizez;
    foundProd.color = upd_color;
    foundProd.size = upd_size;
    foundProd.stock = upd_stock;
    foundProd.cat = upd_cat;
    foundProd.img_home = upd_img_home;
    foundProd.img_featured = upd_img_featured;
    foundProd.link_mp = upd_link_mp;
    foundProd.link_ig = upd_link_ig;

    const newProd = await foundProd.save();
    return newProd;
}

module.exports = {
    add: addProduct,
    list: listProducts,
    getone: getProduct,
    updateProd: updateProd
}