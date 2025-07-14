/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://cdn.traction.one/pokedex/pokemon/**')]
    }
};

export default nextConfig;
