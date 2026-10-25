export interface NavItem {
  name: string;
  href: string;
  id: string;
}

export const MAIN_NAV: NavItem[] = [
  { name: "Home", href: "/", id: "home" },
  { name: "About Us", href: "/about", id: "about" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Industries", href: "/industries", id: "industries" },
  { name: "Careers", href: "/careers", id: "careers" },
  { name: "Contact", href: "/contact", id: "contact" }
];

export const FOOTER_SERVICE_LINKS = [
  { name: "Translate", href: "/services?item=translate" },
  { name: "ASR (Speech Recognition)", href: "/services?item=asr" },
  { name: "TTS (Text-to-Speech)", href: "/services?item=tts" },
  { name: "Data Collection", href: "/services?item=data-collection" },
  { name: "Video Service", href: "/services?item=video-service" }
];
