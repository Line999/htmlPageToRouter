var loginState = localStorage.getItem("loginState") || false;

window.onload = function () {
  this.checkIsLogin();
};

// 验证用户是否登陆
function checkIsLogin() {
  if (loginState === false) {
    window.open("/pages/login.html", "_self");
  }
}

// 登陆方法
function onSubmit() {
  localStorage.setItem("loginState", true);
  window.open("/", "_self");
}
