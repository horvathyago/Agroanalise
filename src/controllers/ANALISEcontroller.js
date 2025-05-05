import servicesANALISE from "../services/servicesANALISE.js";

async function Listar(req, res) {
    const usuarios = await servicesANALISE.Listar();
    res.status(200).json(usuarios);
}

async function Inserir(req, res) {
    const { nome, email, senha } = req.body;
    const usuario = await servicesANALISE.Inserir(nome, email, senha);
    res.status(201).json({ mensagem: "success" });
}

async function Editar(req, res) {
    const id_usuario = req.params.id_usuario;
    const { nome, email, senha } = req.body;
    const usuario = await servicesANALISE.Editar(id_usuario, nome, email, senha);
    res.status(200).json(usuario);
}

async function Excluir(req, res) {
    const id_usuario = req.params.id_usuario;
    const usuario = await servicesANALISE.Excluir(id_usuario);
    res.status(200).json(usuario);
}

export default { Listar, Inserir, Editar, Excluir };