import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#11161f" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <meta name='description' content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="author" content="Richard Ingwe" />
                    <meta name='keywords' content='rui, frontend developer, web developer, brand identiy designer, graphic designer, richard ingwe, ruingwe, ruingwe.com, Richard Ingwe, Rui, Richard Unimke Ingwe, Rui Creative, Ruitech' />
                    <meta name="Rui Portfolio" content="Rui Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content='Richard Ingwe Portfolio' />
                    {/* <meta property="og:description" content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' /> */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="fb:app_id" content="235151421406499"></meta>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@richardingwe"></meta>
                    <meta name="twitter:creator" content="@richardingwe"></meta>
                    {/* <meta name="twitter:description" content='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.' /> */}
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