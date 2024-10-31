import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const Urlset = props => /*#__PURE__*/React.createElement("urlset", props);
const Url = props => /*#__PURE__*/React.createElement("url", props);
const Loc = props => /*#__PURE__*/React.createElement("loc", props);
const Lastmod = props => /*#__PURE__*/React.createElement("lastmod", props);
const Changefreq = props => /*#__PURE__*/React.createElement("changefreq", props);
const Priority = props => /*#__PURE__*/React.createElement("priority", props);
const Image = props => /*#__PURE__*/React.createElement("image:image", props);
const ImageLoc = props => /*#__PURE__*/React.createElement("image:loc", props);
const fullUrl = (url, host) => host + url;
const SitemapNode = ({
  host,
  routes
}) => {
  return /*#__PURE__*/React.createElement(Urlset, {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1"
  }, routes.map((item, index) => (/*#__PURE__*/React.createElement(Url, {
    key: index
  }, /*#__PURE__*/React.createElement(Loc, null, fullUrl(item.url, host)), item.priority && /*#__PURE__*/React.createElement(Priority, null, item.priority), item.lastmod && /*#__PURE__*/React.createElement(Lastmod, null, item.lastmod), item.changefreq && /*#__PURE__*/React.createElement(Changefreq, null, item.changefreq), item.images?.map((item, index) => (/*#__PURE__*/React.createElement(Image, {
    key: index
  }, /*#__PURE__*/React.createElement(ImageLoc, null, item))))))));
};

const XMLHead = '<?xml version="1.0" encoding="UTF-8"?>';

class Sitemap {
  constructor(host, routes) {
    Object.defineProperty(this, "host", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "routes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "getReactNode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: () => {
        return /*#__PURE__*/React.createElement(SitemapNode, {
          host: this.host,
          routes: this.routes
        });
      }
    });
    Object.defineProperty(this, "getXml", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: () => {
        return `${XMLHead}${renderToStaticMarkup(/*#__PURE__*/React.createElement(SitemapNode, {
          host: this.host,
          routes: this.routes
        }))}`;
      }
    });
    this.host = host;
    this.routes = routes;
  }
}

export { Sitemap as default };
//# sourceMappingURL=index.esm.js.map
