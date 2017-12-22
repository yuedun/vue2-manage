module.exports = function (app) {
    //登录
    app.post('/admin/login', function (req, res) {
        console.log(">>>>>>>>>");
        
        res.json({
            status: 1
        })
    });
    app.get('/admin/info', function (req, res) {
        console.log(">>>>>>>>>");
        
        res.json({})
    });
    app.get('/admin/singout', function (req, res) {
        res.json({status:1})
    });

    app.get('/users/list', function (req, res) {
        res.json([])
    });
}