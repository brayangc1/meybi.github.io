const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#si')
const pag2 = document.querySelector('#pag2')
const pag1 = document.querySelector('#pag1')

let fontSize = 2

let messages = [
  'Estas segura amor? 😟',
  'Piensalo bien Mey 😭',
  'Ya no me quieres verdasito? 🤧',
  'No pienses abrazarme el día de hoy 🙁',
  'Avisa si quieres terminar 💔',
  'Dile a la señora Heylli que extrañare su pollito broaster 😿',
  'El señor Richard te castigará por mala 😟😟',
  'Ya no llevo mamaniscos 💔🤧'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`
  buttonYes.style.right = `calc(58% - ${fontSize}%)`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  pag2.style.display = 'flex';
  pag1.remove();
})