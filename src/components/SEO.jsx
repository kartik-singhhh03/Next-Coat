import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, keywords, schema }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Meta Title
    document.title = title
      ? `${title} | NextCoat Painting`
      : "NextCoat Painting | Howard County Painters";

    // Canonical Tag
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://gonextcoat.com${location.pathname === "/" ? "" : location.pathname}`;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      description ||
      "Top-rated Howard County painters specializing in premium interior painting, exterior painting, and cabinet painting services in Maryland. Request a free quote today.";

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      keywords ||
      "Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services, professional painters";

    // 4. Structured Data (Local Business Schema)
    let businessSchema = schema;
    if (!businessSchema) {
      businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "NextCoat Painting",
        image: "https://gonextcoat.com/logo.svg",
        url: "https://gonextcoat.com",
        telephone: "443-424-6019",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Howard County",
          addressLocality: "Maryland",
          addressRegion: "MD",
          addressCountry: "US",
        },
        priceRange: "$$",
        servesCuisine: [
          "Interior Painting",
          "Exterior Painting",
          "Cabinet Painting",
        ],
      };
    }

    if (businessSchema) {
      let scriptSchema = document.querySelector("#seo-schema");
      if (!scriptSchema) {
        scriptSchema = document.createElement("script");
        scriptSchema.type = "application/ld+json";
        scriptSchema.id = "seo-schema";
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.innerHTML = JSON.stringify(businessSchema);
    }

    return () => {
      // Optional: Cleanup specific schema if navigating away
      const scriptSchema = document.querySelector("#seo-schema");
      if (scriptSchema && !schema) {
        scriptSchema.remove();
      }
    };
  }, [title, description, keywords, schema, location.pathname]);

  return null;
}
