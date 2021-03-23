import axios from 'axios';

const API_URL = 'http://localhost:4545/ticketsystem/teams/'


const teamService = {
    getTeams(){
        // returns promise
        return axios({
            method: 'get',
            url: API_URL,
            headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))}
        }).then(response => {
            return response.data;
        }).catch(error => console.log(error))
    },

    getTeamById(teamID){
        let teamIDint = parseInt(teamID);
        return axios({
            method: 'get',
            url: API_URL + teamIDint,
            headers: { Authorization: 'Bearer ' + (JSON.parse(localStorage.getItem('user')))}
        }).then(response => {
            console.log(response.data)
            return response.data;
        }).catch(error => console.log(error));
    },

    saveTeam(team){
        return axios({
            method: 'POST',
            url: API_URL,
            headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))},
            data: team
        }).then(response => {
            console.log(response)
            return true;
        }).catch(error => {
            console.log(error);
            return false;
        })
    },
    editTeam(team){
        return axios({
            method: 'PUT',
            url: API_URL,
            headers:{ Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))},
            data: team
        }).then(response => {
            console.log(response)
            return true;
        }).catch(error => {
            console.log(error)
            return false;
        })
    },
    deleteTeam(team){
        return axios({
            method: 'DELETE',
            url: API_URL + team.ID,
            headers:{ Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))},
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default teamService;

