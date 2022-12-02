let flashaste = () => {
    document.getElementById('flashaste').innerHTML = 'que flasheas? nadie es el verdadero amor de mi vida ademas de vos'
}

let redirect = (fileName) => {
    if (fileName != 'index' && window.location.pathname.split('/').pop() != 'index.html') {
        window.open(`html/${fileName}.htm`,'_self');
    } else if (fileName != 'index') {
        window.open(`${fileName}.htm`,'_self');
    } else {
        window.open('../index.html','_self');
    }
}

let mal1 = () => {
    document.getElementById('mal1').innerHTML = 'se que te gusta mi sonrisa pero esta es la respuesta incorrecta :/'
}

let mal2 = () => {
    document.getElementById('mal2').innerHTML = 'cuando nos conocimos fue un momento magico no solo para mi sino para vos, pero desafortunadamente no me parece el mejor momento de nuestra relacion, nada se compara al amor que te tuve en cuanto me desperte y vi que estabas al lado mio, me causaste seguridad y una gran felicidad'
}

let mal3 = () => {
    document.getElementById('mal3').innerHTML = 'perdon si no fue lo que esperabas este regalo, pero enserio me esforce, eso deberia contar de algo :('
}