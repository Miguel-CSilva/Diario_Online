import * as service from "../service/notasService.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/nota', async (req, resp) => {
    try {
        let nota = req.body;

        let id = await service.inserirNotaService(nota);
        resp.send({ id });
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    };
});

endpoints.get('/notas', async (req, resp) => {
    try {
        let notas = await service.listarNotasService();
        resp.send(notas);
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    };
});

endpoints.get('/notas/:data', async (req, resp) => {
    try {
        let dataNota = req.params.data

        let notas = await service.listarNotasPorDataService(dataNota);
        resp.send(notas);
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    }
});

endpoints.put('/nota/:id', async (req, resp) => {
    try {
        let idNota = req.params.id;
        let nota = req.body;

        let result = await service.editarNotaService(idNota, nota);
        resp.send({ linhasAfetadas: result });
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    }
});

endpoints.delete('/nota/:id', async (req, resp) => {
    try {
        let idNota = req.params.id;
        let idUsuario = req.body.id_usuario;

        let result = await service.apagarNotaService(idNota, idUsuario);
        resp.send({ linhasAfetadas: result });
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    }
});

export default endpoints;
