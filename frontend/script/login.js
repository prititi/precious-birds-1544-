
    let serverUrl = "https://calm-tan-alligator-tie.cyclic.app/"
    // let token= jwt.sign({userID:user[0]._id},"masai")
    const OnLogin = () => {
        const payload = {

            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value

        }
        fetch(`${serverUrl}users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                localStorage.setItem("newtoken", res.newtoken)
            })
            .catch(err => console.log(err))
            if (payload.email==email.value && payload.pass==pass.value) {
                // Swal.fire('login Successfully🎉🎉')
                Swal.fire(
                    'login Successfully🎉🎉',
                    'You clicked the button!',
                    'Success'
                  )
            setTimeout(() => {
            window.location.href = "./index.html"
            }, 4000);
          }else{
              Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Do not empty!',
            })
          }
    }
   