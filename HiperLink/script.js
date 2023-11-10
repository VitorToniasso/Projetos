function toggleMode() {
    const html = document.documentElement
    
    // pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(html.classList.toggle('light')) {

    //se tiver light mode, adcionar a imagem light
    img.setAttribute('src', 'Assents/avatar-light.png')   
    } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'Assents/avatar.png')
    }



}