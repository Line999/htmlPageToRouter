// 路由配置
const routes = {
  404: {
    path: "/pages/404.html",
    title: "404",
    description: "Page not found",
  },
  "/": {
    path: "/pages/home.html",
    title: "主页",
    description: "Home Page",
  },
  "/about": {
    path: "/pages/about.html",
    title: "关于",
    description: "About Us",
  },
  "/contact": {
    path: "/pages/contact.html",
    title: "联系我们",
    description: "About Us",
  },
};

const pageNote = document.querySelector("nav");
if (pageNote !== null) {
  document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      // e.target.className = "sidebar-menu-active";
      e.preventDefault();
      useRoute();
    }
  });
}

/**
 * 注册路由
 */
const useRoute = (e) => {
  e = e || window.event;
  e.preventDefault();
  window.history.pushState(
    { path: window.location.pathname },
    "",
    e.target.href
  );
  renderPage();
};

/**
 * 页面渲染器
 */
const renderPage = async () => {
  const location = window.location.pathname;
  const route = routes[location] || routes[404];
  const response = await fetch(route.path);
  const data = await response.text();
  document.querySelector("#root").innerHTML = data;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = renderPage;
window.useRoute = useRoute;
renderPage();
