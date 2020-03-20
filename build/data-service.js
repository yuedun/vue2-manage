
const got = require('got');
const cookie = require('cookie');
/**
 * 提供api服务
 */
module.exports = function (app) {
    const instance = got.extend({
        prefixUrl: 'http://localhost:3004',
        hooks: {
            beforeRequest: [
                options => {
                    if (!options.context && !options.context.token) {
                        throw new Error('Token required');
                    }
                    options.headers.cookie = options.context.token;
                }
            ],
            afterResponse: [
                (response, retryWithMergedOptions) => {
                    console.log("<<", JSON.stringify(response.body));

                    // No changes otherwise
                    return response;
                }
            ],
        }
    });
    //登录
    app.post('/users/login', async (req, res) => {
        try {
            const response = await got.post('http://localhost:3004/users/login', {
                // searchParams: args,
                responseType: 'json'
            });
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
    app.get('/users/info', function (req, res) {
        res.json({ status: 1, data: { username: "yuedun", avatar: 'default.jpg' } })
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
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token)
        }
        try {
            const response = await instance.get('api/website', {
                searchParams: args,
                context,
                responseType: 'json'
            });
            res.send(response.body.data)
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });
    app.post('/api/website/update', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token)
        }
        try {
            const body = await instance.post('api/website/update', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });
    app.post('/api/website/create', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token)
        }
        try {
            const body = await instance.post('api/website/create', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });
    app.get('/api/website/delete/:id', async function (req, res) {
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token)
        }
        try {
            const body = await instance.get('api/website/delete/' + req.params.id, {
                // json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    });

}