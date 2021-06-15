const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");


module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        runtimeCaching,
    },
    images: {
        domains: ['cdn.sanity.io']
    },
    env: {
        PROJECT_ID: 'y0xdnwwh',
    },
    target: 'serverless',
    // This is not required to make it into a PWA, but is a nice way to clean up your imports
    webpack: (config) => {
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
});