do {
    opcionderelleno = parseInt(prompt("ingresa tu eleccion:\n\n1. palta\n2. queso venezolano\n3. jamon\n4. revoltillo de huevo\n5. jamon y queso"));

    if (opcionderelleno === opciones) {
        alert("no hay esa opcion pana, elige otra");
    }

    else {
        switch (opciones) {
            case 1:
                if (opcionderelleno === 3) {
                    alert("¿que otra opcion quieres?");
                } else if (opcionderelleno === 1) {
                    alert("¿alguna otra opcion?");
                } else {
                    alert("por el momento no tenemos de eso");
                }
        }
        break;
        2;
        if (opcionderelleno === 2) {
            alert("¿que otra opcion quieres?");
        } else if (opcionderelleno === 5) {
            alert("¿alguna otra opcion?");
        } else {
            alert("por el momento no tenemos de eso");
        }
        break;
        3;
        if (opcionderelleno === 4) {
            alert("¿que otra opcion quieres?");
        } else if (opcionderelleno === 3) {
            alert("¿alguna otra opcion?");
        } else {
            alert("por el momento no tenemos de eso");
        }
        break;

        alert("la compu se volvio loca y metio un tequeño en el pedido");
        break;
    }
} while (continuar);
