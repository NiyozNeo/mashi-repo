const express = require("express");

const Reg = require("./reg/reg");
const Check = require("./check/check");
const Clinics = require("./Clinics/clinics");
const Login = require("./Login/Login");
const AdminReg = require("./AdminReg/AdminReg");
const AdminUsers = require("./Admin/Users/Users");
const Categories = require("./Categories/Categories");
const Queue = require("./Queue/Queue");
const Verify = require("./Admin/Verify/Verify");
const Delete = require("./Admin/Delete/Delete");
const router = express.Router();

router
  .post("/reg", Reg.REGISTER)
  .post("/check", Check.CHECK)
  .get("/clinics", Clinics.Clinics)
  .post("/login", Login.Login)
  .post("/adminreg", AdminReg.REGISTER)
  .get("/admin/users", AdminUsers.Clinics)
  .post("/categories", Categories.Clinics)
  .post("/queues", Queue.post)
  .get("/queues", Queue.get)
  .post("/update", Verify.post)
  .post("/delete", Delete.post);

module.exports = router;
