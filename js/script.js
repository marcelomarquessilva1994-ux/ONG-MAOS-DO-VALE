/* =========================
   FUNÇÃO AUXILIAR
   ========================= */

function somenteNumeros(valor) {
    return valor.replace(/\D/g, "");
}


/* =========================
   MÁSCARA E VALIDAÇÃO DE CPF
   ========================= */

function mascararCPF(valor) {
    let numeros = somenteNumeros(valor).slice(0, 11);

    if (numeros.length > 9) {
        return numeros.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );
    }

    if (numeros.length > 6) {
        return numeros.replace(
            /(\d{3})(\d{3})(\d{1,3})/,
            "$1.$2.$3"
        );
    }

    if (numeros.length > 3) {
        return numeros.replace(
            /(\d{3})(\d{1,3})/,
            "$1.$2"
        );
    }

    return numeros;
}


function validarCPF(valor) {
    const numeros = somenteNumeros(valor);

    if (numeros.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(numeros[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(numeros[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(numeros[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === Number(numeros[10]);
}


/* =========================
   MÁSCARA DE TELEFONE
   ========================= */

function mascararTelefone(valor) {
    let numeros = somenteNumeros(valor).slice(0, 11);

    if (numeros.length > 6) {
        return numeros.replace(
            /(\d{2})(\d{5})(\d{1,4})/,
            "($1) $2-$3"
        );
    }

    if (numeros.length > 2) {
        return numeros.replace(
            /(\d{2})(\d{1,5})/,
            "($1) $2"
        );
    }

    return numeros;
}


/* =========================
   MÁSCARA DE CEP
   ========================= */

function mascararCEP(valor) {
    let numeros = somenteNumeros(valor).slice(0, 8);

    if (numeros.length > 5) {
        return numeros.replace(
            /(\d{5})(\d{1,3})/,
            "$1-$2"
        );
    }

    return numeros;
}


/* =========================
   FORMULÁRIO DINÂMICO DA SPA
   ========================= */

/* CPF */

document.addEventListener("input", function (event) {

    const campo = event.target;

    if (campo.id === "cpf") {

        campo.value = mascararCPF(campo.value);

        if (
            campo.value.length === 14 &&
            !validarCPF(campo.value)
        ) {
            campo.setCustomValidity(
                "Informe um CPF válido."
            );
        } else {
            campo.setCustomValidity("");
        }
    }


    /* TELEFONE */

    if (campo.id === "telefone") {

        campo.value = mascararTelefone(
            campo.value
        );

        if (
            somenteNumeros(campo.value).length === 11
        ) {
            campo.setCustomValidity("");
        } else {
            campo.setCustomValidity(
                "Informe um telefone válido."
            );
        }
    }


    /* CEP */

    if (campo.id === "cep") {

        campo.value = mascararCEP(
            campo.value
        );

        if (
            somenteNumeros(campo.value).length === 8
        ) {
            campo.setCustomValidity("");
        } else {
            campo.setCustomValidity(
                "Informe um CEP válido."
            );
        }
    }

});


/* Validação final do CPF */

document.addEventListener(
    "focusout",
    function (event) {

        const campo = event.target;

        if (
            campo.id === "cpf" &&
            campo.value !== ""
        ) {

            if (!validarCPF(campo.value)) {

                campo.setCustomValidity(
                    "Informe um CPF válido."
                );

            } else {

                campo.setCustomValidity("");

            }
        }

    }
);


/* =========================
   MENU HAMBÚRGUER
   ========================= */

const menuToggle =
    document.getElementById("menu-toggle");

const menuPrincipal =
    document.getElementById("menu-principal");


if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener(
        "click",
        function () {

            const aberto =
                menuPrincipal.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                aberto
            );

        }
    );

}


/* =========================
   MENU DROPDOWN
   ========================= */

const dropdownToggle =
    document.querySelector(".dropdown-toggle");

const dropdown =
    document.querySelector(".dropdown");


if (dropdownToggle && dropdown) {

    dropdownToggle.addEventListener(
        "click",
        function () {

            const aberto =
                dropdown.classList.toggle("open");

            dropdownToggle.setAttribute(
                "aria-expanded",
                aberto
            );

        }
    );

}