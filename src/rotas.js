import { Router } from "express";
import ANALISEcontroller from "./controllers/ANALISEcontroller.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Pagina HOME");
});

router.post("/usuarios", ANALISEcontroller.Inserir);
router.get("/usuarios", ANALISEcontroller.Listar);
router.put("/usuarios/:id_usuario", ANALISEcontroller.Editar);
router.delete("/usuarios/:id_usuario", ANALISEcontroller.Excluir);

export default router;