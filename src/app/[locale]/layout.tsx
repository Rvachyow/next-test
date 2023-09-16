import { useLocale, NextIntlClientProvider } from "next-intl";
import { Layout } from "~widgets/layout";
import { notFound } from "next/navigation";
import { Roboto } from "next/font/google";
import "~shared/styles/globals.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`~shared/languages/${locale}/translation.json`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>
            {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
