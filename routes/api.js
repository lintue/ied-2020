const express = require("express");
const router = express.Router();
const _ = require("lodash");
const fetch = require("node-fetch");
const Vimeo = require("vimeo").Vimeo;
const vimeoClient = new Vimeo(process.env.VIMEO_ID, process.env.VIMEO_SECRET, process.env.VIMEO_TOKEN);

router.get("/vimeo_thumbnail/:id", function(req, res, next){
	vimeoClient.request({
		method: "GET",
		path: `/videos/${req.params.id}`
	}, function(err, body){
		if(err) next(err);

		const picture = _.find(body.pictures.sizes, (picture) => {
			return picture.height === 360;
		});

		fetch(picture.link).then((response) => {
			response.body.pipe(res);
		});
	});
});

module.exports = router;