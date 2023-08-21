console.log('@@@ conectado')

const titulo = document.getElementsByClassName('titulo')[0]
titulo.style.color = 'blue'

titulo.addEventListener('hover', () => {
    console.log('click')
    titulo.style.color = 'grey'
})
console.log('@@@ titulo', titulo)

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btnSuma = document.getElementById('btnSuma')

btnSuma.addEventListener('click', () => {
    sumaValores()
})

const sumaValores = () => {
    console.log('@@@ valores', parseInt(num1.value), parseInt(num2.value))
    if(!isNaN(parseInt(num1.value))) {
        if(!isNaN(parseInt(num2.value))) {
            const res = parseInt(num1.value) + parseInt(num2.value)
            alert('El resultado es: ' + res) //Alert lanza una pantalla emergente, útil para imprimir mensajes
        }
    }
}

