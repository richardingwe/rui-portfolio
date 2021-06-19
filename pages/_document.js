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
                    <meta name="theme-color" content="#1f2937" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <meta name='description' content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="author" content="Richard Ingwe" />
                    <meta name='keywords' content='rui, frontend developer, web developer, brand identiy designer, graphic designer, richard ingwe, ruingwe, ruingwe.com' />
                    <meta name="Rui Portfolio" content="Rui Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content='Richard Ingwe Portfolio' />
                    {/* <meta property="og:description" content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' /> */}
                    <meta property="og:image" content='https://ruingwe.com/logo512.png' />
                    <meta property="og:image:alt" content='Rui logo' />
                    <meta property="og:locale" content="en_US" />
                    <meta property="fb:app_id" content="235151421406499"></meta>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@richardingwe"></meta>
                    <meta name="twitter:creator" content="@richardingwe"></meta>
                    {/* <meta name="twitter:description" content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' /> */}
                    <meta name="twitter:image" content='https://ruingwe.com/logo512.png' />
                    <meta name="twitter:image:alt" content='Rui logo' />
                    {/* <meta name="google-site-verification" content="w31_gCqMJnNbzIL-ENdtt90gIVc75fMw8T0LJ4mOvKk" /> */}
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