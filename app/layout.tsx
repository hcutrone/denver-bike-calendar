import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import Script from "next/script";
import type { Event, WithContext } from "schema-dts";
import { Footer, Header, RegisterBanner } from "@/components";

const poppins = localFont({
   src: [
      {
         path: "../public/fonts/poppins/Poppins-ExtraBold.ttf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Bold.ttf",
         weight: "700",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-ExtraBoldItalic.ttf",
         weight: "800",
         style: "italic",
      },
      {
         path: "../public/fonts/poppins/Poppins-LightItalic.ttf",
         weight: "200",
         style: "italic",
      },
   ],
});

const SITE_TITLE = "Denver Bike Fest - Bikes, Community, and Connection!";
const SITE_DESCRIPTION =
   "Denver Bike Fest - The ultimate celebration of Denver's bicycle community. Join us on Saturday, June 13th, 2026 for a day of bikes, community, and connection!";

export const metadata: Metadata = {
   title: SITE_TITLE,
   description: SITE_DESCRIPTION,
   keywords: [
      "Denver",
      "Bike Fest",
      "Denver Bike Fest",
      "Biking",
      "Bicycle",
      "Bike",
      "Community",
      "Events",
      "Cycling",
      "Festival",
      "Bikefest",
   ],
   authors: [
      {
         name: "Harrison Cutrone",
         url: "https://instagram.com/harrisoncutrone",
      },
      {
         name: "Emily Kleinfelter",
         url: "https://instagram.com/bike.this.city",
      },
   ],
   creator: "Harrison Cutrone",
   robots: {
      index: true,
      follow: true,
   },
   openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: "https://denverbikefest.app",
      siteName: "Denver Bike Fest",
      images: [
         {
            url: "https://denverbikefest.app/logo_vertical.jpg",
            alt: "Denver Bike Fest Logo",
         },
      ],
      type: "website",
      locale: "en_US",
   },
   twitter: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      card: "summary_large_image",
      images: [
         {
            url: "https://denverbikefest.app/logo_vertical.jpg",
            alt: "Denver Bike Fest Logo",
         },
      ],
   },
   alternates: {
      canonical: "https://denverbikefest.app",
   },
};

const jsonLd: WithContext<Event> = {
   "@context": "https://schema.org",
   "@type": "Event",
   name: SITE_TITLE,
   description: SITE_DESCRIPTION,
   startDate: "2026-06-13T15:00:00",
   endDate: "2026-06-13T21:00:00",
   location: {
      "@type": "Place",
      name: "York Street Yards",
      address: {
         "@type": "PostalAddress",
         streetAddress: "3845 Steele Street",
         addressLocality: "Denver",
         addressRegion: "CO",
         postalCode: "80205",
         addressCountry: "US",
      },
   },
   image: ["https://denverbikefest.app/logo_vertical.jpg"],
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className={poppins.className}>
         <Script
            id="json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
         >
            {JSON.stringify(jsonLd)}
         </Script>
         <body>
            <Theme
               appearance="light"
               style={{
                  fontFamily: "var(--font-poppins)",
                  // @ts-expect-error these font family props iare not recognized by Theme, but is used by the respective component
                  "--heading-font-family": "var(--font-poppins)",
                  "--em-font-family": "var(--font-poppins)",
               }}
               accentColor="lime"
            >
               <div style={{ backgroundColor: "var(--light-background)" }}>
                  <Header />
                  <main>
                     {children}
                     <RegisterBanner />
                  </main>
                  <Footer />
               </div>
            </Theme>
         </body>
      </html>
   );
}
