import repostuario from "../repositories/repositoryANALISE.js";

async function Listar() {
    const usuarios = await repostuario.Listar();
    return usuarios;
}

async function Inserir(nome, email, senha) {
    const usuarios = await repostuario.Inserir(nome, email, senha);
    return usuarios;
}

async function Editar(id_usuario, nome, email, senha) {
    const usuarios = await repostuario.Editar(id_usuario, nome, email, senha);
    return usuarios;
}

async function Excluir(id_usuario) {
    const usuarios = await repostuario.Excluir(id_usuario);
    return usuarios;
}

export default { Listar, Inserir, Editar, Excluir };