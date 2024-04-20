const express = require("express");
const router = express.Router();
const Master = require("../model/master");

router.post("/getMasterData", async (req, res, next) => {
    // 	#swagger.tags = ['Master']

    try {
        const result = await Master.find().exec();

        let listMasterData = [];
        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            listMasterData.push({ key: element.KEY, name: element.NAME, data: element.DATA });
        }

        const rs = {
            getMasterData: {
                listMasterData: listMasterData,
            },
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
