import con from "../database/banco.js";

async function Listar() {
    let sql = "SELECT * FROM Usuarios";
    const [usuarios] = await (con.connection.execute(sql));
    return usuarios;
}

async function Inserir(nome, email, senha){
    let sql = "INSERT INTO Usuarios(nome, email, senha) VALUES (?,?,?)";
    const [user] = await (con.connection).query(sql, [nome, email, senha]);
    return user;
}



async function Editar(id_usuario, nome, email, senha) {
    const sql = "UPDATE Usuarios SET nome=?, email=?, senha=? WHERE id_usuario=?";
    await (con.connection.execute(sql, [nome, email, senha || null, id_usuario])); // Senha pode ser null
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
    ListarByEmail
 
};