import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`~shared/languages/${locale}/translation.json`))
    .default,
}));
