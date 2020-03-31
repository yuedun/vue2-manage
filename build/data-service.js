
const got = require('got');
const cookie = require('cookie');
/**
 * 提供api服务
 */
module.exports = function (app) {
    const instance = got.extend({
        prefixUrl: 'http://localhost:8900',
        hooks: {
            beforeRequest: [
                options => {
                    if (!options.context && !options.context.token) {
                        throw new Error('Token required');
                    }

                    options.headers["Authorization"] = "Bearer " + options.context.jwt;
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
    app.post('/api/user/login', async (req, res) => {
        try {
            var args = req.body;
            const response = await got.post('http://localhost:8900/user/login', {
                json: args,
                responseType: 'json'
            });
            console.log(response.body);

            res.cookie('token', response.body.token, { expires: new Date(response.body.expire) });
            res.send({
                status: 1,
                token: response.body.token
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    // 登出
    app.get('/api/user/logout', async function (req, res) {
        const response = await got.get('http://localhost:8900/user/logout', {
            responseType: 'json'
        });
        console.log(response.body);

        res.clearCookie('token');
        res.json({ status: 1 })
    });

    app.get('/api/website', async function (req, res) {
        var args = req.query;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const response = await instance.get('website', {
                searchParams: args,
                context,
                responseType: 'json'
            });
            res.send(response.body.data)
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    app.put('/api/website/update', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.put('website/update', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    app.post('/api/website/create', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.post('website/create', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });
    app.delete('/api/website/delete/:id', async function (req, res) {
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.delete('website/delete/' + req.params.id, {
                // json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    app.get('/api/component', async function (req, res) {
        var args = req.query;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const response = await instance.get('component', {
                searchParams: args,
                context,
                responseType: 'json'
            });
            res.send(response.body.data)
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    app.put('/api/component/update', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.put('component/update', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });

    app.post('/api/component/create', async function (req, res) {
        var args = req.body;
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.post('component/create', {
                json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });
    app.delete('/api/component/delete/:id', async function (req, res) {
        const token = req.cookies.token;
        const context = {
            token: cookie.serialize('token', token),
            jwt: token
        }
        try {
            const body = await instance.delete('component/delete/' + req.params.id, {
                // json: args,
                responseType: 'json',
                context
            }).json();
            res.send({
                status: 1
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 0
            })
        }
    });
    app.get('/users/info', function (req, res) {
        res.json({ status: 1, data: { username: "yuedun", avatar: 'default.jpg' } })
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
}