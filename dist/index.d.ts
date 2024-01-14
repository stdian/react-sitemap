import React from 'react';

interface ISitemapRoute {
    url: string;
    priority?: number;
    changefreq?: string;
    lastmod?: string;
    images?: string[];
}

declare class Sitemap {
    private host;
    private routes;
    constructor(host: string, routes: ISitemapRoute[]);
    getReactNode: () => React.JSX.Element;
    getXml: () => string;
}

export { Sitemap as default };
