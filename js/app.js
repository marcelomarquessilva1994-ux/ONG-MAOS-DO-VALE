/* =========================
   SISTEMA SPA - MÃOS DO VALE
   ========================= */

const app = document.getElementById("app");

const CHAVE_CADASTRO = "maosDoValeCadastro";


/* =========================
   TEMPLATES
   ========================= */

const templates = {

    inicio: `
        <section class="col-12" aria-labelledby="titulo-principal">

            <h1 id="titulo-principal">
                Mãos do Vale
            </h1>

            <img
                src="../imagens/ong.jpg"
                alt="Voluntários da Mãos do Vale realizando uma ação social"
                width="800"
            >

            <p>
                A Mãos do Vale é uma organização do terceiro setor
                dedicada à promoção da solidariedade, inclusão e
                desenvolvimento social.
            </p>

        </section>

        <section class="col-8" aria-labelledby="sobre">

            <h2 id="sobre">
                Sobre a ONG
            </h2>

            <p>
                Nossa missão é conectar pessoas dispostas a ajudar
                com iniciativas que promovem melhorias na vida
                das comunidades.
            </p>

        </section>

        <section class="col-4" aria-labelledby="contato">

            <h2 id="contato">
                Entre em contato
            </h2>

            <p>E-mail: contato@maosdovale.org.br</p>
            <p>Telefone: (33) 99999-9999</p>
            <p>Endereço: Araçuaí - MG</p>

        </section>

        <section
            class="col-12 feedback-section"
            aria-labelledby="feedback-titulo">

            <h2 id="feedback-titulo">
                Feedback e interações
            </h2>

            <div class="badge">
                Projeto ativo
            </div>

            <div
                class="alert alert-success"
                role="status">

                Cadastro disponível para novos voluntários.

            </div>

            <div class="feedback-actions">

                <button
                    type="button"
                    class="button-feedback"
                    id="toast-button">

                    Exibir notificação

                </button>

                <button
                    type="button"
                    class="button-feedback"
                    id="modal-button">

                    Abrir informações

                </button>

            </div>

        </section>

        <div
            class="toast"
            id="toast"
            role="status"
            aria-live="polite">

            Ação realizada com sucesso!

        </div>

        <dialog
            class="modal"
            id="modal">

            <div class="modal-content">

                <h2>
                    Sobre a Mãos do Vale
                </h2>

                <p>
                    A Mãos do Vale promove ações de solidariedade,
                    voluntariado e desenvolvimento social.
                </p>

                <button
                    type="button"
                    class="button-feedback"
                    id="modal-close">

                    Fechar

                </button>

            </div>

        </dialog>
    `,


    projetos: `
        <section class="col-12">

            <h1>
                Projetos Sociais
            </h1>

            <p>
                Conheça as principais iniciativas desenvolvidas
                pela Mãos do Vale.
            </p>

        </section>

        <section class="col-12">

            <h2>
                Nossas iniciativas
            </h2>

            <div class="grid-layout">

                <article class="col-4">

                    <h3>
                        Alimento na Mesa
                    </h3>

                    <p>
                        Campanha de arrecadação e distribuição
                        de alimentos para famílias em situação
                        de vulnerabilidade.
                    </p>

                </article>

                <article class="col-4">

                    <h3>
                        Conecta Jovem
                    </h3>

                    <p>
                        Oficinas de tecnologia e preparação
                        profissional para jovens da comunidade.
                    </p>

                </article>

                <article class="col-4">

                    <h3>
                        Vale Verde
                    </h3>

                    <p>
                        Ações de educação ambiental e recuperação
                        de espaços comunitários.
                    </p>

                </article>

            </div>

        </section>

        <section
            class="col-8"
            id="voluntariado">

            <h2>
                Participação voluntária
            </h2>

            <p>
                Pessoas interessadas podem participar das ações
                sociais como voluntárias.
            </p>

        </section>

        <aside
            class="col-4"
            id="doacoes">

            <h2>
                Doações
            </h2>

            <p>
                As doações ajudam a manter os projetos sociais
                da organização.
            </p>

        </aside>
    `,


    cadastro: `
        <section
            class="col-12"
            aria-labelledby="titulo-cadastro">

            <h1 id="titulo-cadastro">
                Cadastro de voluntários
            </h1>

            <p>
                Preencha seus dados para participar das iniciativas
                da Mãos do Vale.
            </p>

        </section>

        <form
            class="col-12"
            id="form-cadastro"
            action="#"
            method="post">

            <div class="grid-layout">

                <fieldset class="col-6">

                    <legend>
                        Dados pessoais
                    </legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        autocomplete="name"
                        required
                    >

                    <br><br>

                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        inputmode="numeric"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        maxlength="14"
                        autocomplete="off"
                        required
                    >

                    <br><br>

                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                    >

                    <br><br>

                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        autocomplete="bday"
                        required
                    >

                    <br><br>

                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        inputmode="numeric"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        maxlength="15"
                        autocomplete="tel"
                        required
                    >

                </fieldset>

                <fieldset class="col-6">

                    <legend>
                        Endereço
                    </legend>

                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        inputmode="numeric"
                        pattern="[0-9]{5}-[0-9]{3}"
                        maxlength="9"
                        autocomplete="postal-code"
                        required
                    >

                    <br><br>

                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        autocomplete="street-address"
                        required
                    >

                    <br><br>

                    <label for="numero">
                        Número:
                    </label>

                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        autocomplete="address-line1"
                        required
                    >

                    <br><br>

                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        autocomplete="address-level2"
                        required
                    >

                    <br><br>

                    <label for="estado">
                        Estado:
                    </label>

                    <select
                        id="estado"
                        name="estado"
                        autocomplete="address-level1"
                        required>

                        <option value="">
                            Selecione
                        </option>

                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>

                    </select>

                </fieldset>

                <div class="col-12">

                    <button type="submit">
                        Salvar cadastro
                    </button>

                </div>

            </div>

        </form>
    `
};


