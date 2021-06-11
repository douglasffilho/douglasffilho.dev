module.exports = {
  target: 'serverless',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "object-src 'none'; default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' res.cloudinary.com; frame-ancestors 'self';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3124138248000; includeSubDomains; preload;',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};
