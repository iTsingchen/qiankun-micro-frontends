import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

import App from "./App.vue";
import routes from "./router";
import createLifecycle from "./qiankun";

const render = (props: { activePath?: string }, elem: Element) => {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory(
      qiankunWindow.__POWERED_BY_QIANKUN__
        ? props.activePath
        : import.meta.env.BASE_URL
    ),
    routes,
  });

  app.use(createPinia());
  app.use(router);

  app.mount(elem);

  return app;
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // window[window.__LIFECYCLE_NAME_FOR_QIANKUN__] = createLifecycle(render);
  /**
   * Vite 具有相当多的限制，比如：
   * 1. 无法使用沙盒模式
   * 2. 无法动态注入 public path
   */
  renderWithQiankun(createLifecycle(render));
} else {
  const elem = document.querySelector("#app");
  if (!elem) throw new Error("Not found element");
  render({}, elem);
}

export const { bootstrap, mount, unmount } = createLifecycle(render);
