import React from "react";
import FooterLogoContacts from "./FooterLogoContacts";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container flex flex-col sm:flex-row xl:items-stretch !px-0">
        <FooterLogoContacts />
        <FooterLinks />
      </div>
    </footer>
  );
}
