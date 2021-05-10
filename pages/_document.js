// Core
import Document, { Html, Main, Head, NextScript } from "next/document";

// Elements
import { AdBlocker } from "../elements/AdBlockerScript";

// // Other
// import { NextHeadCustom, NextScriptCustom } from "../init/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const userAgent = ctx.req && ctx.req.headers["user-agent"];

    return {
      ...initialProps,
      userAgent,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
        <AdBlocker />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
