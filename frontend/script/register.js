let serverUrl="https://calm-tan-alligator-tie.cyclic.app/"

const onSignup=()=>{
    const payload= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value

    }
    fetch(`${serverUrl}users/register`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    if (payload.name.length > 0 && payload.email.length>0 && payload.pass.length>0) {
  Swal.fire(
    'Good job!',
    'Signup Successful!',
    'success'
    )
    setTimeout(() => {
    window.location.href = "./login.html"
    }, 4000);
}else{
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Do not empty!',
  })
}
}
