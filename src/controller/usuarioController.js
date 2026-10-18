import * as service from "../service/usuarioService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/cadastroUsuario', async (req, resp) => {
    try {
        let usuario = req.body;

        let id = await service.cadastrarUsuario(usuario);
        resp.send({ id });
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    };
});

endpoints.get('/listarUsuarios', async (req, resp) => {
    try {
        let usuarios = await service.listarUsuarios();
        resp.send(usuarios);
    }
    catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    };
});

export default endpoints;