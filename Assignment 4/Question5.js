function shoppingcart(){
    const cartItem = [];

    function itemInCart(productId){
        return cartItem.findIndex(item=>item.id===productId.id);
    }

    return{
        addItem : function(product){
            const itemIndex = itemInCart(product.id);

            if(itemIndex!==-1){
                cartItem[itemIndex].quantity++;
            }
            else{
                cartItem.push({id : product.id, name : product.name, price : product.price, quantity: 1,});
            }
        },

        removeItem : function(productId){
            const indexToRemove = itemInCart(productId);

            if(indexToRemove!==-1){
                cartItem.splice(indexToRemove,1);
            }
        },

        getCartItem : function(){
            return cartItem;
        },
    };
}


const cart = shoppingcart();

console.log(`Cart Item : `,cart.getCartItem());


const product1 = {id: 1, name: 'product 1', price: 10};
const product2 = {id: 2, name: 'product 2', price: 20};


cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log(`cart Item : `,cart.getCartItem());


cart.removeItem(2);
console.log(`Cart Item : `,cart.getCartItem());