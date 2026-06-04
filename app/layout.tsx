import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Post SEO Gap Analyzer — Find Missing Keywords in Your Content",
  description:
    "Analyze your blog posts, uncover keyword gaps, and get actionable suggestions to improve your search rankings. Built for content marketers, bloggers, and SEO agencies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="07a795a3-2f84-48b8-8d1a-1438b0c1cdad"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
