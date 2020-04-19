<template>
	<div class="section-two">
		<div class="width-visual con-box">
			<ul class="clearfix font18">
				<li class="col_6">
					<div class="video-box teachers-btn"><img class="w100" src="../assets/YUEDUN_files/section2_ac2e7a98.png">
						<div class="mask"><img class="play-btn teachers-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAq1BMVEUAAAD7+/v7+/v////7+/v7+/v7+/v7+/v6+vr7+/v7+/v6+vr7+/v8/Pz8/Pz7+/v7+/v9/f3////////7+/v7+/v6+vr6+vr7+/v7+/v7+/v7+/v////////////////////////////7+/v6+vr4VBX68/D62s75nXn4Vhf5sZb4XB/66OH5x7P5dkT5iF35dEH4Zi75h1v67Ob5vaX5pIT4Zy/5x7T5xK+IiufAAAAAJHRSTlMA+8QF9uuH5Niyq6GYXk1IQjEfC7ju39KEgnQ7LSsoJhsTEblYhPSaAAADpElEQVR42szXi3aTQBDG8dldbiEEEsi9aW791tZWWz3W+v5vpkc93dbEBIYB8nuCPcN/YaA6zCZdJvFYz6a+Uv50psdxskw3hjpQZEEvUjhKRb0gK6g9ZrjQCmcovRgaakExGHsoyRsPCmrWsO+hEq8/pMbkQQiGMMipCeu+ApPqr0naKEYt8Uj2OD3U1pM70j6BiGRPIgY+hPgDqm+lIUivqB4zVxCl5oZq2GqI01tiy3w0wM+IxwRoSGCIYafRGL2jyvIIDYpyqug6RKPCa6rkaoKGTa6ogtRD47y0wnkUWqDS0s/LQyu8q5I9T9CSSamy8xCtCXM6axehRdGOzjAardKGTgvQsoBOytC6jE7Y+midv72cgM5mNEcn5vQfK4VOqBUdp9ERTUcN0JkBHbH30Rl/T4cSdCihAyN0akT/6qFTvQsb0OGIYnQspnfW6Nya3uqjc316I1fonMrJCXABAnJCXICQXg1xEYY1k769v3v+ADku68IDw3f7y8tnyPGKOnvHs/3j6ROEuC1kDIZH+9fDPaSM6TfjgeHBvnq8hQzP1Lhj9o2PdwJxu3u2AId95+UHJCxq7PbWEYnbbfuFAod15OJWBf933jqCcWf8D6t1BOMO+Mu0PYr/5nardQQW6wjGHREZBRbrCMatDG3AYx3JuDeUgsc6knGntASPPekrN+4lJeCxjmTcCcXgsY5k3DHdgMc6knHfkAaPdSTj1jQDjy3lyzdUM6MpeGw5T6hmSj54bEkVR+STAo8tqWLY6iez1pKCMBTEtFZR6w8sim7cFLQbKWKh9z9Z6WrWTSaQnKD05b2ZfNQf1M78Q0vgyKQcWotJ/Z1772/AtZe+Q3flw9gBL3UB6GjpLKtlw/WHTfs9sH5I96EDsKBJN8anYIUNMgM40Ut+sqR+wTIomcwhg3ihyJM5sAWktFTb73LMhiAzi02CHZNqfp5xwyqXzGFY8ZZekJlHAZieUhf2QdjCrcCnbi6Ecd4JnPxyRUQL/yBzGmqq9NEHmbNwpOKp5t1/htS8rLwaZdITKt+I0y4E9ovJ7YoEDrSuvMsodnUdv0KTXeVrYVeKs6sNjs3cMQ0AAAzDMDDlz3HnpL59zCOxF1Zy6akX53r5Mhd4ewk8Nwl4G4U3mngrDjcreTuXN7x5S6A3TXpbqTfeemuyN297e7sHAHhEAohIeMyGB5GAVAuI2XjcDwgigWQUiGqB7JgIs4F0nYj7FX+Y5w+z84cH2SHql0vTz3MAAAAASUVORK5CYII="><img class="play-hover" id="homeOneVideo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAqFBMVEUAAAD5VBX4VBX5VRb6VRb/dzP5VRb5VRb5VBX4VRb4VRX5VBX5VRb5Vhb4VBb7Vhf6VRf5WBr/VRj/XRf4VRb4VRb5VRb5VRb5VRX5VBb5VBb4Vhb6VRX6VRb7Vhb5VRf5WRj/VRz/Xhv/Wh74VBb4VBX////+/Pz93dH5dUH4ZS38yrb7tJj4XCD+9/T7n3v+7OX6iV36iFz+6+T7rI36k2v92Mr6i2GXenkhAAAAJXRSTlMA+8OGSgX59u3r5NiroZhCMScfC7jf0sW0sYJ0YF07LSsbExG5iz9g/wAAA6NJREFUeNrM14lS2zAQxvGV7ytOHOc+ScInoFDotKXv/2idKS2iEBJ7vbbyewLN+q9ZmZrwC2+ZZ6PpZBwFQTSeTEdZvvQKnywoPXeeBjgqSOeuV1J3/P7CCXBG4Cz6nYyqXI9CVBSO1m0Pqt8LUUvY61Nrhm4ChsQdUhuKngKT6hUkbZApNKCygexxZmhsJnekQ64gQOUHErGKISReUXNbB4KcLTXjuwqilOtTAzsH4pwdsXkxWhB77M+FlvA+295Ba5w9Y3GlaFE6pJquErQquaJaNhFaFm2oBi9E60KvxnkUOqAqn2gTohPhpmLPEToSVSp7mKAzyZDO2qfoULqnM3wHnXJ8Os1Fx1w6yUPnPDphF6Nz8e5yAvqX0eUEdCajrYIVakvHObDEoaNWsGZFRxxiWBMf6KMcFuX0wUDBIjWg92awavZhQLDs/YgyWJbRfwoFy1RBb/VgXY/eGFofEKCG9rfq5zs2wQVI6FUfF6HfMOm7p4fnr5Bjsi5DMPy80Vr/+A45YUkv1mB41i/uv0DMml6MwPBL//X4BCkj+sMPwfCoX93eQUboN7hj+o2bB4G4zT1bgEMbcnEvGrzttSESt3ntlwE4tCEXd1Dyf+e1IRi3x1+s2hCJ2yzYOVi0IRj3nIhSsGhDMO6UyA/Aog3BuAOfCvBoQzLugjzwaEMybo+W4NEnfePGvaQcPNqQjDunDDzakIw7o2vwaEMy7muagkcbknFPaQIeXclt3ZImNAaPruYe9YwpAo+u5qbmiCIKwKMrqhl28LuZs1lBEIiiMJSOQVmEVlS0c8igRYHQ+79ZuBpwp+cMfPcJRK8z954/7YH8byhon8zfQ5vMTd3P/e9P2m/vP4fO2sHoP6kv8/bo/HdZq12u/tt+l2n8+HzjstprA5p/YrxrI6x/pi7kId+8Uh+lNci/l4XStSimZpZqq63S/t3+qoENfvRjbYBjrOBnIQFWfgQtNDKkl5rZUSsN9PSjsDcBFn76mjnVQQDO+wxIflUK1EIOrqNVyJc4pGZ21UOip+JreP+sXG3VgDjpsWouxYkjgXk0OU5IQGjrmi1Gwcl1eIImnOSLJ4rDyQZ5wkqc9JQnzuXJl3ECb54EHmcS4NkoeEYTnhUHZ1bi2bl4hjeeJZBnmuTZSnnGW541mWfe5tnbeQEAvIgEYIgEL2aDF0QCjGoBhtnw4n6AgUjAyChgqBYwdowYzAaMriOG+03iD7sUf9jp8Yd/hG0n0w8A1sQAAAAASUVORK5CYII=" alt="刘涛倾力推荐" data-video="https://video.vipkid.com.cn/1565341346629-vipkid-liutao.mp4">
						</div>
					</div>
				</li>
				<li class="col_6">
					<div class="detail"><img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAmVBMVEUAAAD/yBj/xhf/yBf/xxf/5jj/xxb/xxb/xxb/xhf/yhv/1R7/xxf/yBf/xxb/yBb/xxf/xxb/xxf/xxf/0iX/xxf/xxb/xhb/xxb/xxf/xxb/yBf/xxf/yBf/yRn/yhr/0Rn/xxb/xxb/yBb/xxj/yBj/yBj/xxb/xxb/xxb/yRb/xxf/xhb/xhf/xxf/xxf/yBf/yxr/xhb0h+/EAAAAMnRSTlMAH6aGugT68+/qGQjIWX9P4NyceA332NKhe3FqYzYzIhStlIxUSD7lwrdDLMyxqL5hJ7hZXSwAAAJ3SURBVGje7ZbbctpAEEQRRlcE4iYkMBhsxcZcgp35/49LUi4qRurRtvY1e55b1audnZ7pGdhXzz1bsvSJEyZVKJJZmlxEUkY4XIXyh+nQwmSbyl8+zcofE/li3NkkKeWLeGFQegO5kXsdXR5DufHSrtxE8g/wCkwHvBGc297XUe547fF8hvKd95b6HeSepc+aDGdSY6RebSB15uyFpVLnoLyCF2kSJpTLUyxNHpDSvwriyricQgEEv5rKxUAwb0Sj5QIZNCv4IQqFb0yXQCDNuPJ/isradGO5aExqcVWKTrRvDzFYFxhXK2lhuW1NsYPoBNV36avoTEettfHTFpPZXSbuIv1yN4YHMNNNyh17oMo3PWX9qm8D1FiY2Bic+1gUynrSnAPBHM058yyYqBmbqfoWjWTahTXH4UgwK7OLP1VckmbITLR/MbNWWgBc9tzeZR9hFw/MvFgQeF+gXmjkoXmJQxksaOwJR6iIsDIBWE3ZE/bVJrac/0sYTnD+HwXwTrm88aM2gQGAr0zPTOP6OMcDnGEY8ScsuP+mq3rEgw9XhqLkT7gRALk1x+iEfIxPOJct7kxIiGPGNmgCvAGdBXDibNBa99GjSxP59qVZ8w125Vx2AthhbUFXkRq5haLN4YkoxtJkhqUekOY9jj5fmhOQXkibC+prfiyVpA3KTQ9LH+BAo1igVugwMDL795x2aOSzfaL1FW0K75ci6xCGaDMFCwMbU5WiPQAtmWiPHfbU2L4717A76WkTAxm7qmwUbQC2bNJm3CF0gTQcNJmTnV2AbxNkg+lDGw7P2TgbZ+NsnI2zcTbOxtk4G2fjbJyNs3E2/7PNb5ffIRjZXgSoAAAAAElFTkSuQmCC">
						<el-popover placement="right" width="400" trigger="click" v-model="visible">
							<el-input v-model="component.elements[0].title_1" class="input-with-select">
								<el-button slot="append" icon="el-icon-success" @click="getData"></el-button>
							</el-input>
							<h4 class="font32 color-main" slot="reference">{{component.elements[0].title_1}}</h4>
						</el-popover>
						<p class="font16 color-lgray">{{component.elements[0].description}}</p>
					</div>
				</li>
			</ul>
			<ul class="clearfix font18">
				<li class="col_6">
					<div class="detail2"><img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAmVBMVEUAAAD/yBj/xhf/yBf/xxf/5jj/xxb/xxb/xxb/xhf/yhv/1R7/xxf/yBf/xxb/yBb/xxf/xxb/xxf/xxf/0iX/xxf/xxb/xhb/xxb/xxf/xxb/yBf/xxf/yBf/yRn/yhr/0Rn/xxb/xxb/yBb/xxj/yBj/yBj/xxb/xxb/xxb/yRb/xxf/xhb/xhf/xxf/xxf/yBf/yxr/xhb0h+/EAAAAMnRSTlMAH6aGugT68+/qGQjIWX9P4NyceA332NKhe3FqYzYzIhStlIxUSD7lwrdDLMyxqL5hJ7hZXSwAAAJ3SURBVGje7ZbbctpAEEQRRlcE4iYkMBhsxcZcgp35/49LUi4qRurRtvY1e55b1audnZ7pGdhXzz1bsvSJEyZVKJJZmlxEUkY4XIXyh+nQwmSbyl8+zcofE/li3NkkKeWLeGFQegO5kXsdXR5DufHSrtxE8g/wCkwHvBGc297XUe547fF8hvKd95b6HeSepc+aDGdSY6RebSB15uyFpVLnoLyCF2kSJpTLUyxNHpDSvwriyricQgEEv5rKxUAwb0Sj5QIZNCv4IQqFb0yXQCDNuPJ/isradGO5aExqcVWKTrRvDzFYFxhXK2lhuW1NsYPoBNV36avoTEettfHTFpPZXSbuIv1yN4YHMNNNyh17oMo3PWX9qm8D1FiY2Bic+1gUynrSnAPBHM058yyYqBmbqfoWjWTahTXH4UgwK7OLP1VckmbITLR/MbNWWgBc9tzeZR9hFw/MvFgQeF+gXmjkoXmJQxksaOwJR6iIsDIBWE3ZE/bVJrac/0sYTnD+HwXwTrm88aM2gQGAr0zPTOP6OMcDnGEY8ScsuP+mq3rEgw9XhqLkT7gRALk1x+iEfIxPOJct7kxIiGPGNmgCvAGdBXDibNBa99GjSxP59qVZ8w125Vx2AthhbUFXkRq5haLN4YkoxtJkhqUekOY9jj5fmhOQXkibC+prfiyVpA3KTQ9LH+BAo1igVugwMDL795x2aOSzfaL1FW0K75ci6xCGaDMFCwMbU5WiPQAtmWiPHfbU2L4717A76WkTAxm7qmwUbQC2bNJm3CF0gTQcNJmTnV2AbxNkg+lDGw7P2TgbZ+NsnI2zcTbOxtk4G2fjbJyNs3E2/7PNb5ffIRjZXgSoAAAAAElFTkSuQmCC">
						<h4 class="font32 color-main">{{component.elements[1].title_1}}</h4>
						<p class="font16 color-lgray">{{component.elements[0].description}}</p>
					</div>
				</li>
				<li class="col_6">
					<div class="video-box liutao-btn"><img class="w100" src="../assets/YUEDUN_files/section1_5724d821.png">
						<div class="mask"><img class="play-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAq1BMVEUAAAD7+/v7+/v////7+/v7+/v7+/v7+/v6+vr7+/v7+/v6+vr7+/v8/Pz8/Pz7+/v7+/v9/f3////////7+/v7+/v6+vr6+vr7+/v7+/v7+/v7+/v////////////////////////////7+/v6+vr4VBX68/D62s75nXn4Vhf5sZb4XB/66OH5x7P5dkT5iF35dEH4Zi75h1v67Ob5vaX5pIT4Zy/5x7T5xK+IiufAAAAAJHRSTlMA+8QF9uuH5Niyq6GYXk1IQjEfC7ju39KEgnQ7LSsoJhsTEblYhPSaAAADpElEQVR42szXi3aTQBDG8dldbiEEEsi9aW791tZWWz3W+v5vpkc93dbEBIYB8nuCPcN/YaA6zCZdJvFYz6a+Uv50psdxskw3hjpQZEEvUjhKRb0gK6g9ZrjQCmcovRgaakExGHsoyRsPCmrWsO+hEq8/pMbkQQiGMMipCeu+ApPqr0naKEYt8Uj2OD3U1pM70j6BiGRPIgY+hPgDqm+lIUivqB4zVxCl5oZq2GqI01tiy3w0wM+IxwRoSGCIYafRGL2jyvIIDYpyqug6RKPCa6rkaoKGTa6ogtRD47y0wnkUWqDS0s/LQyu8q5I9T9CSSamy8xCtCXM6axehRdGOzjAardKGTgvQsoBOytC6jE7Y+midv72cgM5mNEcn5vQfK4VOqBUdp9ERTUcN0JkBHbH30Rl/T4cSdCihAyN0akT/6qFTvQsb0OGIYnQspnfW6Nya3uqjc316I1fonMrJCXABAnJCXICQXg1xEYY1k769v3v+ADku68IDw3f7y8tnyPGKOnvHs/3j6ROEuC1kDIZH+9fDPaSM6TfjgeHBvnq8hQzP1Lhj9o2PdwJxu3u2AId95+UHJCxq7PbWEYnbbfuFAod15OJWBf933jqCcWf8D6t1BOMO+Mu0PYr/5nardQQW6wjGHREZBRbrCMatDG3AYx3JuDeUgsc6knGntASPPekrN+4lJeCxjmTcCcXgsY5k3DHdgMc6knHfkAaPdSTj1jQDjy3lyzdUM6MpeGw5T6hmSj54bEkVR+STAo8tqWLY6iez1pKCMBTEtFZR6w8sim7cFLQbKWKh9z9Z6WrWTSaQnKD05b2ZfNQf1M78Q0vgyKQcWotJ/Z1772/AtZe+Q3flw9gBL3UB6GjpLKtlw/WHTfs9sH5I96EDsKBJN8anYIUNMgM40Ut+sqR+wTIomcwhg3ihyJM5sAWktFTb73LMhiAzi02CHZNqfp5xwyqXzGFY8ZZekJlHAZieUhf2QdjCrcCnbi6Ecd4JnPxyRUQL/yBzGmqq9NEHmbNwpOKp5t1/htS8rLwaZdITKt+I0y4E9ovJ7YoEDrSuvMsodnUdv0KTXeVrYVeKs6sNjs3cMQ0AAAzDMDDlz3HnpL59zCOxF1Zy6akX53r5Mhd4ewk8Nwl4G4U3mngrDjcreTuXN7x5S6A3TXpbqTfeemuyN297e7sHAHhEAohIeMyGB5GAVAuI2XjcDwgigWQUiGqB7JgIs4F0nYj7FX+Y5w+z84cH2SHql0vTz3MAAAAASUVORK5CYII="><img class="play-hover" id="homeTwoVideo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAqFBMVEUAAAD5VBX4VBX5VRb6VRb/dzP5VRb5VRb5VBX4VRb4VRX5VBX5VRb5Vhb4VBb7Vhf6VRf5WBr/VRj/XRf4VRb4VRb5VRb5VRb5VRX5VBb5VBb4Vhb6VRX6VRb7Vhb5VRf5WRj/VRz/Xhv/Wh74VBb4VBX////+/Pz93dH5dUH4ZS38yrb7tJj4XCD+9/T7n3v+7OX6iV36iFz+6+T7rI36k2v92Mr6i2GXenkhAAAAJXRSTlMA+8OGSgX59u3r5NiroZhCMScfC7jf0sW0sYJ0YF07LSsbExG5iz9g/wAAA6NJREFUeNrM14lS2zAQxvGV7ytOHOc+ScInoFDotKXv/2idKS2iEBJ7vbbyewLN+q9ZmZrwC2+ZZ6PpZBwFQTSeTEdZvvQKnywoPXeeBjgqSOeuV1J3/P7CCXBG4Cz6nYyqXI9CVBSO1m0Pqt8LUUvY61Nrhm4ChsQdUhuKngKT6hUkbZApNKCygexxZmhsJnekQ64gQOUHErGKISReUXNbB4KcLTXjuwqilOtTAzsH4pwdsXkxWhB77M+FlvA+295Ba5w9Y3GlaFE6pJquErQquaJaNhFaFm2oBi9E60KvxnkUOqAqn2gTohPhpmLPEToSVSp7mKAzyZDO2qfoULqnM3wHnXJ8Os1Fx1w6yUPnPDphF6Nz8e5yAvqX0eUEdCajrYIVakvHObDEoaNWsGZFRxxiWBMf6KMcFuX0wUDBIjWg92awavZhQLDs/YgyWJbRfwoFy1RBb/VgXY/eGFofEKCG9rfq5zs2wQVI6FUfF6HfMOm7p4fnr5Bjsi5DMPy80Vr/+A45YUkv1mB41i/uv0DMml6MwPBL//X4BCkj+sMPwfCoX93eQUboN7hj+o2bB4G4zT1bgEMbcnEvGrzttSESt3ntlwE4tCEXd1Dyf+e1IRi3x1+s2hCJ2yzYOVi0IRj3nIhSsGhDMO6UyA/Aog3BuAOfCvBoQzLugjzwaEMybo+W4NEnfePGvaQcPNqQjDunDDzakIw7o2vwaEMy7muagkcbknFPaQIeXclt3ZImNAaPruYe9YwpAo+u5qbmiCIKwKMrqhl28LuZs1lBEIiiMJSOQVmEVlS0c8igRYHQ+79ZuBpwp+cMfPcJRK8z954/7YH8byhon8zfQ5vMTd3P/e9P2m/vP4fO2sHoP6kv8/bo/HdZq12u/tt+l2n8+HzjstprA5p/YrxrI6x/pi7kId+8Uh+lNci/l4XStSimZpZqq63S/t3+qoENfvRjbYBjrOBnIQFWfgQtNDKkl5rZUSsN9PSjsDcBFn76mjnVQQDO+wxIflUK1EIOrqNVyJc4pGZ21UOip+JreP+sXG3VgDjpsWouxYkjgXk0OU5IQGjrmi1Gwcl1eIImnOSLJ4rDyQZ5wkqc9JQnzuXJl3ECb54EHmcS4NkoeEYTnhUHZ1bi2bl4hjeeJZBnmuTZSnnGW541mWfe5tnbeQEAvIgEYIgEL2aDF0QCjGoBhtnw4n6AgUjAyChgqBYwdowYzAaMriOG+03iD7sUf9jp8Yd/hG0n0w8A1sQAAAAASUVORK5CYII=" alt="纯北美优质外教" data-video="/YUEDUN_files/1550830568239-teacher.mp4"></div>
					</div>
				</li>
				<li class="col_6"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["pcomponent"],
		data() {
			return {
				component: this.pcomponent,
				visible: false,
			};
		},
		created() {
			console.log("子组件接收父组件值：", this.component);
		},
		methods: {
			getData(){
				this.visible = false;
				console.log(this.component)
			}
		}
	};
</script>
<style>
*[contenteditable]:hover {
	background-color: #f6f7ff;
}
</style>