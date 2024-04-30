class ExpressError extends Error{
    constructor(statsCode,message){
        super();
        this.statusCode=statsCode;
        this.message=message;
    }
}
module.exports=ExpressError;