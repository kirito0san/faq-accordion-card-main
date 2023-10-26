let p = document.querySelectorAll(`.two p`)
let show = document.querySelector(`.show`)
let imp = document.querySelectorAll(`.two p img`)
let one = document.querySelector(`.one`)
let two = document.querySelector(`.two`)
let main = document.querySelector(`main`)
let h1 = document.querySelector(`h1`)
p.forEach((e) => {
    e.addEventListener(`click`, () => {
        if (e.children[0].style.rotate == `180deg`) {
            e.children[0].style.rotate = `0deg`
            e.style.fontWeight = `normal`
            e.style.height = `13px`
        } else if (e.children[0].style.rotate !== `180deg`) {
            p.forEach((el) => {
                el.style.fontWeight = `normal`
                el.style.height = `13px`
                el.children[0].style.rotate = `0deg`
            })
            e.children[0].style.rotate = `180deg`
            e.style.fontWeight = `700`
            e.style.height = `20%`
        }
    })
})

window.onload = () => {
    sizer()
}
window.onresize = () => {
    sizer()
}

function sizer() {

    if (window.innerWidth < 876) {
        main.style.flexDirection = `column`
        h1.style.textAlign = `center`
        one.children[0].style.position = `relative`
        one.children[0].src = `./images/bg-pattern-mobile.svg`
        one.children[1].src = `./images/illustration-woman-online-mobile.svg`
        one.style.overflow = `visible`
        two.style.width = `calc(100% - 10px)`
        one.style.width = `100%`
        main.children[0].style.display = `none`
        two.style.marginTop = `60px`
        one.children[1].style.cssText = 'transform:translate(-51%, -62%);max-width: 261px'
        one.children[0].style.cssText = 'transform:translate(-51%, -16%);max-width:261px'
    } else {
        one.style.width = `50%`
        main.children[0].style.display = `block`
        main.style.flexDirection = `row`
        h1.style.textAlign = `start`
        one.children[0].style.position = `absolute`
        one.style.overflow = `hidden`
        one.children[1].style.transform = 'translate(-66%, -50%)'
        one.children[1].style.width = '100%'
        one.children[0].src = `./images/bg-pattern-desktop.svg`
        one.children[1].src = './images/illustration-woman-online-desktop.svg'
        two.style.width = `50%`
        two.style.marginTop = `0px`
        one.children[1].style.cssText = 'transform:translate(-66%, -50%);width: 100%'
        one.children[0].style.cssText = 'transform:translate(-86%, -56%);width:209%'
    }
}
