import axios from 'axios';

const API_URL = 'http://localhost:4545/ticketsystem/user'

class AuthService{

    //Creates a POST request to backend to check if the credentials are correct.
    //If the response has a accesToken, the token will be stored under the user in the localstorage.
    login(user) {
        let base64String = btoa(user.username + ":" + user.password)
        console.log(base64String);
        return axios({
            method: 'get',
            url: API_URL + '/signin',
            headers: { Authorization : 'Bearer ' + base64String },
        }).then(response => {
            localStorage.setItem('user', JSON.stringify(base64String));
            console.log(localStorage.getItem('user'));
                if (response.data.accessToken) {
                    console.log("data accestoken");


                }
                return response.data;
            });
    }

    //When user logs out the user item will be removed from the localStorage
    logout() {
        localStorage.removeItem('user');
    }

    //Creates POST request to backend to register a user
    register(user) {
        return axios.post(API_URL + '/register', {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();