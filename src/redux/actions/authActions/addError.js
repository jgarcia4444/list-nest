
const addError = errorInfo => {
    return {
        type: "ADD_ERROR",
        errorInfo,
    }
}

export default addError;