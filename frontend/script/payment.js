let btn = document.getElementById("close")

btn.addEventListener("click",()=>{
    // alert("First step for payment is Successful🎉")
    Swal.fire(
    'verification is completed😊',
    'You clicked the button!',
    'success'
    
  )
    setTimeout(()=>{
        window.location.href = "./paymentPopUp.html"
    },2000)
    
})