import ReactDOM from "react-dom";

export type QiankunProps = {
  container: HTMLElement;
};

const createLifecycle = <T>(render: (props: T, elem: Element) => void) => {
  return {
    bootstrap: async () => {
      //
    },
    mount: async (props: T & QiankunProps) => {
      const { container } = props;
      const elem = container.querySelector("#sub-root");
      if (!elem) throw new Error("Not found element");
      render(props, elem);
    },
    unmount: async (props: QiankunProps) => {
      const { container } = props;
      const elem = container.querySelector("#sub-root");

      ReactDOM.unmountComponentAtNode(elem!);
    },
  };
};

export default createLifecycle;
