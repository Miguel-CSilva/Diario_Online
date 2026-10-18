import usuario from './controller/usuarioController.js';
import notas from './controller/notasController.js';

export function addRoutes(api) {
    api.use(usuario);
    api.use(notas);
}