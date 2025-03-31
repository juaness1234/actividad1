function calcularResultados() {
    let respuestasCorrectas = 0;
    let preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach((pregunta) => {
        let opciones = pregunta.querySelectorAll("input[type='radio']");
        let respondido = false;

        opciones.forEach((opcion) => {
            if (opcion.checked) {
                respondido = true;
                if (opcion.value === "correcto") {
                    respuestasCorrectas++;
                    opcion.parentElement.classList.add("correcto");
                } else {
                    opcion.parentElement.classList.add("incorrecto");
                }
            }
        });

        if (!respondido) {
            opciones.forEach((opcion) => {
                opcion.parentElement.classList.add("incorrecto");
            });
        }
    });

    document.getElementById("resultado").innerHTML = 
        `<h3>Respuestas correctas: ${respuestasCorrectas} de 5</h3>`;
}
