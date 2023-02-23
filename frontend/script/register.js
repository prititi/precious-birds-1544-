
let serverUrl = "https://localhost:2100/"
var arr = JSON.parse(localStorage.getItem("user")) || [];


const onSignup = () => {
    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value

    }

    if (payload.name.length > 0 && payload.email.length>0 && payload.pass.length>0) {
        fetching(payload)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Do not empty!',
          })
    }

}
function fetching(payload) {
    fetch(`${serverUrl}users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then((res) => {
            console.log(res);
            respose()
        })
        .catch(err => console.log(err))
}

function respose() {
    Swal.fire(
        'Good job!',
        'Signup Successful!',
        'success'
    )
    setTimeout(() => {
        window.location.href = "./login.html"
    }, 4000);

}
// if (payload.email == email.value || payload.pass == pass.value || payload.name == name.value) {
//     alert("please login")
//     // Swal.fire({
//     //     icon: 'error',
//     //     title: 'Oops...',
//     //     text: 'Do not empty!',
//     //   })

// }
// else {
//     arr.push(payload)
//     localStorage.setItem("user", JSON.stringify(arr));
//     // error.innerText = "Signup Successful!"
//     // error.style.color = "green";
//     Swal.fire(
//         'Good job!',
//         'Signup Successful!',
//         'success'
//     )
//     setTimeout(() => {
//         window.location.href = "./login.html"
//     }, 4000);
// }

