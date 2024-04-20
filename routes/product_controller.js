const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.post("/getHomeProduct", async (req, res, next) => {
  // 	#swagger.tags = ['Product']
  try {

    const result = await Product.find({ TYPE: 'HOME' }).exec();

    let listHomeProducts = [];
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      listHomeProducts.push({image: element.IMAGE, name: element.NAME});
    }

    const rs = {
      listHomeProducts: listHomeProducts,
      status: {
        code: '1000',
        message: 'success'
      },
    };

    res.status(200).json(rs);
  } catch (e) {
    res.status(401).json({});
  }
});

module.exports = router;
