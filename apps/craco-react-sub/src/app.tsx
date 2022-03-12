import bgImageURL from "./assets/bg-image.jpeg";

import { AppRouter } from "./router";

export type AppProps = {
  name?: string;
  activePath?: string;
};

export function App(props: AppProps) {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${bgImageURL})`,
      }}
    >
      <AppRouter activePath={props.activePath} />
    </div>
  );
}
