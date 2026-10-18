import { con } from "./connection.js";

export async function inserirNota(nota) {
    const command = `
    INSERT INTO notas (titulo, conteudo, data, id_usuario)
        VALUES (?, ?, COALESCE(?, CURRENT_DATE()), ?)
    `

    const [result] = await con.query(command, [
        nota.titulo,
        nota.conteudo,
        nota.data || null,
        nota.id_usuario
    ]);

    return result.insertId;
};

export async function listarNotas() {
    const command = `
        SELECT  id,
                DATE_FORMAT(data, '%Y-%m-%d') AS data, 
                hora,
                titulo,
                conteudo,
                id_usuario    
        FROM notas
    `
    const [linhas] =  await con.query(command, []);
    return linhas;
};

export async function listarNotasPorData(data) {
    const command = `
        SELECT  id,
                DATE_FORMAT(data, '%Y-%m-%d') AS data, 
                hora,
                titulo,
                conteudo,
                id_usuario    
        FROM notas
        WHERE data = ?
    `
    const [linhas] = await con.query(command, [
        data
    ]);
    return linhas;
};

export async function editarNota(nota, id) {
    const command = `
    UPDATE notas
        SET titulo = ? ,
            conteudo = ?,
            data = COALESCE(?, CURRENT_DATE())
        WHERE id = ?
        AND id_usuario = ?
    `

    const [linhas] = await con.query(command, [
        nota.titulo,
        nota.conteudo,
        nota.data || null,
        id,
        nota.id_usuario
    ]);
    let linhasAfetadas = linhas.affectedRows;
    return linhasAfetadas;
};

export async function apagarNota(id, id_usuario) {
    const command = `
    DELETE FROM notas
        WHERE id = ?
        AND id_usuario = ?
    `

    const [linhas] = await con.query(command, [
        id, 
        id_usuario
    ]);
    let linhasAfetadas = linhas.affectedRows;
    return linhasAfetadas;
};