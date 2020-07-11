const express = require("express");
const router = express.Router();
const _ = require("lodash");
const fetch = require("node-fetch");
const Vimeo = require("vimeo").Vimeo;
const vimeoClient = new Vimeo(process.env.VIMEO_ID, process.env.VIMEO_SECRET, process.env.VIMEO_TOKEN);

let responseCache = {};

router.get("/vimeo_thumbnail/:id", function(req, res, next){
	if(responseCache[req.params.id]){
		fetch(responseCache[req.params.id]).then((response) => {
			response.body.pipe(res);
		});
	}else{
		vimeoClient.request({
			method: "GET",
			path: `/videos/${req.params.id}?fields=pictures`
		}, function(err, body){
			if(err) next(err);

			if(body.pictures){
				const picture = _.find(body.pictures.sizes, (picture) => {
					return picture.height === 360;
				});

				responseCache[req.params.id] = picture.link;
				fetch(picture.link).then((response) => {
					response.body.pipe(res);
				});
			}else{
				console.log(body);
				next("Unknown error");
			}
		});
	}
});

module.exports = router;