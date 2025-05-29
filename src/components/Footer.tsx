import Link from "next/link";
import React from "react";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="py-5 bg-primary-50">
      <Container>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <div className="max-w-xs sm:max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <p className="font-light text-center">
                © {new Date().getFullYear()} {siteDetails.siteName}{" "}
                {new Date().getFullYear()} - All rights reserved.
              </p>
            </Link>
          </div>
          <div>
            {footerDetails.socials && (
              <div className="flex items-center gap-5 flex-wrap">
                {Object.keys(footerDetails.socials).map((platformName) => {
                  if (platformName && footerDetails.socials[platformName]) {
                    return (
                      <Link
                        href={footerDetails.socials[platformName] ?? "#"}
                        key={platformName}
                        aria-label={platformName}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                      >
                        {getPlatformIconByName(platformName)}
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
