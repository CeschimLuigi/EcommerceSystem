import express from 'express';

import { busca } from "../controllers/buscaController.js";

const router = express.Router();

router.get('/produtos', busca);

export default router;
