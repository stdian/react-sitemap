import React from "react";

import { ISitemapRoute } from "./SitemapNode.model";

const Urlset = (props: any) => React.createElement("urlset", props);
const Url = (props: any) => React.createElement("url", props);
const Loc = (props: any) => React.createElement("loc", props);
const Lastmod = (props: any) => React.createElement("lastmod", props);
const Changefreq = (props: any) => React.createElement("changefreq", props);
const Priority = (props: any) => React.createElement("priority", props);
const Image = (props: any) => React.createElement("image:image", props);
const ImageLoc = (props: any) => React.createElement("image:loc", props);

const fullUrl = (url: string, host: string) => host + url;

const SitemapNode = ({
	host,
	routes,
}: {
	host: string;
	routes: ISitemapRoute[];
}) => {
	return (
		<Urlset
			xmlns={"http://www.sitemaps.org/schemas/sitemap/0.9"}
			xmlns:image={"http://www.google.com/schemas/sitemap-image/1.1"}>
			{routes.map((item, index) => (
				<Url key={index}>
					<Loc>{fullUrl(item.url, host)}</Loc>
					{item.priority && <Priority>{item.priority}</Priority>}
					{item.lastmod && <Lastmod>{item.lastmod}</Lastmod>}
					{item.changefreq && <Changefreq>{item.changefreq}</Changefreq>}
					{item.images?.map((item, index) => (
						<Image key={index}>
							<ImageLoc>{item}</ImageLoc>
						</Image>
					))}
				</Url>
			))}
		</Urlset>
	);
};

export { SitemapNode };
