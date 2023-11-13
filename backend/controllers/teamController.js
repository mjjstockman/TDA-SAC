const { Team } = require("../models/team");
const { User } = require("../models/user"); // Import the User model

exports.createTeam = async (req, res, next) => {
  const { name } = req.body;
  const today = new Date();
  const managerUser = await User.findOne({ role: User.email });

  try {
    const team = new Team({
      name,
      manager: managerUser,
      date: today,
      active: true,
    });

    await team.save();

    res.status(201).send({
      message: "Team created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.updateTeam = async (req, res, next) => {
  const usersArr = [];
  const teamMembersArr = [];
  const teamName = User.team.value;

  try {
    const users = await User.find({ teamName });

    for (let i = 0; i < users.length; i++) {
      const currentUser = users[i];

      usersArr.push(currentUser);

      if (currentUser.teamName === teamName) {
        teamMembersArr.push(currentUser);
      }
    }

    try {
        const team = Team({
            members : teamMembersArr,
        });
    
        await team.save();
    
        res.status(201).send({
          message: "Team updated",
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "Internal Server Error",
        });
      }

  } catch (err) {
    console.log(err);
  }
};
