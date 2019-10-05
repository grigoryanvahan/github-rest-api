export const changeUsername = e => {
    return {
        type: 'CHANGE',
        e: e
    }
};

export  const getUserData = (e, username) => {
    e.persist();
    return async dispatch => {
        try {
            const resp = await fetch(`https://api.github.com/users/${username}`);
            const data = await resp.json();

            dispatch({
                type: 'SUBMIT',
                e: e,
                data
            })
        } catch (er) {
            console.log(er);
        }
    };
};