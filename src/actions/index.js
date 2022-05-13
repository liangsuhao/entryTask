export const ACTION_SET_FROM = 'SET_FROM';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from,
    };
}