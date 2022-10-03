const frutas = ["laranja", "limão", "uva"];

const item1 = document.getElementById("fruta-1")
item1.innerHTML = frutas[0]

const item2 = document.getElementById("fruta-2")
item2.innerHTML = frutas[1]

const item3 = document.getElementById("fruta-3")
item3.innerHTML = frutas[2]

const adicionarInput = () => {
    const valorInput = document.getElementById("texto").value
    frutas.push(valorInput)
    const item = document.getElementById("lista-de-frutas")
    item.innerHTML += `<li>${valorInput}</li>`
    console.log(frutas)
}