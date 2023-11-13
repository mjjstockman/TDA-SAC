import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((err) => {
      console.log(err);
    });
  }

  getUsers() {
    return this.authenticatedCall("get", `${url}users`);
  }

  getTeams() {
    return this.authenticatedCall("get", `${url}teams`);
  }

  //   removeAd(id) {
  //     return this.authenticatedCall("delete", `${url}${id}`);
  //   }

  //For admin to add users to database
  register(email, password, role, team, date, active) {
    return this.authenticatedCall("post", `${url}user/register`, {
      email,
      password,
      role,
      team,
      date,
      active,
    });
  }

  //Automatically create teams from users
  createTeam(name, manager, date, active) {
    return this.authenticatedCall("post", `${url}team/create`, {
      name,
      manager,
      date,
      active,
    });
  }
  //Automatically update teams from users
  updateTeam(manager, members, active) {
    return this.authenticatedCall("post", `${url}team/update`, {
      manager,
      members,
      active,
    });
  }
  

  async login(username, password) {
    console.log(username, password);
  }

  removeUser(_id) {
    return this.authenticatedCall("delete", `${url}${_id}`);
  }

  // for User to update own info
  updateUser(_id, name, username, forename, surname, icon) {
    return this.authenticatedCall("put", `${url}${_id}`, {
      name,
      username,
      forename,
      surname,
      icon,
    });
  }
}
