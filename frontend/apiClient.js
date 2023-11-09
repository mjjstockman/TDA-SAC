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

  async login(username, password) {
    console.log(username, password);
  }
  
  // for User to update own info
  updateUser(id, name, username, forename, surname, icon) {
    return this.authenticatedCall("put", `${url}${id}`, {
      name,
      username,
      forename,
      surname,
      icon,
    });
  }
}
