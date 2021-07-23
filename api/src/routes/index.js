const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const filterRoutes = require('./Filter.js')
const countryRouter = require('./Country.js')
const actividadTuristicaRouter = require('./Activities.js')
const router = Router();

//========================================================//


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter);
router.use('/activities', actividadTuristicaRouter);
router.use('/filter', filterRoutes);

module.exports = router;
