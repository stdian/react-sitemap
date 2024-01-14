export const XMLHead = '<?xml version="1.0" encoding="UTF-8"?>';

export interface ISitemapRoute {
	url: string;
	priority?: number;
	changefreq?: string;
	lastmod?: string;
	images?: string[];
}
