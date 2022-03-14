import type { App } from "vue";

export type QiankunProps = {
  container?: HTMLElement;
};

const createLifecycle = <T>(render: (props: T, elem: Element) => App) => {
  let instance: ReturnType<typeof render>;
  return {
    bootstrap: async () => {
      //
    },
    mount: (props: T & QiankunProps) => {
      const { container } = props;
      if (!container) throw new Error("Container must be provided");
      const elem = container.querySelector("#app");
      if (!elem) throw new Error("Not found element");
      instance = render(props, elem);
    },
    unmount: async () => {
      instance.unmount();
    },
  };
};

export default createLifecycle;
