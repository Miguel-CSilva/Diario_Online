import * as db from '../repository/notasRepository.js';


export async function inserirNotaService(nota) {
    if(nota.data) {
        nota.data = String(nota.data).substring(0, 10);

        const hoje = new Date().toISOString().split('T')[0];

        if (nota.data > hoje) {
            throw new Error('A data da nota não pode ser no futuro')
        }
    }

    let idNovo = await db.inserirNota(nota);
    return idNovo;
};

export async function listarNotasService() {
    let lista = await db.listarNotas();
    
    return lista;
};

export async function listarNotasPorDataService(data) {
    let lista = await db.listarNotasPorData(data);
    return lista;
};

export async function editarNotaService(id, nota) {
    let linhas = await db.editarNota(nota, id);
    return linhas;
};

export async function apagarNotaService(id, id_usuario) {
    let linhas = await db.apagarNota(id, id_usuario);
    return linhas;
};