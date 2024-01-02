import React, { forwardRef } from "react";
import SvgNotionLogo from "./NotionLogo";

export const NotionIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return <SvgNotionLogo ref={ref} {...props} />;
});
