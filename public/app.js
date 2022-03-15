const hideMain = ()=>{ $("#main").addClass('d-none') };
const showMain = ()=>{ $("#main").removeClass('d-none') };
const hideLogin = ()=>{  $("#login").addClass('d-none') };
const showLogin = ()=>{  $("#login").removeClass('d-none') };

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
    fetch('/login', {
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
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `Welcome, ${data.user.username}`
            })
        showMain()
        hideLogin()
        }
    })
    .catch((onRejected)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something went wrong!'
          })
    })
})
       

const start = (()=>{
    hideMain()
    showLogin()
    console.log("Its start is working");
})

start();