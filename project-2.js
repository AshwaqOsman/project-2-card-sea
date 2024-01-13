const body = document.body
const btn = document.querySelector("button")
const input = document.querySelector("input")
const container = document.getElementById("container")
const items= document.querySelectorAll("cards")
const card = document.getElementsByName("h2")
btn.addEventListener("click", function(){
    const cardsArray = []

    for (let i =0; i<container.children.length; i++){
        console.log(container.children[i].innerText)
        cardsArray.push(container.children[i].innerText.toLowerCase())
    
    }

    const filter = input.value
 


   
    if(input.value.length >0) {
        if (cardsArray.includes(input.value.toLocaleLowerCase())){

           console.log(`${filter} is on the list`)
           

            
            
            
        }else{
            console.log(`${filter} is not on the list`)
        }


    }else{
        alert("type the name of the card")

    }
    /*
    for (i=0; i<cardsArray.length; i++){
        let result = cardsArray[i].getElementsByTagName("h1")
        if (result){
            let searchValue =  result.textContent || result.innerHTML
            if (searchValue.toLocaleLowerCase().indexOf(filter) >-1){
                body.append(result)
            }else{
                tem[i].style.display="none"

            }


        }

    }*/

    






    
})
