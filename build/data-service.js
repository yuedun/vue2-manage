
const got = require('got');
/**
 * 提供api服务
 */
module.exports = function (app) {
    //登录
    app.post('/admin/login', async (req, res) => {
        try {
            const response = await got.get('http://localhost:3004/user/login', {
                // searchParams: args,
                responseType: 'json'
            });
            console.log(response.body);
            res.cookie('token', response.body.data);
            res.send({
                status: 1,
                token: response.body.data
            })
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });
    app.get('/admin/info', function (req, res) {
        res.json({ username: "yuedun" })
    });
    app.get('/admin/singout', function (req, res) {
        res.json({ status: 1 })
    });

    app.get('/users/list', function (req, res) {
        let list = [{
            username: "叶良辰",
            registe_time: "2018-01-30 14:23:45",
            city: "上海"
        }, {
            username: "辰月",
            registe_time: "2018-01-30 14:23:46",
            city: "上海"
        }, {
            username: "月儿",
            registe_time: "2018-01-30 14:23:47",
            city: "上海"
        }, {
            username: "尔克",
            registe_time: "2018-01-30 14:23:48",
            city: "上海"
        }, {
            username: "克勤",
            registe_time: "2018-01-30 14:23:49",
            city: "上海"
        }, {
            username: "秦敏丽",
            registe_time: "2018-01-30 14:23:50",
            city: "上海"
        }, {
            username: "李子茹",
            registe_time: "2018-01-30 14:23:51",
            city: "上海"
        }, {
            username: "茹成娣",
            registe_time: "2018-01-30 14:23:52",
            city: "上海"
        }];
        const offset = req.query.offset;
        const limit = req.query.limit * ((req.query.offset / req.query.limit) + 1);
        let results = list.slice(offset, limit);
        res.json(results);
    });
    app.get('/users/count', function (req, res) {
        res.json({
            status: 1,
            count: 8
        })
    });
    app.get('/statis/api/count', function (req, res) {
        res.json({
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
    app.get('/api/website', async function (req, res) {
        var args = req.query;
        try {
            const response = await got.get('http://localhost:3004/api/website', {
                searchParams: args,
                headers: {
                    'Cookie': 'sdf'
                },
                responseType: 'json'
            });
            console.log(response.body);
            res.send(response.body.data)
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });

}