const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
      try {
            const products = ProductsController.getProduct();
            const data = {
                  products,
                  isEmpty: !products.length,
                  detailUrlBase: process.env.BASE_HOST,
            };
            res.render("form", data);
      } catch (error) {
            next(error);
      }
});

module.exports = router;
