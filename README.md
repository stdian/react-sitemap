# [React Sitemap](https://github.com/stdian/react-sitemap)

Module for generating sitemaps using React nodes. Also, it can export your sitemap to XML.

## Installation

Install through NPM

```bash
npm install @stdian/react-sitemap
```

or

```bash
git clone git://github.com/stdian/react-sitemap.git
```

## Usage

```js
import Sitemap from "@stdian/react-sitemap";

const host = "https://stdian.ru";

const routes = [
	{
		url: "/",
		priority: 1,
		lastmod: "2024-12-01",
		changefreq: "always",
	},
	{
		url: "/page1",
		priority: 0.8,
		lastmod: "2024-12-01",
		changefreq: "monthly",
		images: ["https://stdian.ru/image1.jpg"],
	},
	{
		url: "/page2",
		priority: 1,
		images: ["https://stdian.ru/image2.jpg", "https://stdian.ru/image3.jpg"],
	},
];

const sitemap = new Sitemap(host, routes);

// get React node

sitemap.getReactNode();

// get XML

sitemap.getXml();
```

#### Route options

- `url` — **String** page route
- `priority` — **Integer** route priority from 0 to 1
- `changefreq` — **String** How frequently the page is likely to change.
  - Valid values are:
    - always
    - hourly
    - daily
    - weekly
    - monthly
    - yearly
    - never
- `lastmod` — **String** The date of last modification of the page. Format: `YYYY-MM-DD`
- `image` — **String[]** Array of image urls
