import con from "../database/banco.js";

async function Listar() {
    let sql = "SELECT * FROM Usuarios";
    const [usuarios] = await (con.connection.execute(sql));
    return usuarios;
}

async function Inserir(nome, email, senha, cpf){
    let sql = "INSERT INTO Usuarios(nome, email, senha, cpf) VALUES (?,?,?,?)";
    const [user] = await (con.connection).query(sql, [nome, email, senha, cpf]);
    return user;
}



async function Editar(id_usuario, nome, email) { // Removido senha e cpf
    const sql = "UPDATE Usuarios SET nome=?, email=? WHERE id_usuario=?";
    await con.connection.execute(sql, [nome, email, id_usuario]);
    return { id_usuario };
}

async function Excluir(id_usuario) {
    let sql = "DELETE FROM Usuarios WHERE id_usuario=?";
    const [usuarios] = await (con.connection.execute(sql, [id_usuario]));
    return { mensagem: "usuário excluído" };
}



// Operações para Fazenda
async function criarPropiedade(nome, endereco, cidade, estado, telefone, id_usuario) {
    let sql = "INSERT INTO Propriedades(nome, endereco, cidade, estado, telefone, id_usuario) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await (con.connection.execute(sql, [nome, endereco, cidade, estado, telefone, id_usuario]));
    return result.insertId;
}

async function listarPropiedade() {
    let sql = "SELECT * FROM Propriedades";
    const [fazendas] = await (con.connection.execute(sql));
    return fazendas;
}

async function buscarPropiedade(id_propriedade) {
    let sql = "SELECT * FROM Propriedades WHERE id_propriedade = ?";
    const [fazenda] = await (con.connection.execute(sql, [id_propriedade]));
    return fazenda[0];
}
async function atualizarPropiedade(id_propriedade, nome, endereco, cidade, estado, telefone) {
    let sql = "UPDATE Propriedades SET nome = ?, endereco = ?, cidade = ?, estado = ?, telefone = ? WHERE id_propriedade = ?";
    const [result] = await (con.connection.execute(sql, [nome, endereco, cidade, estado, telefone, id_propriedade]));
    return result.affectedRows;
}

async function deletarPropiedade(id_propriedade) {
    let sql = "DELETE FROM Propriedades WHERE id_propriedade = ?";
    const [result] = await (con.connection.execute(sql, [id_propriedade]));
    return result.affectedRows;
}

async function ListarByEmail(email){
    let sql = "SELECT * FROM Usuarios WHERE EMAIL = ?";
    const [user] = await (con.connection).execute(sql, [email]);
    if(user.length == 0)
        return []
    else
        return user[0];}

//recuperar senha

async function RedefinirSenhaPorCpf(cpf, novaSenha) {
    // Verifica se o CPF existe e atualiza a senha em uma única operação
    let sql = "UPDATE Usuarios SET senha = ? WHERE cpf = ?";
    const [result] = await con.connection.execute(sql, [novaSenha, cpf]);
    
    if (result.affectedRows === 0) {
        throw new Error("CPF não encontrado");
    }
    
    return { mensagem: "Senha redefinida com sucesso" };
}


export default { 
    criarPropiedade,
    listarPropiedade,
    buscarPropiedade,
    atualizarPropiedade,
    deletarPropiedade,
    Listar,
    Inserir,
    Editar,
    Excluir,
    ListarByEmail,
    RedefinirSenhaPorCpf
 
};