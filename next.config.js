const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/app/i18n.ts"
);

module.exports = withNextIntl({
  experimental: {
    serverActions: true,
  },
  // Other Next.js configuration ...
});
