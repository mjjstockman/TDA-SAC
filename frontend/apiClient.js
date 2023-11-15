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

  async login(username, password) {
    console.log(username, password);
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }

  getUsers() {
    return this.authenticatedCall("get", `${url}users`);
  }

  getTeams() {
    return this.authenticatedCall("get", `${url}teams`);
  }

  getSicks() {
    return this.authenticatedCall("get", `${url}sicks`);
  }

  existingTeams(id) {
    return this.authenticatedCall("get", `${url}teams/${id}`);
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

  //For user to add sick leave to database
  addSickLeave(title, userid, email, colour, note) {
    return this.authenticatedCall("post", `${url}sick/register`, {
      title,
      userid,
      email,
      colour,
      note,
    });
  }

  //For user to add anunal leave to database
  addAnnualLeave(title, userid, email, startDate, endDate, colour, note) {
    return this.authenticatedCall("post", `${url}holiday/register`, {
      title,
      userid,
      email,
      startDate,
      endDate,
      colour,
      note,
    });
  }

  //For admin to add teams to database
  registerTeam(name, manager, members, date, active) {
    return this.authenticatedCall("post", `${url}team/register`, {
      name,
      manager,
      members,
      date,
      active,
    });
  }

  updateTeam(id, name, manager, members, date, active) {
    return this.authenticatedCall("put", `${url}team/update/${id}`, {
      name,
      manager,
      members,
      date,
      active,
    });
  }

  removeTeam(id) {
    return this.authenticatedCall("delete", `${url}team/delete/${id}`);
  }

  async login(username, password) {
    console.log(username, password);
  }

  removeUser(id) {
    return this.authenticatedCall("delete", `${url}user/delete/${id}`);
  }

  changeUserStatus(id, active) {
    return this.authenticatedCall("put", `${url}user/status/${id}`, {
      active,
    });
  }

  // for User to update own info
  updateUser(id, name, username, forename, surname, icon) {
    return this.authenticatedCall("put", `${url}user/update/${id}`, {
      name,
      username,
      forename,
      surname,
      icon,
    });
  }
}
