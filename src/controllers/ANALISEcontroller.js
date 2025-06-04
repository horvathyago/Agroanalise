import servicesANALISE from "../services/servicesANALISE.js";

async function Listar(req, res) {
    const usuarios = await servicesANALISE.Listar();
    res.status(200).json(usuarios);
}

async function Inserir(req, res) {
    const {nome, email, senha, cpf} = req.body;     
    if(senha.length < 8){
        res.status(405).json("senha invalida")
    }
    else{
        const user = await servicesANALISE.Inserir(nome, email, senha, cpf)
        res.status(201).json({"mensagem":"sucesso"}) 
    }
}

async function Editar(req, res) {
    const id_usuario = req.params.id_usuario;
    const { nome, email } = req.body; // Removido senha e cpf
    const usuario = await servicesANALISE.Editar(id_usuario, nome, email);
    res.status(200).json(usuario);
}

async function Excluir(req, res) {
    const id_usuario = req.params.id_usuario;
    const usuario = await servicesANALISE.Excluir(id_usuario);
    res.status(200).json(usuario);
}

async function listarPropiedade(req, res) {
    const propiedades = await servicesANALISE.listarPropiedade();
    res.status(200).json(propiedades);
}

async function criarPropiedade(req, res) {
    const {nome, endereco, cidade, estado, telefone, id_usuario} = req.body;
    const propiedades = await servicesANALISE.criarPropiedade(nome, endereco, cidade, estado, telefone, id_usuario);
    res.status(201).json({mensadem: "succes"});
}

async function atualizarPropriedade(req, res) {
    const id_propriedade = req.params.id_propriedade;
    const { nome, endereco, cidade, estado, telefone } = req.body;
    const resultado = await servicesANALISE.atualizarPropriedade(
        id_propriedade,
        nome,
        endereco,
        cidade,
        estado,
        telefone
    );

    console.log("Linhas afetadas:", resultado); // Deve ser 1 se funcionou
    res.status(200).json({ linhasAfetadas: resultado });
}

async function deletarPropiedade(req, res) {
    const id_propriedade = req.params.id_propriedade;
    const propriedades = await servicesANALISE.deletarPropiedade(id_propriedade);
    res.status(200).json(propriedades);
}

async function Login(req, res){
    const {email, senha} = req.body;
    const user = await servicesANALISE.Login(email, senha)
    if(user.length == 0)
        res.status(401).json({error: "Email ou senha inválido"})
    else
        res.status(200).json(user)


          
}

//recuperar senha

async function RedefinirSenha(req, res) {
    try {
        const { cpf, novaSenha } = req.body;
        
        if (!cpf || !novaSenha) {
            return res.status(400).json({ erro: "CPF e nova senha são obrigatórios" });
        }
        
        const resultado = await servicesANALISE.RedefinirSenhaComCpf(cpf, novaSenha);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
}


export default {Listar, 
    Inserir, 
    Editar,
    Excluir,
    listarPropiedade,
    criarPropiedade,
    atualizarPropriedade,
    deletarPropiedade,
    Login,
    RedefinirSenha
   
}
