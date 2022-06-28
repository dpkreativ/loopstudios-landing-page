import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
          {/* Modal DOM root */}
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
