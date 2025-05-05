import con from "../database/banco.js";

async function Listar() {
    let sql = "SELECT * FROM Usuarios";
    const [usuarios] = await (con.connection.execute(sql));
    return usuarios;
}

async function Inserir(nome, email, senha) {
    let sql = "INSERT INTO Usuarios(nome, email, senha) VALUES (?, ?, ?)";
    const [usuarios] = await con.query(sql, [nome, email, senha]);
    return usuarios;
}

async function Editar(id_usuario, nome, email, senha) {
    let sql = "UPDATE Usuarios SET nome=?, email=?, senha=? WHERE id_usuario=?";
    const [usuarios] = await con.query(sql, [nome, email, senha, id_usuario]);
    return { id_usuario };
}

async function Excluir(id_usuario) {
    let sql = "DELETE FROM Usuarios WHERE id_usuario=?";
    const [usuarios] = await con.query(sql, [id_usuario]);
    return { mensagem: "usuário excluído" };
}

export default { Listar, Inserir, Editar, Excluir };