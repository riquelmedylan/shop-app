export const errorMessageCatch = {
    errMessage: "",
    get errorMessage(){
        return this.errMessage
    }, 
    set errorMessage(message){
        this.errMessage = message
    }
}