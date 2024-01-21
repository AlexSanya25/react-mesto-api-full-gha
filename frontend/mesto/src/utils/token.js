const TOKEN_KEY = 'jwt';
export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token); 
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const temoveToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}