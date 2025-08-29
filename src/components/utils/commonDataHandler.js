export function getErrorMessage(error) {
    return error.response.data.statusMessage;
}

export function getResultData(response) {
    return response.data;
}