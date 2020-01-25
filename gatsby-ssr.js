/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react")

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }, pluginOptions) => {
  setHeadComponents([
    <script dangerouslySetInnerHTML={{ __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PXPXJ38');
    ` }} />,
  ]);

  setPreBodyComponents([
    <noscript
      dangerouslySetInnerHTML={{ __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXPXJ38"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>
       ` }}
    />,
  ]);
};

// You can delete this file if you're not using it
