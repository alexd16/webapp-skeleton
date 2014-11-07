module.exports = {
  routes: function(router) {
    router.get('/users', function(req, res) {
      res.json({ message: 'Users'});
    });
  }
};