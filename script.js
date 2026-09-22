/* =========================
   TEXTO PRINCIPAL
========================= */

const texto = `
Te amo mucho y aunque intenté mandártelas no se pudo, pero le quise hacer este lindo detallito porque realmente me encantas. Osea, no puedo dejar de pensar en ti. De verdad eres lo más importante que tengo. Te amo de una manera en la que nunca antes lo había hecho y aunque a veces discutimos y al rato arreglamos, me encanta que arreglemos las cosas. Nunca me va a gustar que peleemos y nunca arreglemos, por eso yo siempre voy a querer arreglar todo contigo y espero que tú siempre lo permitas. Y aunque tú a veces me trates de formas en las que no me gustan y aunque tus acciones a veces digan que no me amas tanto, no me importará porque la verdad me encanta amarte y casi siempre soy muy feliz haciéndolo
`;

const textoFinal = "Te amo, Emely";


/* =========================
   EFECTO DE ESCRITURA
========================= */

const elementoTexto = document.getElementById("texto");
const elementoFinal = document.getElementById("final");

let indice = 0;

function escribirTexto() {

    if (indice < texto.length) {

        elementoTexto.textContent +=
            texto.charAt(indice);

        indice++;

        setTimeout(escribirTexto, 35);

    } else {

        setTimeout(escribirFinal, 700);
    }
}


/* =========================
   TEXTO FINAL
========================= */

let indiceFinal = 0;

function escribirFinal() {

    if (indiceFinal < textoFinal.length) {

        elementoFinal.textContent +=
            textoFinal.charAt(indiceFinal);

        indiceFinal++;

        setTimeout(escribirFinal, 80);

    } else {

        const corazon = document.createElement("span");

        corazon.className = "corazon-final";
        corazon.textContent = "❤️";

        elementoFinal.appendChild(corazon);
    }
}


/* =========================
   CORAZONES
========================= */

const contenedorCorazones =
    document.querySelector(".corazones");

const cantidadCorazones = 30;

for (let i = 0; i < cantidadCorazones; i++) {

    const corazon = document.createElement("div");

    corazon.className = "corazon";

    corazon.textContent = "❤️";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.fontSize =
        (16 + Math.random() * 18) + "px";

    corazon.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    corazon.style.animationDelay =
        (Math.random() * 10) + "s";

    contenedorCorazones.appendChild(corazon);
}


/* =========================
   INICIAR TEXTO
========================= */

escribirTexto();