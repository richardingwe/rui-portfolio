import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return { ...initialProps };
    // }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#1f2937" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <meta name='description' content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' />
                    <link rel="manifest" href="/manifest.json" />
                    <title>Rui - Software Developer & Brand Identity Designer</title>
                    <meta name="author" content="Richard Ingwe" />
                    <meta name="Rui Portfolio" content="Rui Portfolio" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
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