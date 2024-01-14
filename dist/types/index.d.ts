import React from "react";
import { ISitemapRoute } from "./SitemapNode";
export default class Sitemap {
    private host;
    private routes;
    constructor(host: string, routes: ISitemapRoute[]);
    getReactNode: () => React.JSX.Element;
    getXml: () => string;
}
