import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ISitemapRoute, SitemapNode, XMLHead } from "./SitemapNode";

export default class Sitemap {
	private host: string;
	private routes: ISitemapRoute[];

	constructor(host: string, routes: ISitemapRoute[]) {
		this.host = host;
		this.routes = routes;
	}

	getReactNode = () => {
		return <SitemapNode host={this.host} routes={this.routes} />;
	};

	getXml = () => {
		return `${XMLHead}${renderToStaticMarkup(
			<SitemapNode host={this.host} routes={this.routes} />,
		)}`;
	};
}
