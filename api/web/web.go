package web

import (
	"xyhelper-gpt/config"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gtime"
)

func Chat(r *ghttp.Request) {
	if r.Cookie.Get("access-token").String() == "" {
		g.Log().Debug(r.GetCtx(), "redirect to login")
		r.Response.RedirectTo("/login")
	}
	props := `
	{
		"props": {
			"pageProps": {
				"user": {
					"id": "user-HUagcZWRoCLaYBjUWal6Ax9b",
					"name": "Human",
					"email": "admin@openai.com",
					"image": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
					"picture": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
					"idp": "auth0",
					"iat": 1684155521,
					"mfa": false,
					"groups": [],
					"intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
				},
				"serviceStatus": {},
				"userCountry": "US",
				"geoOk": true,
				"serviceAnnouncement": {
					"paid": {},
					"public": {}
				},
				"isUserInCanPayGroup": true,
				"_sentryTraceData": "b4ab8f69411049549cace8402e89c95e-804119654448bfd6-1",
				"_sentryBaggage": "sentry-environment=production,sentry-release=513ca625c170682006ffada4e9f3f65aabb595e3,sentry-transaction=%2F,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=b4ab8f69411049549cace8402e89c95e,sentry-sample_rate=1"
			},
			"__N_SSP": true
		},
		"page": "/",
		"query": {},
		"buildId": "35uzIQibpwv56FyPcgmGz",
		"isFallback": false,
		"gssp": true,
		"scriptLoader": []
	}
	`
	r.Response.WriteTpl("chat.html", g.Map{
		"props": gjson.New(props),
	})
}

func C(r *ghttp.Request) {
	if r.Cookie.Get("access-token").String() == "" {
		g.Log().Debug(r.GetCtx(), "redirect to login")
		r.Response.RedirectTo("/login")
	}
	chatId := r.RequestURI[3:]

	g.Log().Debug(r.GetCtx(), "chatId", chatId)
	props := `
	{
		"props": {
			"pageProps": {
				"user": {
					"id": "user-xyhelper-gpt",
					"name": "username@company.com",
					"email": "username@company.com",
					"image": "",
					"picture": "",
					"idp": "auth0",
					"iat": 2683124492,
					"mfa": false,
					"groups": [],
					"intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
				},
				"serviceStatus": {},
				"userCountry": "US",
				"geoOk": true,
				"serviceAnnouncement": {
					"paid": {},
					"public": {}
				},
				"isUserInCanPayGroup": true,
				"_sentryTraceData": "fd7b1baa0c634c18908f0bc23bb8e4b3-8053d17b31a9be9f-1",
				"_sentryBaggage": "sentry-environment=production,sentry-release=5ec1626698a543712bb2582d8d79cc146ec4f6bd,sentry-transaction=%2Fc%2F%5BchatId%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=fd7b1baa0c634c18908f0bc23bb8e4b3,sentry-sample_rate=1"
			},
			"__N_SSP": true
		},
		"page": "/c/[chatId]",
		"query": {
			"chatId": "65491826-3180-48c6-b9dd-087e84d4e9df"
		},
		"buildId": "35uzIQibpwv56FyPcgmGz",
		"isFallback": false,
		"gssp": true,
		"scriptLoader": []
	}
	`
	propsJson := gjson.New(props)
	propsJson.Set("query.chatId", chatId)
	r.Response.WriteTpl("conversation.html", g.Map{
		"props": propsJson,
	})
}

func Login(r *ghttp.Request) {
	r.Response.WriteTpl("login.html", g.Map{})
}

func LoginPost(r *ghttp.Request) {
	ctx := r.GetCtx()
	cli := g.Client()
	res, err := cli.Post(ctx, config.API_PROXY+"/app/chatgpt/open/check_user", g.Map{
		"AccessToken": r.Get("password"),
		"From":        "xyhelper-gpt",
	})
	if err != nil {
		g.Log().Error(ctx, err)
		r.Response.WriteTpl("login.html", g.Map{
			"error": err.Error(),
		})
		return
	}
	defer res.Close()
	if res.StatusCode != 200 {
		g.Log().Error(ctx, res.StatusCode)
		r.Response.WriteTpl("login.html", g.Map{
			"error": "服务暂时不可用" + res.Status,
		})
		return
	}
	resString := res.ReadAllString()
	g.Log().Debug(ctx, resString)
	resJson := gjson.New(resString)
	if resJson.Get("code").Int() != 1000 {
		r.Response.WriteTpl("login.html", g.Map{
			"error": resJson.Get("message").String(),
		})
		return
	}
	if resJson.Get("data.bindMode").String() != "personal" {
		r.Response.WriteTpl("login.html", g.Map{
			"error": "共享池用户无法使用",
		})
		return
	}
	ExpireTime := gtime.New(resJson.Get("data.ExpireTime").String())
	g.Log().Debug(ctx, ExpireTime, gtime.Now())
	if ExpireTime.Before(gtime.Now()) {
		r.Response.WriteTpl("login.html", g.Map{
			"error": "AccessToken已于" + ExpireTime.String() + "过期",
		})
		return
	}
	r.Cookie.Set("access-token", r.Get("password").String())
	r.Cookie.Set("access-token-expires", ExpireTime.String())
	r.Response.RedirectTo("/")

}
