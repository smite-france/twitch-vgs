const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/resources",
    createProxyMiddleware({
      target: "https://vgs.smitefrance.fr/",
      changeOrigin: true,
    })
  );
};
