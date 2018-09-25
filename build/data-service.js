module.exports = function (app) {
    //登录
    app.post('/admin/login', function (req, res) {
        res.json({
            status: 1
        })
    });
    app.get('/admin/info', function (req, res) {
        res.json({username:"yuedun"})
    });
    app.get('/admin/singout', function (req, res) {
        res.json({status:1})
    });

    app.get('/users/list', function (req, res) {
        res.json([{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        },{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        },{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        },{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        }])
    });
    app.get('/statis/api/count', function (req, res) {
        console.log("/statis/api/count");
        
        res.json({
            count: 12
        })
    });
    app.get('/users/count', function (req, res) {
        res.json({
            status: 1,
            count: 12
        })
    });
    app.get('/admin/count', function (req, res) {
        console.log("/admin/count");
        res.json({
            count: 12
        })
    });
    app.get('/bos/orders/count', function (req, res) {
        console.log("/bos/orders/count");
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
    app.get('/shopping/addShop', function (req, res) {
        var date = req.params.date;
        res.json({
            status: 1
        })
    });
    app.get('/cities', function (req, res) {
        var date = req.params.date;
        res.json({
            id: 1
        })
    });
    app.get('/pois', function (req, res) {
        var date = req.params.date;
        res.json({
            address: "上海"
        })
    });
    
}