/* =========================
   LOCAL STORAGE
   ========================= */

function obterDadosCadastro() {

    const dadosSalvos =
        localStorage.getItem(CHAVE_CADASTRO);

    if (!dadosSalvos) {
        return {};
    }

    try {

        return JSON.parse(dadosSalvos);

    } catch (erro) {

        console.error(
            "Não foi possível ler os dados salvos.",
            erro
        );

        return {};

    }
}


function salvarDadosCadastro() {

    const campos = [
        "nome",
        "cpf",
        "email",
        "nascimento",
        "telefone",
        "cep",
        "endereco",
        "numero",
        "cidade",
        "estado"
    ];

    const dados = {};

    campos.forEach(function (nomeCampo) {

        const campo =
            document.getElementById(nomeCampo);

        if (campo) {
            dados[nomeCampo] = campo.value;
        }

    });

    localStorage.setItem(
        CHAVE_CADASTRO,
        JSON.stringify(dados)
    );

}


function restaurarDadosCadastro() {

    const dados =
        obterDadosCadastro();

    Object.keys(dados).forEach(function (nomeCampo) {

        const campo =
            document.getElementById(nomeCampo);

        if (campo) {
            campo.value = dados[nomeCampo];
        }

    });

}


/* =========================
   CONFIGURAÇÃO DO CADASTRO
   ========================= */

function configurarCadastro() {

    const formulario =
        document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    restaurarDadosCadastro();


    formulario.addEventListener(
        "input",
        salvarDadosCadastro
    );


    formulario.addEventListener(
        "change",
        salvarDadosCadastro
    );


    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;
            }

            salvarDadosCadastro();

            alert(
                "Cadastro salvo no armazenamento local do navegador."
            );

        }
    );

}


/* =========================
   RENDERIZAÇÃO
   ========================= */

function renderizar(rota) {

    if (!app) {
        return;
    }

    const template =
        templates[rota] || templates.inicio;

    app.innerHTML = template;

    configurarFeedback();

    configurarCadastro();
}


/* =========================
   NAVEGAÇÃO
   ========================= */

function fecharMenus() {

    const dropdown =
        document.querySelector(".dropdown");

    const dropdownToggle =
        document.querySelector(".dropdown-toggle");

    const menuPrincipal =
        document.getElementById("menu-principal");

    const menuToggle =
        document.getElementById("menu-toggle");


    if (dropdown) {
        dropdown.classList.remove("open");
    }


    if (dropdownToggle) {
        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    if (menuPrincipal) {
        menuPrincipal.classList.remove("active");
    }


    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

}


function navegar(event) {

    event.preventDefault();

    const rota =
        event.currentTarget.dataset.route;

    fecharMenus();

    history.pushState(
        { rota },
        "",
        `#${rota}`
    );

    renderizar(rota);

}


/* =========================
   LINKS DO MENU
   ========================= */

document
    .querySelectorAll("[data-route]")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            navegar
        );

    });


/* =========================
   BOTÕES DE FEEDBACK
   ========================= */

function configurarFeedback() {

    const toastButton =
        document.getElementById("toast-button");

    const toast =
        document.getElementById("toast");

    const modalButton =
        document.getElementById("modal-button");

    const modal =
        document.getElementById("modal");

    const modalClose =
        document.getElementById("modal-close");


    if (toastButton && toast) {

        toastButton.addEventListener(
            "click",
            function () {

                toast.classList.add("show");

                setTimeout(
                    function () {

                        toast.classList.remove("show");

                    },
                    3000
                );

            }
        );

    }


    if (modalButton && modal) {

        modalButton.addEventListener(
            "click",
            function () {

                modal.showModal();

            }
        );

    }


    if (modalClose && modal) {

        modalClose.addEventListener(
            "click",
            function () {

                modal.close();

            }
        );

    }

}


/* =========================
   HISTÓRICO DO NAVEGADOR
   ========================= */

window.addEventListener(
    "popstate",
    function () {

        const rota =
            location.hash.replace("#", "") ||
            "inicio";

        renderizar(rota);

    }
);


/* =========================
   ROTA INICIAL
   ========================= */

const rotaInicial =
    location.hash.replace("#", "") ||
    "inicio";

renderizar(rotaInicial);