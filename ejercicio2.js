for (let i = 0; i < 10; i++) {
    let fila = ''
    for (let j = 0; j < 10; j++) {
        if (j % 3 == 0 || j == 1) {
            fila += '* '
        }
        
    }
    console.log(fila);
}