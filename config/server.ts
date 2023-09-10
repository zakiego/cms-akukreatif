export default ({ env }) => ({
  host: env("VERCEL_URL", "0.0.0.0") ?? env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
