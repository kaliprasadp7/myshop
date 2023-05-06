const login_email=document.getElementById("login-email");
const login_password=document.getElementById("login-password");
const login_btn=document.getElementById("login-btn");
let currentUser={};

// Check if accesstoken exists in local storage and user is trying to access the signup page
if (localStorage.getItem('currentUser')) {
    // Redirect user to shop page if accesstoken exists and user is trying to access signup page
    window.location.href = '../shop';
    console.log(window.location.pathname)

}

// Check if accesstoken exists in local storage
if (!localStorage.getItem('currentUser') && window.location.pathname === '/shop/') {
    // Redirect user to signup page if accesstoken does not exist
    window.location.href = '../';
}

login_btn.addEventListener("click", function(){
    if(login_email.value != "" && login_password.value != ""){
        const data=JSON.parse(localStorage.users);
        let foundMatch = false;
        data.forEach((item)=>{
            if(item["email"] == login_email.value && item["password"] == login_password.value){
                const accessToken = generateAccessToken();
                currentUser=item;
                currentUser.token = accessToken;
                localStorage.setItem("currentUser",JSON.stringify(currentUser));
                // console.log(currentUser);
                foundMatch = true;
            }
        })
        if (!foundMatch) {
            alert("Enter correct details");
        }else{
            window.location.href = "../shop";
        }
    }else{
        alert("Please Enter Email And Password");
    }
})

// to generate 16 bytes of random token 
function generateAccessToken() {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}