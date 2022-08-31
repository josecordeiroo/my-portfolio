const jwt = require("jsonwebtoken");

const project_id = process.env.USERFRONT_PROJECT_ID;
const secret_base64 = process.env.JWT_SECRET;
const secret = Buffer.from(secret_base64, "base64");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, secret);
    console.log(user);
    if (user.authorization[project_id].roles.includes("admin")) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
