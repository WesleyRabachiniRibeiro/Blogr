// Creating of the Imgs in Mobile of dinamic form
const editorMobile = {
    'id' : 'designed',
    'img' :  './images/illustration-editor-mobile.svg',
    'position' : 1
}

const laptopMobile = {
    'id' : 'explanation',
    'img' :  './images/illustration-laptop-mobile.svg',
    'position' : 0
}

function addImgs(element) {
    const selectedElement = document.getElementById(`${element.id}`);
    const newPicture = document.createElement("picture");
    const newImg = document.createElement("img");
    newPicture.setAttribute('class','mobile');
    newImg.src = element.img;
    newPicture.appendChild(newImg);
    selectedElement.insertBefore(newPicture, selectedElement.children[element.position]);
}

addImgs(editorMobile);
addImgs(laptopMobile);

// Dropdown Menu
document.querySelectorAll(".menu").forEach(menu => {menu.addEventListener('click', (event) =>{
    const drop1 = document.querySelector('#drop1')
    const drop2 = document.querySelector('#drop2')
    const drop3 = document.querySelector('#drop3')
    const products = document.querySelector('#product')
    const company = document.querySelector('#company')
    const connect = document.querySelector('#connect')
    switch(event.target.id){
        case "product":
            if(drop1.classList.toggle('d-none')){
                drop1.classList.add('d-none')
                products.classList.remove('up-arrow')
                products.classList.add('down-arrow')
            }
            else{
                drop1.classList.remove('d-none')
                products.classList.add('up-arrow')
                products.classList.remove('down-arrow')
                drop2.classList.add('d-none')
                company.classList.remove('up-arrow')
                company.classList.add('down-arrow')
                drop3.classList.add('d-none')
            }
            break
        case "company":
            if(drop2.classList.toggle('d-none')){
                drop2.classList.add('d-none')
                company.classList.remove('up-arrow')
                company.classList.add('down-arrow')
            }
            else{
                drop2.classList.remove('d-none')
                company.classList.add('up-arrow')
                company.classList.remove('down-arrow')
                drop1.classList.add('d-none')
                products.classList.remove('up-arrow')
                products.classList.add('down-arrow')
                drop3.classList.add('d-none')
            }
            break
        case "connect":
            if(drop3.classList.toggle('d-none')){
                drop3.classList.add('d-none')
                connect.classList.remove('up-arrow')
                connect.classList.add('down-arrow')
            }
            else{
                drop3.classList.remove('d-none')
                connect.classList.add('up-arrow')
                connect.classList.remove('down-arrow')
                drop1.classList.add('d-none')
                products.classList.remove('up-arrow')
                products.classList.add('down-arrow')
                drop2.classList.add('d-none')
                company.classList.remove('up-arrow')
                company.classList.add('down-arrow')
            }
            break
    }
})
});