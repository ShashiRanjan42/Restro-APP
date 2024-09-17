const isAdmin = (req, res, next) => {
  // Check if the user is authenticated and has the role of 'admin'
  if (!req.user) {
    return res.status(401).json({ success: false, msg: 'User not authenticated' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, msg: 'Access denied. Admins only' });
  }

  next(); // Proceeds if the user is an admin
};

module.exports = isAdmin;
