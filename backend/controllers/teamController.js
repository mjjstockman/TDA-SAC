const { Team } = require("../models/team");

exports.register = async (req, res, next) => {
  const { name, manager } = req.body;
  const today = new Date();

  try {
    const team = new Team({
      name,
      manager,
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

exports.update = async (req, res, next) => {
  const { manager, members } = req.body;
  const { name } = req.params;

  try {
    const team = await Team.findOne({ name });

    if (!team) {
      return next(createError(404, "Team not found"));
    }


    team.manager = manager;
    team.members = members;

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
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(createError(400, "Bad Request"));
    }

    const removeTeam = await Team.findByIdAndDelete(id);

    // Check if the user was found and deleted
    if (!removeTeam) {
      return res.status(404).send({
        message: "Team not found",
      });
    }

    res.send({
      message: "Team deleted",
    });
  } catch (err) {
    console.error(err);
    return next(createError(500, "Internal Server Error"));
  }
};