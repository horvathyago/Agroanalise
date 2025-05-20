import { Router } from "express";
import ANALISEcontroller from "./controllers/ANALISEcontroller.js";


const router = Router();

// HOME
router.get("/", (req, res) => {
    res.status(200).send("Pagina HOME");
});

// ROTAS DE USUÁRIOS
router.post("/usuarios", ANALISEcontroller.Inserir);
router.get("/usuarios", ANALISEcontroller.Listar);
router.put("/usuarios/:id_usuario", ANALISEcontroller.Editar);
router.delete("/usuarios/:id_usuario", ANALISEcontroller.Excluir);

// ROTAS DE PROPRIEDADES
router.post("/propiedades", ANALISEcontroller.criarPropiedade);
router.get("/propiedades", ANALISEcontroller.listarPropiedade);
router.put("/propriedades/:id_propriedade", ANALISEcontroller.atualizarPropriedade);
router.delete("/propriedades/:id_propriedade", ANALISEcontroller.deletarPropiedade);
router.post("/login", ANALISEcontroller.Login)

export default router;
