import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return { ...initialProps };
    // }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="#1f2937" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <title>Rui - Software Developer & Brand Identity Designer</title>
                    <meta name='description' content='Richard Unimke Ingwe - RUI Portfolio' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;