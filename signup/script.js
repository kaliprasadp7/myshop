const signup_btn = document.getElementById("signup-btn");
const user_first_name = document.getElementById("first-name");
const user_last_name = document.getElementById("last-name");
const user_email = document.getElementById("email");
const user_password = document.getElementById("password");
const user_confirm_password = document.getElementById("confirm-password");
let users=[];


function signup() {
    let first_name = user_first_name.value;
    let last_name = user_last_name.value;
    let email = user_email.value;
    let password = user_password.value;
    let confirm_password = user_confirm_password.value;

    if (first_name != '' && last_name != '' && email != '' && password != '' && confirm_password != '') {
        if (password == confirm_password) {
            users.push({
                'first-name': first_name,
                'last-name': last_name,
                'email': email,
                'password': password,
            });
            document.getElementById("error").style.display = "none";
            document.getElementById("success").style.display = "block";

            saveInfo(users);

            user_first_name.value = '';
            user_last_name.value = '';
            user_email.value = '';
            user_password.value = '';
            user_confirm_password.value = '';
        }else {
            alert("Password and Confirm Password must be same");
        }
    } else {
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "block";
    }

}

// to save the info in localStorage
function saveInfo() {
    
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));

    // window.location.href = '../login';
    

}
