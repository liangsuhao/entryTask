export const ACTION_SET_FROM = 'SET_FROM';
export const TOKEN_SAVE = 'TOKEN_SAVE';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from,
    };
}

export function saveToken(token) {
    return {
        type: TOKEN_SAVE,
        payload: token,
    }
}