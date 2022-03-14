import { registerMicroApps, start } from "qiankun";

const bootstrap = (render: (loading: boolean) => void) => {
  render(true);

  registerMicroApps([
    {
      name: "craco-react-sub",
      entry: "http://localhost:42536/",
      activeRule: "/react",
      container: "#slot",
      loader: render,
      props: { name: "craco-react-sub", activePath: "/react" },
    },
    {
      name: "vite-vue-sub",
      entry: "http://localhost:9657/",
      activeRule: "/vue",
      container: "#slot",
      loader: render,
      props: { name: "vite-vue-sub", activePath: "/vue" },
    },
  ]);

  start();
};

export default bootstrap;
