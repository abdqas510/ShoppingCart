// products list of objects
const products = [
    {
      name: "cherry",
      price: 5,
      quantity: 0,
      productId: 1,
      image: "../images/cherry.jpg",
    },
    {
      name: "orange",
      price: 4,
      quantity: 0,
      productId: 2,
      image: "../images/orange.jpg",
    },
    {
      name: "strawberry",
      price: 6,
      quantity: 0,
      productId: 3,
      image: "../images/strawberry.jpg",
    },
  ]
  // Declare an empty array named cart to hold the items in the cart 
  const cart = [];
  // Function to find a product in the cart by its productId "Helper function"
  function findProductInCart(productId) {
    return cart.find(function(item) {
      return item.productId === productId;
    })
  }
  // Function to find a product in the products by its productId " Helper Function "
  function findProductById(productId) {
    return products.find(function(product) {
      return product.productId === productId;
    })
  }
  // function to push the items to the cart 
  function addProductToCart(productId) {
    const product = findProductById(productId);
    if (product) {
      const cartItem = findProductInCart(productId);
  // if there is a cart item increase the quantity by one 
      if (cartItem) {
        cartItem.quantity += 1;
      } else {                 // if the item is not in the cart push it to the cart with all of it's props
        cart.push({
          name: product.name,
          price: product.price,
          quantity: 1,
          productId: product.productId,
          image: product.image,
        });
      }
    }
  }
  // function to increase the quantity by one 
  function increaseQuantity(productId) {
    const cartItem = findProductInCart(productId);
  
    if (cartItem) {     // if the cart item exists add one to the quantity 
      cartItem.quantity += 1;
    }
  }
  //function to decrease the quantity by one
  function decreaseQuantity(productId) {
    const cartItem = findProductInCart(productId);
  
    if (cartItem) {                   // if cart item exists decreament the quantity by one 
      cartItem.quantity -= 1;
  
      if (cartItem.quantity === 0) {                  // if cart item quantity equal to zero remove it from the cart list 
        const index = cart.indexOf(cartItem);           // remove the item by using it's index with the splice method 
       return cart.splice(index, 1);
      }
    }
  }
  // function to remove the items from cart list 
  function removeProductFromCart(productId) {
    const cartItem = findProductInCart(productId);
  
    if (cartItem) {                                 // if item exists set the quantity to zero , and remove it using it's index
      cartItem.quantity = 0;
      const index = cart.indexOf(cartItem);        
     return  cart.splice(index, 1);                       // remove the item by using it's index with the splice method 
    }
  }
  // calculate the total 
  function cartTotal() {
    let total = 0;
  
    cart.forEach(function(item) {
      return  total += item.price * item.quantity;     // mutiply the price with quantity of the item and add it to the total 
    });
  
    return total;
  }
  // empty the cart list by putting it's length to zero 
  function emptyCart() {
    return cart.length = 0;
  }
  // global variable to hold the value of totalPaid 
  let totalPaid = 0;
  // pay function it returns what remained from the customer payment and the acutal price 
  function pay(amount) {
    let totalPrice = cartTotal();
    let Balance = totalPrice - totalPaid;  // Calculate the remaining amount to be paid
    let difference = amount - Balance;  // calculate the difference bewtween what is paid and what the acutal price is 
     // if the difference is positive 
    if (difference > 0) {
      // Amount given is greater than the remaining price
      totalPaid += Balance;  // Customer fully pays the  price
      return difference;  // Return the change to be given back
      // if the difference is negative 
    } else if (difference < 0) {
      // Amount given is less than the remaining price
      totalPaid += amount;  // Add the given amount to total paid
      return difference;  // Return the negative difference indicating amount still owed
    } else { // if the difference equal to zero 
      // Exact amount given
      totalPaid += amount;  // Complete the payment
      return 0;  // No change and no additional amount needed
    }
  }
 
  