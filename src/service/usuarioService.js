import * as db from '../repository/usuarioRepository.js';


export async function cadastrarUsuario(usuario) {
    let confereEmail = await db.listarUsuariosPorEmail(usuario.email);
    if (!!confereEmail) {
        throw new Error('Usuário já existe');
    }
    return db.cadastrarUsuario(usuario);
};

export async function listarUsuarios() {
    let lista = await db.listarUsuarios();
    
    return lista;
};