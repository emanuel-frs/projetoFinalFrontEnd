const container = document.querySelector('.container');

const dados = [
    {
        imgSrc: "/assets/sobre/yt2.jpg",
        nome: "Emanuel F.",
        github: "emanuel-frs",
        programador: "Sênior",
        idade: 19,
        linguagem: "JavaScript",
        linkGitHub: "https://github.com/emanuel-frs"
    },
    {
        imgSrc: "/assets/sobre/perfilGustavo.jpeg",
        nome: "Gustavo P.",
        github: "pinheir0g",
        programador: "Sênior",
        idade: 25,
        linguagem: "Java",
        linkGitHub: "https://github.com/pinheir0g"
    },
    {
        imgSrc: "/assets/sobre/perfilNicolle.jpeg",
        nome: "Nicolle M.",
        github: "nimellodev",
        programador: "Sênior",
        idade: 27,
        linguagem: "Delphi",
        linkGitHub: "https://github.com/nimellodev"
    },
    {
        imgSrc: "/assets/sobre/perfilJoaoM.png",
        nome: "João M.",
        github: "JoaoMOA2024",
        programador: "Sênior",
        idade: 42,
        linguagem: "JavaScript",
        linkGitHub: "https://github.com/JoaoMOA2024"
    },
    {
        imgSrc: "/assets/sobre/perfilBruno.jpeg",
        nome: "Bruno J.",
        github: "brunojacomelli",
        programador: "Sênior",
        idade: 24,
        linguagem: "Portugol",
        linkGitHub: "https://github.com/brunojacomelli"
    },
    {
        imgSrc: "/assets/sobre/perfilGiovanne.png",
        nome: "Giovanne M.",
        github: "GiovanneMH",
        programador: "Sênior",
        idade: 20,
        linguagem: "JavaScript",
        linkGitHub: "https://github.com/"
    }
];

function criarPerfil(dados) {
    const perfilDiv = document.createElement('div');
    perfilDiv.classList.add('perfil');

    perfilDiv.innerHTML = `
        <div class="gitPerfil">
            <img src="${dados.imgSrc}" alt="foto de perfil do git" height="50px" style="float: left; margin-right: 10px; border-radius: 50%;">
            ${dados.github}/
            <strong>${dados.nome}</strong>
        </div>
        <div class="perfilLido">
            <strong>Programador: </strong>
            ${dados.programador}<br>
            <strong>Idade:</strong> ${dados.idade} anos 
            <strong>Linguagem: </strong> ${dados.linguagem}
        </div>
        <a href=${dados.linkGitHub} class="linkGit">
            <img src="/assets/sobre/githublogbranca.png" alt="" style="height: 30px; margin-right: 6px;">
            Github
        </a>
    `;
    return perfilDiv;
}
document.addEventListener('DOMContentLoaded', function () {
    dados.forEach(function (dado) {
        container.appendChild(criarPerfil(dado));
    });
});