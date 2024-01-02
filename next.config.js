/** @type {import('next').NextConfig} */

// TODO remove maybe
const nextConfig = {
    env: {
        // This is the default environment, but you can override it if you need to
        LATEST_BUILD: new Date().toString(),
    },
}

module.exports = nextConfig
