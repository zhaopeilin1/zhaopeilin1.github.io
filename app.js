var token=''
const vue = new Vue({
    el: '.don_login',
    data: {
        username: '',
        password: '',
    },
    methods: {
        login: function () { //登录
            if (this.username === "" || this.username === undefined) {
                $.myToast("用户名不能为空，请输入用户名！");
                return
            }
            if (this.password === "" || this.password === undefined) {
                $.myToast("密码不能为空，请输入密码！");
                return
            }
            // if (this.password.length < 6) {
            //     $.myToast("密码长度不能小于6!");
            //     return
            // }
            this.requestLogin();
            //window.location.href = PATH_SEARCH_HOME;
        },
        reset: function () { //重置
            console.log("进入reset");
            this.username = "a";
            this.password = "b"
        },
        requestLogin: function () {
            //模拟登录，返回用户名称，token之类的
            axios.post("/auth", { //get
			
                "app_key": this.username,
                "app_secret": this.password
				 }).then(function (res) {

                //console.log(res);
                console.log(res.data);
                //判断是否登录成功。成功就保存账号和密码
                //localStorage.
                var userInfo = {
                    "username": this.username,
                    "password": this.password
                };
				window.localStorage.token=res.data.token
				token=res.data.token
				store.state.token=res.data.token
				Axios.defaults.headers.common['token']=res.data.token
                // window.localStorage.userInfo = JSON.stringify(userInfo);
                $.myToast("登录成功!");
                //这里需要保存返回的数据
                // window.sessionStorage.setItem("user", JSON.stringify(userInfo));//保存数据
                //window.location.href = PATH_SEARCH_HOME;
            }).catch(function (error) {
                console.log(error);
            })

            //post
            // axios.post('/user', {
            //      "username": this.username,
            //      "password": this.password
            // })
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },
        getUserInfo: function () {//获取用户信息

            if (window.localStorage.userInfo) { //是否存在已经登录保存的信息
                var userInfo = JSON.parse(window.localStorage.userInfo);

                this.username = userInfo.username;
                this.password = userInfo.password;//将信息设置到页面中
            }
        }
    },
    mounted: function () {
        this.getUserInfo();
    }
});


//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const vue2 = new Vue({
    el: '.query_books',
    data: {
        username: '',
		items: [{"title":"aa"}],
      
    },
    methods: {
        query: function () { //登录
		console.log(this.items)
		var that=this
		/*
            if (this.username === "" || this.username === undefined) {
                $.myToast("用户名不能为空，请输入用户名！");
                return
            }
            if (this.password === "" || this.password === undefined) {
                $.myToast("密码不能为空，请输入密码！");
                return
            }
            // if (this.password.length < 6) {
            //     $.myToast("密码长度不能小于6!");
            //     return
            // }
			*/
            this.requestLogin(that);
            //window.location.href = PATH_SEARCH_HOME;
        },
        reset: function () { //重置
            console.log("进入reset");
            this.username = "";
            this.password = ""
        },
        requestLogin: function (that) {
			console.log("denglu")
            //模拟登录
            axios.get("/api/v1/books", { //get
                "page_size": 100,
                "page": 1
            }).then(function (res) {

                //console.log(res);
                console.log(res.data.list);
				that.items=res.data.list
                //判断是否登录成功。成功就保存账号和密码
                //localStorage.
                var userInfo = {
                    "username": this.username,
                    "password": this.password
                };
                // window.localStorage.userInfo = JSON.stringify(userInfo);
                //$.myToast("登录成功!");
                //这里需要保存返回的数据
                // window.sessionStorage.setItem("user", JSON.stringify(userInfo));//保存数据
                //window.location.href = PATH_SEARCH_HOME;
            }).catch(function (error) {
                console.log(error);
            })

            //post
            // axios.post('/user', {
            //      "username": this.username,
            //      "password": this.password
            // })
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },
        getUserInfo: function () {//获取用户信息

            if (window.localStorage.userInfo) { //是否存在已经登录保存的信息
                var userInfo = JSON.parse(window.localStorage.userInfo);

                this.username = userInfo.username;
                this.password = userInfo.password;//将信息设置到页面中
            }
        }
    },
    mounted: function () {
        this.getUserInfo();
    }
});