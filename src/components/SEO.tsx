import Head from "next/head";
import React from "react";
import type { Metadata } from "next";

interface SEOProps {
  metadata: Metadata;
  jsonLd?: object;
}

/**
 * Reusable SEO component for Next.js App Router
 * Usage: <SEO metadata={metadata} jsonLd={structuredData} />
 */
const SEO: React.FC<SEOProps> = ({ metadata, jsonLd }) => {
  return (
    <>
      <Head>
        {metadata.title && <title>{metadata.title as string}</title>}
        {metadata.description && (
          <meta name="description" content={metadata.description as string} />
        )}
        {/* Open Graph */}
        {metadata.openGraph && (
          <>
            <meta property="og:title" content={metadata.openGraph.title as string} />
            <meta property="og:description" content={metadata.openGraph.description as string} />
            {typeof (metadata.openGraph as any)?.type === "string" && (
              <meta property="og:type" content={(metadata.openGraph as any).type} />
            )}
            {metadata.openGraph.url && (
              <meta property="og:url" content={metadata.openGraph.url as string} />
            )}
            {Array.isArray(metadata.openGraph.images) && metadata.openGraph.images.map((img, i) => {
              if (typeof img === "string") {
                return <meta key={i} property="og:image" content={img} />;
              } else if (typeof img === "object" && img !== null && "url" in img) {
                const url = typeof img.url === "string" ? img.url : img.url?.toString();
                return <meta key={i} property="og:image" content={url} />;
              }
              return null;
            })}
          </>
        )}
        {/* Twitter Card */}
        {metadata.twitter && (
          <>
            {typeof (metadata.twitter as any)?.card === "string" && (
              <meta name="twitter:card" content={(metadata.twitter as any).card} />
            )}
            {typeof (metadata.twitter as any)?.title === "string" && (
              <meta name="twitter:title" content={(metadata.twitter as any).title} />
            )}
            {typeof (metadata.twitter as any)?.description === "string" && (
              <meta name="twitter:description" content={(metadata.twitter as any).description} />
            )}
            {Array.isArray((metadata.twitter as any)?.images) && (metadata.twitter as any).images.map((img: string, i: number) => (
              <meta key={i} name="twitter:image" content={img} />
            ))}
          </>
        )}
        {/* Canonical & hreflang */}
        {metadata.alternates && metadata.alternates.canonical && (
          <link rel="canonical" href={typeof metadata.alternates.canonical === "string" ? metadata.alternates.canonical : metadata.alternates.canonical?.toString()} />
        )}
        {metadata.alternates && metadata.alternates.languages &&
          Object.entries(metadata.alternates.languages).map(([lang, href]) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={typeof href === "string" ? href : href?.toString()} />
          ))}
        {/* JSON-LD Structured Data */}
        {jsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        )}
      </Head>
    </>
  );
};

export default SEO;
