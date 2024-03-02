let aciertos = document.getElementById("aciertos")
let movimientos = document.getElementById("movimientos")
let contMovimientos = 0
let contAciertos = 0;
let contAbiertos = 0
let numero1 = ""
let numero2 = ""
let primerNum = 0
let segundoNum = 0
let opciones = document.querySelectorAll(".opciones")

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6]
numeros.sort(()=>Math.random() - 0.5)
console.log(numeros)

async function validar(numero) {
    contAbiertos++
    console.log(contAbiertos)
    if(contAbiertos == 1){
        numero1 = document.getElementById(numero)
        primerNum = numeros[numero]
        numero1.textContent = primerNum
        numero1.disabled = true
        numero1.style.opacity = "0.5"
    }else if (contAbiertos == 2) {
        numero2 = document.getElementById(numero)
        segundoNum = numeros[numero]
        numero2.textContent = segundoNum
        contMovimientos++
        numero2.disabled = true
        numero2.style.opacity = "0.5"
        movimientos.textContent = `Movimientos: ${contMovimientos}`
        if (primerNum == segundoNum) {
            contAciertos++
            contAbiertos = 0
            aciertos.textContent =  `Aciertos: ${contAciertos}` 
        }else{
            setTimeout(()=>{
                numero1.textContent = " "
                numero2.textContent = " "
                numero1.disabled = false
                numero2.disabled = false
                numero1.style.opacity = "1"
                numero2.style.opacity = "1"
                contAbiertos = 0
            }, 1000)
        }
    }
    if (contAciertos== 6) {
        await Swal.fire({
            title: "El juego ha terminado!",
            text: "Has ganado!",
            icon: "success"
        });
        window.location = "index.html"
    }
}
