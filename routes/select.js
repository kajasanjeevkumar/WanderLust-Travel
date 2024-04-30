const express=require('express');
const router=express.Router();

const listingController=require("../controllers/selects");
router.route("/Rooms")
.get(listingController.Rooms);

router.route("/Mountains")
.get(listingController.Mountains);

router.route("/Camping")
.get(listingController.Camping);

router.route("/Forest")
.get(listingController.Forest);


router.route("/Trending")
.get(listingController.Trending);

router.route("/Iconic")
.get(listingController.Iconic);

router.route("/Castles")
.get(listingController.Castles);


router.route("/Arctic")
.get(listingController.Arctic);

router.route("/Farms")
.get(listingController.Farms);

router.route("/Domes")
.get(listingController.Domes);

router.route("/Diving")
.get(listingController.Diving);

router.route("/Museum")
.get(listingController.Museum);

router.route("/Boats")
.get(listingController.Boats);

router.route("/Pools")
.get(listingController.Pools);

router.route("/Country")
.get(listingController.Country);

module.exports=router;