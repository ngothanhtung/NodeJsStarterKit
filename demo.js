var exports = module.exports = {};
exports.products = function () {
    var products = [];
    products.push({
        id: 1,
        name: 'iPhone 7',
        price: 600,
        discount: 5,
        description: 'text ...'
    });

    products.push({
        id: 2,
        name: 'iPhone 7 Plus',
        price: 700,
        discount: 0,
        description: 'text ...'
    });


    products.push({
        id: 3,
        name: 'Samsung S7',
        price: 500,
        discount: 0,
        description: 'text ...'
    });
   return products;
};
