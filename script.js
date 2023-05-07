// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

if (localStorage.getItem('currentUser')) {
    // Redirect user to shop page if accesstoken exists and user is trying to access signup page
    window.location.href = '../shop';
}