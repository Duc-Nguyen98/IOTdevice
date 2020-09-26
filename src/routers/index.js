const siteRouter = require('../routers/siteRouter');

function router(app) {
  app.use('/', siteRouter);
}

module.exports = router;
