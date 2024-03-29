export const BASE_URL = 'https://api.alexsanya.nomoredomainsmonster.ru';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}



export const register = (email, password) => {
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password 
        })
    })
    .then(checkResponse)
   
}


export const authorize = (email, password) => {
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password:  password
        })
    })
    .then(checkResponse)
    
}


export const getContent = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(checkResponse)
    
}