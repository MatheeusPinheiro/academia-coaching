

/*menu */

let menu = document.querySelectorAll(".menu a")

menu.forEach(item =>{
    item.addEventListener('click', ()=>{
        menu.forEach(otherItem =>{
            otherItem.classList.remove('active')
        })

        item.classList.add('active')
    })
})

/*menu blog*/

let menus = document.querySelectorAll(".blog .right .menus ul li")

menus.forEach(item =>{
    item.addEventListener('click', ()=>{
        menus.forEach(otherItem =>{
            otherItem.classList.remove('active')
        })

        item.classList.add('active')
    })
})



cursos.map((item,index)=>{

    let cursoJson = document.querySelector('.card-area').cloneNode(true)
    document.querySelector('.cursos-destaques .sliders').append(cursoJson)
})

let count = 1

let radio = document.querySelector('.manual-btn')
document.querySelector('#radio1').checked = true


setInterval(()=>{
    proximaImg()
}, 5000)

const proximaImg = ()=>{
    count++

    if(count > 3){
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}

