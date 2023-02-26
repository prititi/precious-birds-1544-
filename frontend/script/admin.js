let userbutton= document.getElementById("btn")
let serverUrl = "https://calm-tan-alligator-tie.cyclic.app/"

userbutton.addEventListener("click",()=>{
    fetch(`${serverUrl}users`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
        
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            showUser(res)
           
        })
        .catch(err => console.log(err))

})
function showUser(data){
    container.innerText=null
    
    let table= document.createElement("table")
    table.setAttribute("id", "table");
    let thead= document.createElement("thead")
    thead.setAttribute("id", "data-table");
    let trhead= document.createElement("tr")
    let th1= document.createElement("th")
    th1.innerText= "Id"
    let th2= document.createElement("th")
    th2.innerText= "Name"
    let th3= document.createElement("th")
    th3.innerText= "Email"
    let th4= document.createElement("th")
    th4.innerText= "Password"
    trhead.append(th1,th2,th3,th4)
    thead.append(trhead)



    let tbody= document.createElement("tbody")

    data.forEach((ele)=>{
        let trbody= document.createElement("tr")
        trbody.setAttribute("id", "data-table");
        let th1= document.createElement("td")
        th1.innerText= ele._id
        let th2= document.createElement("td")
        th2.innerText= ele.name
        let th3= document.createElement("td")
        th3.innerText=ele.email
        let th4= document.createElement("td")
        th4.innerText= ele.pass
        trbody.append(th1,th2,th3,th4)
        tbody.append(trbody)
    })
    


    
    table.append(thead,tbody)
    container.append(table)

   
}

