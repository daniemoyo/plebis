
const hideMain = ()=>{ $("#main").addClass('d-none') };
const showMain = ()=>{ $("#main").removeClass('d-none') };
const hideLogin = ()=>{  $("#login").addClass('d-none') };
const showLogin = ()=>{  $("#login").removeClass('d-none') };

// checking to see if user is logged in
let isLoggedIn = false;
let user_id
const $loginBtn = $('#loginBtn');
// //QRCODE --Fetching from server->api endpoint-http://localhost:3000/qrcode
// // fetch("/qrcode")
// // .then((res)=> res.json())
// // .then((data) => {
// //     console.log(data);
// //     var img = new Image()
// //     img.src = data
// //     document.body.appendChild(img)
// // })
$loginBtn.click((e)=>{
    let email  = $("#emailLogin").val();
    let password = $("#passwordLogin").val();
    console.log(email + " " + password);
    fetch('/users/login', {
        method: "POST",
        body: JSON.stringify({
            email:email,
            password:password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        if (!data.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.user
              })
        } else {
            isLoggedIn= true;
            user_id = data.user.user_id;
            sessionStorage.setItem("user_id", user_id);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `Welcome, ${data.user.username}`
            }) 
            sessionStorage.getItem("user_id");
            start(); 
        }
    })
    .catch((onRejected)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
    })
})
       
// $.session.set('some key', value);

const start = (()=>{
    isLoggedIn = sessionStorage.getItem("user_id")
    if (isLoggedIn) {
        showMain()
        hideLogin() 
        console.log(sessionStorage.getItem("user_id"));
        console.log("Its working");
    } else {
        hideMain()
        showLogin()
    }
    
})

start();