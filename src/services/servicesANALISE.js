import repostuario from "../repositories/repositoryANALISE.js";
import bcrypt from 'bcrypt';

async function Listar() {
    const usuarios = await repostuario.Listar();
    return usuarios;
}

async function Inserir(nome, email, senha){
    var n = nome.toUpperCase()
    const password = await bcrypt.hash(senha, 10)   
    const user = await repostuario.Inserir(n, email, password);
    return user;
}


async function Editar(id_usuario, nome, email, senha) {
    const usuarios = await repostuario.Editar(id_usuario, nome, email, senha);
    return usuarios;
}

async function Excluir(id_usuario) {
    const usuarios = await repostuario.Excluir(id_usuario);
    return usuarios;
}
// Serviços para Fazenda
async function criarPropiedade(nome, endereco, cidade, estado, telefone, id_usuario) {
    return await repostuario.criarPropiedade(nome, endereco, cidade, estado, telefone, id_usuario); 
}

async function listarPropiedade() {
    return await repostuario.listarPropiedade();
}

async function buscarPropiedade(id_propriedade) {
    return await repostuario.buscarPropiedade(id_propriedade);
}

async function atualizarPropriedade(id_propriedade, nome, endereco, cidade, estado, telefone) {
    return await repostuario.atualizarPropiedade(id_propriedade, nome, endereco, cidade, estado, telefone);
}

async function deletarPropiedade(id_propriedade) {
    return await repostuario.deletarPropiedade(id_propriedade);
}

//login

async function Login(email, senha){   
    const user = await repostuario.ListarByEmail(email);  
    if(user.length == 0)
        return []
    else{
        if(await  bcrypt.compare(senha, user.senha)){
            delete user.senha
            user.token = "abcd1234"
            return user;
        }else{
            return []
        }
    }
        
               
}


export default { 
    criarPropiedade,
    listarPropiedade,
    buscarPropiedade,
    atualizarPropriedade,
    deletarPropiedade,
    Listar,
    Inserir,
    Editar,
    Excluir,
    Login
};