const user = require("../models/user.model");

const findAll = async (req, res) => {
  try {
    const users = await user.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    })
  }
}

const singup = async (req, res) => {
  try {

    const u = new user(req.body);
    u.hashPassword(req.body.password);
    return res.json(await user.create(u));
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    });
  }
}

const findOne = async (req, res) => {
  return res.json(Promise.resolve({ uno: "uno" }));
}

module.exports = { findAll, findOne, singup };