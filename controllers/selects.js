const Listing=require("../models/listing");
const ExpressError=require("../utils/ExpressError.js");
function capitalizeString(str) {
    // Split the string by any non-word characters (e.g., spaces, underscores)
    const words = str.split(/\W+/);

    // Capitalize the first letter of each word and convert the rest to lowercase
    const capitalizedWords = words.map(word => {
        // Check if the word is an abbreviation (e.g., USA)
        const isAbbreviation = word.length > 1 && word === word.toUpperCase();
        if (isAbbreviation) {
            return word; // Don't modify abbreviations
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    // Join the capitalized words with spaces
    return capitalizedWords.join(' ');
}



module.exports.Rooms=async(req,res)=>{
    const allListings=await Listing.find({"category":"Rooms"});
    res.render("listings/index.ejs",{allListings});
}
module.exports.Mountains=async(req,res)=>{
    const allListings=await Listing.find({"category":"Mountains"});
    res.render("listings/index.ejs",{allListings});
}
module.exports.Camping=async(req,res)=>{
    const allListings=await Listing.find({"category":"Camping"});
    res.render("listings/index.ejs",{allListings});
}
module.exports.Forest=async(req,res)=>{
    const allListings=await Listing.find({"category":"Forest"});
    res.render("listings/index.ejs",{allListings});
}

module.exports.Trending = async (req, res) => {
    const allListings = await Listing.find({ "category": { $ne: "Mountains" } });
    res.render("listings/index.ejs", { allListings });
}

module.exports.Iconic=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $nin: ["Rooms", "Mountains"] } });
    res.render("listings/index.ejs",{allListings});
}



module.exports.Farms=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Mountains", "Forest"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Arctic=async(req,res)=>{
    const allListings=await Listing.find({"category":"Arctic"});
    res.render("listings/index.ejs",{allListings});
}

module.exports.Farms=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Farms","Mountains", "Forest"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Castles=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Castles","Forest", "Mountains"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Boats=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Boats","Camping", "Arctic","Rooms"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Pools=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Pools","Arctic","Mountains"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Domes=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Domes","Forest","Arctic"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Diving=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Diving","Forest","Mountains"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Museum=async(req,res)=>{
    const allListings=await Listing.find({ "category": { $in: ["Museum"] } });
    res.render("listings/index.ejs",{allListings});
}

module.exports.Country=async(req,res)=>{
    let searchTerm = req.query.search;
    searchTerm=capitalizeString(searchTerm);
    let allListings=await Listing.find({ "country": {$in: [searchTerm]}});
    if (allListings.length==0) 
    {
        console.log("Not exist");
        req.flash("error","Tourism is not available in "+searchTerm);
        allListings=await Listing.find({});
        res.render("listings/index.ejs",{allListings});
      
    }
    else
    {
        res.render("listings/index.ejs",{allListings});
    }
    
}








