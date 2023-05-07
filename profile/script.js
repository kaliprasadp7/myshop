const user_logout_btn = document.getElementById("profile-logout-btn");
const save_info_btn = document.getElementById("profile-saveinfo-btn");
const chang_password_btn = document.getElementById("profile-chng-pwd-btn");

const user_first_name = document.getElementById("profile-first-name");
const user_last_name = document.getElementById("profile-last-name");
const user_old_password = document.getElementById("profile-old-password");
const user_password = document.getElementById("profile-password");
const user_confirm_password = document.getElementById("profile-confirm-password");



if (!localStorage.getItem('currentUser')) {
    // Redirect user to shop page if accesstoken exists and user is trying to access signup page
    window.location.href = '/';
}
user_first_name.value = JSON.parse(localStorage.currentUser).firstname;
user_last_name.value = JSON.parse(localStorage.currentUser).lastname;

save_info_btn.addEventListener("click", function(){
    //to update current user localStorage
    let currentObj=JSON.parse(localStorage.getItem("currentUser"));
    currentObj.firstname=user_first_name.value;
    currentObj.lastname=user_last_name.value;
    localStorage.setItem("currentUser",JSON.stringify(currentObj));

    //to update the users array localStorage
    let currentArray=JSON.parse(localStorage.getItem("users"));
    let index=currentArray.findIndex((user)=>user.email==currentObj.email);
    currentArray[index].firstname=user_first_name.value;
    currentArray[index].lastname=user_last_name.value;
    localStorage.setItem("users",JSON.stringify(currentArray));
})

chang_password_btn.addEventListener("click", function(){

    let currentObj=JSON.parse(localStorage.getItem("currentUser"));
    if(currentObj.password == user_old_password.value){
        if(user_password.value == user_confirm_password.value){
            //to update currentUser password localStorage
            currentObj.password = user_password.value;
            localStorage.setItem("currentUser",JSON.stringify(currentObj));

            //to update the users array password localStorage
            let currentArray=JSON.parse(localStorage.getItem("users"));
            let index=currentArray.findIndex((user)=>user.email==currentObj.email);
            currentArray[index].password=user_password.value;
            localStorage.setItem("users",JSON.stringify(currentArray));

            alert("Password changed successfully");

            user_old_password.value = '';
            user_password.value = '';
            user_confirm_password.value = '';
        }else{
            alert("Password and Confirm Password most be same");
        }
    }else{
        alert("Old Password is Wrong");
    }
})




// user logout and remove currentUser object
user_logout_btn.addEventListener("click", function(){
    localStorage.removeItem("currentUser");
    window.location.href="/"
})


