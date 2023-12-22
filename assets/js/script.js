


cursos.map((item,index)=>{

    let cursoJson = document.querySelector('.card-area').cloneNode(true)
    document.querySelector('.cursos-destaques .sliders').append(cursoJson)
})