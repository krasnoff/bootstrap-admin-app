import { API_ERRORED } from "../Action-Types";

export function getErrorSummery(errorMessage: string) {
    return { type: API_ERRORED,  payload: {error: errorMessage}};
}