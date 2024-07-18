import Router from "express";
const router = new Router();

router.get('/',
    function(req, res, next) {
      res.render('users', {title: 'Users page', active: 'users'},);
    }
);

export default router;
