// Dibujar las siguentes lineas en un cuadrado que equivale a un área de 10 por 10 asteriscos. El resultado debe ser como el que se muestra a continuación de cada reto.

// 2. El reto es dibujar todas las columnas impares.

for (let i = 0; i < 10; i++) {
    let fila = ''
    for (let j = 0; j < 10; j++) {
        if (j % 3 == 0 || j == 1) {
            fila += '* '
        }
        
    }
    console.log(fila);
}