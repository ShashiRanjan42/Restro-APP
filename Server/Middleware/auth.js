// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   // Extract token from the 'Authorization' header and remove 'Bearer '
//   const authHeader = req.header('Authorization');
//   const token = authHeader && authHeader.replace('Bearer ', '');

//   console.log("Auth Header:", authHeader); // Debugging the Authorization header
//   console.log("Extracted Token:", token); // Debugging the token

//   if (!token) {
//     return res.status(401).json({ success: false, msg: 'No token provided' });
//   }

//   try {
//     // Verify and decode the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is set in env
//     req.user = decoded; // Attaches user data (including role) to req.user
//     next(); // Proceeds to the next middleware
//   } catch (error) {
//     console.error("Token verification error:", error); // Logging the token error
//     if (error.name === 'TokenExpiredError') {
//       return res.status(403).json({ success: false, msg: 'Token expired, please log in again' });
//     }
//     return res.status(403).json({ success: false, msg: 'Invalid token' });
//   }
// };

// module.exports = authenticateToken;




const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const authHeader = req.header('Authorization');
  console.log(token);
  console.log(authHeader);

  if (!token) {
    return res.status(401).json({ success: false, msg: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decodes JWT token
    req.user = decoded; // Attaches user data to req.user
    next(); // Proceeds to next middleware
  } catch (error) {
    return res.status(401).json({ success: false, msg: 'Invalid token' });
  }
};

module.exports = authenticateToken;
