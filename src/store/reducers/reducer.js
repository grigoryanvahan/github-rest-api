const initState = {
    username: '',
    login: '',
    repos: '',
    following: '',
    followers: '',
    message: '',
    grabbedData: false,
    htmlUrl: '',
    avatar_url: ''
};

const reducer = (state = {initState}, action) => {
    if(action.type == 'CHANGE'){
        let currentUsername = action.e.target.value;
        return {
            ...state,
            username: currentUsername
        };
    } else if(action.type == 'SUBMIT'){
        if(action.data.public_repos) {
            return {
                ...state,
                login: action.data.login,
                following: action.data.following,
                followers: action.data.followers,
                avatar_url: action.data.avatar_url,
                repos: action.data.public_repos,
                grabbedData: true,
                htmlUrl: action.data.html_url
            };
        }else {
            return {
                message: 'User Not Found'
            }
        }
    }
    return state;
};

export default reducer;