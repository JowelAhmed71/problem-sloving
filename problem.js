// 1. seerToMon Solution :

function seerToMon(seer) {
    if ( typeof seer != 'number' || seer < 1 ) {
       return 'please enter number more then 0 ' ;
    }
    return seer / 40 ;
    
}

// 2.totalSales solution  :

function totalSales( x , y , z ) {
    let cartItem = [
        {name :"shirt" ,  price : 100 , quantity: x },
        {name :"pant",  price : 200  , quantity: y },
        {name :"shoe" ,  price : 500  , quantity: z }
    ]
    let totalCost = 0 ;

    for( const product of cartItem ){
        const productTotal =  product.price * product.quantity ;
        totalCost = totalCost + productTotal ;
        
    }
    return totalCost ;
}

// 3. deliveryCost solution :

function  deliveryCost( num ) {

    if ( num <= 100) {
        return num * 100 ;
    }
     else if( num > 100 || num < 201 ) {
        return num * 80
    }
    else {
         return num * 50 ;
     
    }
   
}






//4.  perfectFriend solution  :

function perfectFriend(array) {
    let friend = array[0];
    for (let i = 0; i < array.length; i++) {
        const oneFriend = array[i];
        if (oneFriend.length === 5) {
            friend = oneFriend;
            break;
        }
    }
    return friend;
}


