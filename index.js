const handelClick = () =>{
    const productField = document.getElementById('product-field');
    const productValue = productField.value;
    productField.value ='';
    const quantityField = document.getElementById('quantity-field');
    const quantityValue = quantityField.value;
    quantityField.value =''
    displayProduct(productValue, quantityValue);
    saveProductLocalStorage(productValue, quantityValue);
    
}

const displayProduct = (productValue, quantityValue) =>{
    const productContainer = document.getElementById('product-container');
    const li= document.createElement('li');
    li.innerText = `${productValue} : ${quantityValue}`;
    productContainer.appendChild(li);
}

const getLocalStorageValue= () =>{
    let cart = {};
    const storeValue = localStorage.getItem('cart');
    if(storeValue){
        cart = JSON.parse(storeValue);

    }
    return cart
}

const saveProductLocalStorage = (productValue, quantityValue) =>{
    const cart = getLocalStorageValue();
    cart[productValue] =quantityValue;
    console.log(cart)
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}
const displayDataFromLocalStorage =() =>{
    const saveCart = getLocalStorageValue();
    for(const productValue in saveCart){
        const quantityValue = saveCart[productValue];
        displayProduct(productValue, quantityValue)
    }
}
displayDataFromLocalStorage()

