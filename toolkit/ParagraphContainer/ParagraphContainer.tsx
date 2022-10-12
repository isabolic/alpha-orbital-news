import { styled } from "@stitches/react";
import { PropsWithChildren } from "react";

const Container = styled("div", {
  fontSize: "13px",
});

interface ParagraphContainerProps {
  className?: string;
  dangerouslySetInnerHTML?: string;
}

const ParagraphContainer = ({
  className,
  children,
  dangerouslySetInnerHTML,
}: PropsWithChildren<ParagraphContainerProps>) => {
  return (
    <Container
      dangerouslySetInnerHTML={
        dangerouslySetInnerHTML
          ? { __html: dangerouslySetInnerHTML }
          : undefined
      }
      className={className}
    >
      {children}
    </Container>
  );
};

export { ParagraphContainer };
