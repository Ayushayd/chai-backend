class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stactck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stactck){
            this.stack = stactck
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}