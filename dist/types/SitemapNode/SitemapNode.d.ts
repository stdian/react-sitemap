import React from "react";
import { ISitemapRoute } from "./SitemapNode.model";
declare const SitemapNode: ({ host, routes, }: {
    host: string;
    routes: ISitemapRoute[];
}) => React.JSX.Element;
export { SitemapNode };
