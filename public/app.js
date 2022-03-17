
/* currency array for icon src */
const currencyIcon = ['','https://www.cryptofonts.com/img/icons/btc.svg','https://www.cryptofonts.com/img/icons/doge.svg','https://www.cryptofonts.com/img/icons/algo.svg','https://www.cryptofonts.com/img/icons/eth.svg']

const currency = ['','BITCOIN', 'DOGECOIN', "ALGORAND", "ETHERIUM"]/* currency name array */
const hideMain = ()=>{ $("#main").addClass('d-none') };
const showMain = ()=>{ $("#main").removeClass('d-none') };
const hideLogin = ()=>{  $("#login").addClass('d-none') };
const showLogin = ()=>{  $("#login").removeClass('d-none') };

const $cardGroup = $("#cardGroup");/* cards container */
const $cardAddress = $("#cardAddress");
const $creatAddress = $("#createAddress"); /* ID for create address button */
const $btc = $("#1");
const $doge = $("#2");
const $algo = $("#3");
const $eth = $("#4");
let isLoggedIn = false;/* Check if user is logged in */
let userObj = {};
const $loginBtn = $('#loginBtn');
const $loginOutBtn = $('#logout');

$cardAddress.on("click", (event)=>{
    event.stopPropagation();
    console.log(event.target.innerText);
    navigator.clipboard.writeText(event.target.innerText)
  
})
// console.log(JSON.parse(sessionStorage.userObj)); IF you want to get sesstion data use JSON.parse(sessionStorage.userObj)
const dash = ()=>{
    
    const user = JSON.parse(sessionStorage.userObj)
    $("#imgThumbnail").attr("src", `${currencyIcon[1]}`);
    $("#cardTitle").text(`${currency[user.wallet[0].currency_id]} `);
    $("#badgeNum").text(`${user.wallet.length}`);
    // <div id="cardAddressDiv d-flex" class="card-body">
    //     <ul id="cardAddress" class="list-group">
                                    
    //     </ul>
    // </div>1HX6tk8TcdFnAb5m5yA99VNGmEL4vDhFfh
    var el=''
    for (let i = 0; i < user.wallet.length; i++) {
        el += `<li id="walletAddress" class="list-group-item d-flex justify-content-between align-items-center border-0 engraved">`+`${user.wallet[i].address} <i id="qr" class="bi bi-qr-code"></i>`+`</li>`
    }
    $cardAddress.append(el)
    // return $cardAddress;
}

/* Generate new Address */
$creatAddress.on("click",(e)=>{
    const user = JSON.parse(sessionStorage.userObj)
    // e.preventDefault()
    console.log(user.wallet[0].currency_id);
    let currency_id = user.wallet[0].currency_id;
    const user_id  = sessionStorage.getItem("user_id")
    fetch(`/wallet/create/${currency_id}/${user_id}`,{
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        var img = new Image()
        img.src = data.qrURL
        console.log(img.src);
        const createdPublicAddress  = data.wallet.pri_key;
        const el = `<li id="walletAddress" class="list-group-item d-flex justify-content-between align-items-center"><a>${data.wallet.address} <i class="bi bi-qr-code"></i></a></li>`
        $cardAddress.append(el);
        $("#badgeNum").text(`${user.wallet.length+1}`)
        Swal.fire({
            imageUrl: img.src,
            imageHeight: 300,
            imageAlt: 'Public Address qr-code',
            footer: `${createdPublicAddress}`
          })
    })
    .catch((onRejected)=>{
        console.log(onRejected);
    })
})
//logout of the app
$loginOutBtn.click(()=>{
    sessionStorage.setItem("user_id", "");
    location.reload();
})
//login into the app
$loginBtn.click((e)=>{
    e.preventDefault()
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
            userObj= data
            userObj.wallet[0].currency_id;
            
            user_id = data.user.user_id;
            sessionStorage.setItem("user_id", user_id);
            sessionStorage.setItem("userObj",JSON.stringify(data));
            Swal.fire({
                
                icon: 'success',
                title: 'Success',
                text: `Welcome, ${data.user.username}`
            })
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
/* Helper function to enter app */
const start = (()=>{
    isLoggedIn = sessionStorage.getItem("user_id")
    if (isLoggedIn) {
        dash();
        showMain();
        hideLogin();
        console.log(sessionStorage.getItem("user_id"));
        console.log("Its working");
    } else {
        hideMain()
        showLogin()
    }
    
})
/* Entry point */
start();