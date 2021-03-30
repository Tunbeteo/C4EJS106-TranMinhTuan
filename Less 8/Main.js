items = ["BackPack","MiBand","Ring"];
let listitem =document.getElementById('List-items');
let addbtn = document.getElementById(`add-btn`);
let updateinput = document.getElementById(`update-input`);
let save=document.getElementById("save");

render()

addbtn.addEventListener
function removeItemHandler(e){
   let parentElement = e.target.parentElement
   let removeItem = parentElement.outerText.replace(' remove','')
   let removeIndex = items.indexOf(removeItem)
    items.splice(removeIndex,1)
   render()
}

function addItemHandler(){
    let addInput=document.getElementById(`add-input`)
    let addValue = addInput.value
    addInput.value = ''
    items.push(addValue)
    render()
}
function updateItemHandler(e){
    let parentElement = e.target.parentElement
    let updateItem=parentElement.outerText.replace(' remove update','')
    let updateIndex = items.indexOf(updateItem)
     updateinput.value=updateItem
    save.addEventListener('click',function(){
        let newInput= document.getElementById("new-input")
        let newValue = newInput.value
        items[updateIndex]=newValue
        updateinput.value=''
        render()
    })
}

function render(){
    listitem.innerHTML=""
    for (let item of items){
        let li = `<li>${item} <button class="remove-btn">remove</button> <button class="update-btn"> update</button></li>`
        listitem.innerHTML +=li
    }

    let removebtn=document.getElementsByClassName('remove-btn')
    let updatebtn=document.getElementsByClassName("update-btn");
    addbtn.addEventListener('click',addItemHandler)
    for (let btn of removebtn){
        btn.addEventListener('click',removeItemHandler)
    }
    for (let btn of updatebtn){
        btn.addEventListener('click',updateItemHandler)
    }
    
}


// Tìm hiếu API
// // Đây là 1 Array Object