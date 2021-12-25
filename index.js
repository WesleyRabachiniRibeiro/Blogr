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