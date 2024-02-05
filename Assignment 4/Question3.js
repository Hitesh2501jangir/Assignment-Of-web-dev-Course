function shoppingItem(){
    let cartItem = [];
    return{
        getCartItem : function(){
            return cartItem;
        }
    };
}


let cart = shoppingItem();

console.log(`Cart Item : ${cart.getCartItem()}`);