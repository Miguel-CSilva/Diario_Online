import { con } from './connection.js';


export async function cadastrarUsuario(usuario) {
    const command = `
    INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?)
    `

    const[result] = await con.query(command, [
        usuario.nome,
        usuario.email,
        usuario.senha
    ]);

    return result.insertId;
};

export async function listarUsuarios() {
    const command = `
        SELECT  id,
                nome,
                email    
        FROM usuarios;
    `
    const [linhas] =  await con.query(command, []);
    return linhas;
};

export async function listarUsuariosPorEmail(email) {
    const command = `
        SELECT  id,
                nome, 
                email
        FROM usuarios
        WHERE email = ?
    `

    const [linhas] = await con.query(command, [
        email
    ]);

    return linhas[0];
};

/*export async function listarUsuariosPorNome(nome) {

    console.log("O nome que chegou no repository foi:", nome);
    const command = `
        SELECT  id,
                nome, 
                email
        FROM usuarios
        WHERE nome LIKE ?
    `

    const [linhas] = await con.query(command, [
        `%${nome}%`
    ]);

    return linhas;
}*/