import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import Button from "lerna-demo/packages/React-component-doc-demo/lib/components/Button/Button"

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/button",
    title: "Button",
    content: pageLoader(() => import("./specimens/ButtonPage") )
  },
  {
    path: "/button2",
    title: "Button2",
    content: Button // Doesn't support complex component, if needed, should import a page component.
  },
  {
    path: "/specimens",
    title: "OverView",
    content: pageLoader(() => import("./specimens/overview.md"))
  },
  {
    path: "/specimens/audio",
    title: "audio",
    content: pageLoader(() => import("./specimens/audio.md"))
  },
  {
    path: "/specimens/code",
    title: "code",
    content: pageLoader(() => import("./specimens/code.md"))
  },
  {
    path: "/specimens/color-palette",
    title: "color-palette",
    content: pageLoader(() => import("./specimens/color-palette.md"))
  },
  {
    path: "/specimens/color",
    title: "color",
    content: pageLoader(() => import("./specimens/color.md"))
  },
  {
    path: "/specimens/download",
    title: "download",
    content: pageLoader(() => import("./specimens/download.md"))
  },
  {
    path: "/specimens/react",
    title: "react",
    content: pageLoader(() => import("./specimens/react.md"))
  },
  {
    path: "/specimens/hint",
    title: "hint",
    content: pageLoader(() => import("./specimens/hint.md"))
  },
  {
    path: "/specimens/html",
    title: "html",
    content: pageLoader(() => import("./specimens/html.md"))
  },
  {
    path: "/specimens/type",
    title: "type",
    content: pageLoader(() => import("./specimens/type.md"))
  },
  {
    path: "/specimens/image",
    title: "image",
    content: pageLoader(() => import("./specimens/image.md"))
  },
  {
    path: "/specimens/table",
    title: "table",
    content: pageLoader(() => import("./specimens/table.md"))
  },
  {
    path: "/specimens/video",
    title: "video",
    content: pageLoader(() => import("./specimens/video.md"))
  }
];

ReactDOM.render(
  <Catalog title="Style guide" pages={pages} />,
  document.getElementById("catalog")
);
