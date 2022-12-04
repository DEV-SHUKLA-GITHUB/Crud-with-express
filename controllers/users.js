import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  console.log(`User [${user.username}] added to the database.`);
  res.send(`User ${user.firstname} added to the database.`);
};

export const getUser = (req, res) => {
  res.send(req.params.id);
};

export const deleteUser = (req, res) => {
  console.log(`user with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== req.params.id);
  res.send(`user with id ${req.params.id} has been deleted`);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.age = req.body.age;

  console.log(`user with ${user.id} has been updated`);
  res.send(`user with ${user.id} has been updated `);
};
