let flashaste = () => {
    document.getElementById('flashaste').innerHTML = 'que flasheas? nadie es el verdadero amor de mi vida ademas de vos'
}

let noteamo = () => {
    document.getElementById('noteamo').innerHTML = 'asumo q pusiste q no xq no me amas, sino q me amas muchisimo mas de lo q podria imaginar no?'
}

let redirect = (fileName) => {
    if (fileName != 'index' && window.location.pathname.split('/').pop() == 'index.html') {
        window.open(`https://brunooulloa.github.io/nosotros/html/${fileName}.htm`,'_self');
    } else if (fileName != 'index') {
        window.open(`${fileName}.htm`,'_self');
    } else {
        window.open('../../index.html','_self');
    }
}

const red2 = (fileName) => {
    if (fileName === 'index') {
        window.open('../../index.html', '_self');
    } else if (window.location.pathname.split('/').pop().includes('index')) {
        window.open(`https://brunooulloa.github.io/nosotros/html/${fileName}.htm`, '_self');
    } else {
        window.open(`${fileName}.htm`, '_self');
    }
}

let mal1 = () => {
    document.getElementById('mal1').innerHTML = 'lo entiendo y se q duele mucho cambiar y q la otra persona no pueda hacer lo mismo por vos, pero no te preocupes, no te voy a dejar sola, siempre voy a estar a tu lado, te amo'
}

let mal2 = () => {
    document.getElementById('mal2').innerHTML = 'tenes razon y lo estoy trabajando, no es facil y no es algo q se pueda cambiar de un dia para el otro, pero te prometo q lo voy a lograr, x vos y x mi'
}

let mal3 = () => {
    document.getElementById('mal3').innerHTML = 'perdon si no fue lo que esperabas este regalo, pero enserio me esforce, y quiero mostrarte q enserio te amo, exactamente como el dia en q te hice esto x primera vez, y no se va a ir ese amor nunca :('
}

let nosotros = () => {
    let code = prompt('password: ')
    if (code === null) {
        return;
    }

    switch (code) {
        case '040922rb':
            window.location.replace('./nosotros/index.html')
        case 'exit':
            break;
        
        default:
            setTimeout(() => { alert('incorrect password'); }, 2000);
            break;
    }
}