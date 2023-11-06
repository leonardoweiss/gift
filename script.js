const texts = [
    'Olá, princesa, esse é uma singela lembrancinha que resolvi preparar para você. Espero que goste.',
    'Primeiro gostaria de pontuar algumas coisas que gosto em você. Vamos lá?',
    '1- Seu jeito meigo e divertido de ser, que me faz sorrir todos os dias e me contagia;',
    '2- Seu carinho e atenção com as pessoas que você gosta, principalmente com sua família, admiro isso demais;',
    '3- Sua beleza inconfundível, que me encanta sempre. Principalmente seus olhos, que me deixam hipnotizado.'
]

const musics = [
'https://open.spotify.com/track/2X8AGLwb9F0JzJ9zT27a22?si=M8oU1sZEQh-o9dDBdTwobw&utm_source=copy-link',
'https://open.spotify.com/track/5sZg4MTcTdGQNwIeXg3r6O?si=K6s6V-CnT7Cv3-GDcJqfkQ&utm_source=copy-link',
'https://open.spotify.com/track/4GhaiN8g3mwCcbfDLGoYqy?si=RYD-0pxTQYO_bfc1MQOeDg&utm_source=copy-link',
'https://open.spotify.com/track/3YQvZNmRc2y1hgdvustkce?si=qF6dKSZfSFGe384hzQxweQ&utm_source=copy-link',
'https://open.spotify.com/track/1j5N75y26nH2l0uPa9JlKe?si=YuXW49VVRw6CPhKDY_dMjQ&utm_source=copy-link',
'https://open.spotify.com/track/1mSxbLW7fKABfeY4lGpg0E?si=bEQ6SHgHTfG9ukMSW9VGxQ&utm_source=copy-link',
'https://open.spotify.com/track/1p6dBmCdP7xh3OMTYJDZPK?si=RppwyDlfQU-dvLLFnA6vwQ&utm_source=copy-link',
'https://open.spotify.com/track/3M3BpvBpECKlcjjxRHzpaB?si=EUajC-A0RTSdIaKAiSkbHA&utm_source=copy-link',
'https://open.spotify.com/track/3IsTYAUWhdQgqEV35GlJYB?si=ZWIYkNYETAa6zhXPY4WipQ&utm_source=copy-link'
]

const text = 'Essa parte é usando músicas. A seguir tem músicas que já compartilhamos um com o outro, ou que me fazem lembrar de você. Ouça cada música e escreva seus títulos em um papel. Quando terminar me mande mensagem. Beijooooo!'
let arr;
let num = 0

const textEl = document.querySelector('#text')
const btnEl = document.querySelector('#btn')
const btnEl2 = document.querySelector('#btn2')

function digitText(text, element) { //git remote add origin https://github.com/leonardoweiss/gift.git
    if (btnEl) {
        btnEl.disabled = true
    }
    arr = [...text]
    element.innerHTML = ''
    arr.forEach((el, i) => {
        setTimeout(() => {
            element.innerHTML += el
        }, 28 * i)
    })
    if (btnEl) {
        setTimeout(() => {
            btnEl.disabled = false
        }, arr.length * 29);
    }
}

digitText(texts[0], textEl)
btnEl.addEventListener('click', () => {
    num += 1
    num >= texts.length ? window.location.replace('./music.html') : digitText(texts[num], textEl)
})

function showMusics(){
    document.body.innerHTML = ''
    musics.forEach((el, index) =>{
        let a = document.createElement('a')
        a.innerHTML = `Música ${index + 1}`
        a.href = el
        a.target = '_blank'
        document.body.appendChild(a)
        a.addEventListener('click', () => {
            a.className = 'disabled'
            if (a.innerHTML == 'Música 9') {
                document.body.innerHTML = '<div id="init">Agora circule a primeira letra de cada música e leia o que formou.</div>'
            }
        })
    })
}