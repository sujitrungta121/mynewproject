/** @type {import('next').NextConfig} */
const nextConfig = {
    serverActions:true
}

module.exports = nextConfig


// module.exports = { webpack5: true,
//     webpack: (config) => {
//       config.resolve.fallback = { tls: false };
  
//       return config;
//     },
//   };

// module.exports = {
//     webpack: (config, { isServer }) => {
//       // Fixes npm packages that depend on `fs` module
//       if (!isServer) {
//         config.node = {
//           fs: 'empty'
//         }
//       }
  
//       return config
//     }
//   }