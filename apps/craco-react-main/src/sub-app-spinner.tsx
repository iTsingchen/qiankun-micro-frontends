import React, { useState, useEffect } from "react";
import { SpinnerDiamond } from "spinners-react";

type Props = {
  spinning: boolean;
  children: React.ReactNode;
  delay?: number;
};

export function SubAppSpinner({ spinning, children, delay = 0 }: Props) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(spinning);
    }, delay);

    return () => {
      setIsShow(false);
      clearTimeout(timer);
    };
  }, [spinning, delay]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {isShow && (
        <SpinnerDiamond
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          size={90}
          thickness={100}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      )}
      {children}
    </div>
  );
}
