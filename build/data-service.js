module.exports = function (app) {
    console.log("appsevice");
    
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
        res.json([{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        }])
    });
    app.get('/statis/api/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/users/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/admin/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/bos/orders/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/statis/api/:date/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/statis/user/:date/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/statis/order/:date/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/statis/admin/:date/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    app.get('/statis/api/:date/count', function (req, res) {
        var date = req.params.date;
        res.json({
            count: 12
        })
    });
    
}