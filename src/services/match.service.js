import axios from 'axios';

const API_URL = 'http://localhost:4545/ticketsystem/match'


const matchService = {
    getMatches(){
        // returns promise
        return axios({
            method: 'get',
            url: API_URL,
            headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))}
        }).then(response => {
            return response.data;
        }).catch(error => console.log(error));
    },

    getMatchesByTeamID(teamid){
        return axios({
            method: 'get',
            url: API_URL,
            params: { 'team' : teamid },
            headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))}
        }).then(response => {
            console.log(response.data)
            return response.data
        }).catch(error => console.log(error));
    }
}

export default matchService;

