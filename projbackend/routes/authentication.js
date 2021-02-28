const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/authentication");

router.post("/signup", [
    check("name", "Name Should be atleast 3 chars").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "Password Should be atleast 3 chars").isLength({ min: 3 })
], signup);

router.post("/signin", [
    check("email", "email is required").isEmail(),
    check("password", "Password field is required").isLength({ min: 1 })
], signin);

router.get("/signout", signout);

module.exports = router;