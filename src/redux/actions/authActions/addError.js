
const addError = errorInfo => {
    console.log("Add error action triggered", errorInfo);
    return {
        type: "ADD_ERROR",
        errorInfo,
    }
}

export default addError;