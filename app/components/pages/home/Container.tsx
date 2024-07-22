import { ElementType, ReactNode } from "react";

type ContainerProperties = {
  children: ReactNode;
  className?: string;
  wrapperClass?: string;
  Element?: ElementType;
};

const Container = ({
  children,
  className = "",
  Element = "div",
  wrapperClass,
}: ContainerProperties) => {
  return (
    <Element className={`w-full ${wrapperClass}`}>
      <div className={`mx-auto max-w-7xl px-4 md:px-8 lg:px-12 ${className}`}>
        {children}
      </div>
    </Element>
  );
};

export default Container;
