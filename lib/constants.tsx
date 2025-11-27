import {
  Accessibility,
  Dumbbell,
  Gift,
  HeartHandshake,
  Home,
  Landmark,
  Smartphone,
} from "lucide-react";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsTiktok,
  BsSnapchat,
  BsTwitterX,
  BsTelegram,
} from "react-icons/bs";
import { Address } from "viem";

export const navMenu: NavMenuItem[] = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Features",
    href: "/#feature",
  },
  {
    title: "About us",
    href: "/#about",
  },
  {
    title: "Roadmap",
    href: "/#roadmap",
  },
  {
    title: "Availability",
    href: "/#availability",
  },
  {
    title: "Tokenomic",
    href: "/#tokenomic",
  },
  // {
  //   title: "Team",
  //   href: "/#team",
  // },
  {
    title: "FAQ",
    href: "/#faq",
  },
];

export const brands: Brand[] = [
  { name: "Talabat", logo: "/assets/logos/brands/talabat.png" },
  { name: "Breadfast", logo: "/assets/logos/brands/breadfast.jpeg" },
  { name: "GoodsMart", logo: "/assets/logos/brands/goods.png" },
  { name: "Talabat Mart", logo: "/assets/logos/brands/talabat-mart.png" },
  { name: "Instashop", logo: "/assets/logos/brands/instashop.jpg" },
  { name: "Talabat", logo: "/assets/logos/brands/talabat.png" },
  { name: "Breadfast", logo: "/assets/logos/brands/breadfast.jpeg" },
];

export const roadmapData: RoadmapItem[] = [
  {
    index: 1,
    time: "2025 (Now-Q4)",
    title: "Strengthen the Core (16 markets)",
    content: [
      "Boost sell-out velocity and repeat orders in all live markets.",
      "Perfect in-store execution in retail, pharmacies, and HoReCa.",
      "Ensure EU compliance for Germany-led expansion.",
      "KPIs: OTIF >90%, DSO <65 days.",
    ],
  },
  {
    index: 2,
    time: "2026",
    title: "Expansion to 22–30 markets",
    content: [
      "Add 6–14 new adjacent and logistics-friendly markets.",
      "Launch natural color flavors across key regions.",
      "Secure first German retail listing.",
      "KPI: $25M+ annual run-rate revenues.",
    ],
  },
  {
    index: 3,
    time: "2027",
    title: "Expansion to 30–40 markets",
    content: [
      "Broaden EU presence (France, Italy, UK).",
      "Scale Russia & Uzbekistan distribution with localized campaigns.",
      "Launch Healthy Cola Energy (functional line).",
      "Brand KPI: ≥25% aided awareness in 5 anchor markets (KSA, UAE, Egypt, USA/Canada, Russia).",
    ],
  },
  {
    index: 4,
    time: "2028",
    title: "Expansion to 40–50 markets",
    content: [
      "Achieve profitability in 3 anchor markets (KSA, UAE + one developed market).",
      "Extend footprint into East Africa & South Asia (Ethiopia, Pakistan).",
      "Centralize global marketing and media buying.",
      "KPI: $100M+ revenues, >10% EBITDA.",
    ],
  },
  {
    index: 5,
    time: "2029-2030",
    title: "Global Category Leadership (50+ markets)",
    content: [
      "Operate in 50+ countries worldwide.",
      "Scale DTC e-commerce in GCC, EU, and North America.",
      "Strategic option: IPO or acquisition.",
      "KPI: $200M+ revenues, >15% EBITDA.",
    ],
  },
];

export const features: Feature[] = [
  {
    icon: <Landmark size={25} />,
    title: "Governance",
    description: "Voting on flavors, expansions, initiatives",
  },
  {
    icon: <Gift size={25} />,
    title: "Rewards",
    description:
      "Staking HEALTH tokens for loyalty rewards, discounts, dividends",
  },
  {
    icon: <HeartHandshake size={25} />,
    title: "Creator-Friendly",
    description:
      "Exclusive early access to products, events, and limited editions",
  },
];

export const targetAudience: Feature[] = [
  {
    icon: <Smartphone size={25} />,
    title: "Gen Z & Millennials",
    description: "Health-driven but trend-conscious, want authenticity.",
  },
  {
    icon: <Dumbbell size={25} />,
    title: "Fitness & lifestyle consumers",
    description: "Refreshment that fits health goals.",
  },
  {
    icon: <Home size={25} />,
    title: "Families & parents",
    description: "Safer choices for kids without denying them cola moments",
  },
  {
    icon: <Accessibility size={25} />,
    title: "Older consumers",
    description: "Reducing sugar intake while keeping enjoyment.",
  },
];

export const socialItems: SocialItem[] = [
  { Icon: BsFacebook, href: "https://www.facebook.com/HealthyColaOfficial" },
  { Icon: BsTelegram, href: "https://t.me/Healthy_Cola" },
  { Icon: BsInstagram, href: "https://www.instagram.com/healthycolaofficial" },
  { Icon: BsTwitterX, href: "https://x.com/Healthy_cola" },
  { Icon: BsYoutube, href: "https://youtube.com/@healthycolaofficial" },
  { Icon: BsTiktok, href: "https://www.tiktok.com/@healthycolaofficial" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/showcase/healthy-cola" },
  {
    Icon: BsSnapchat,
    href: "https://www.snapchat.com/add/healthycola24?share_id=bb80xwPla7g&locale=en-US",
  },
];

export const services: ServiceItem[] = [
  {
    title: "About Us",
    services: [
      {
        name: "Whitepaper",
        href: `/documents/whitepaper.pdf`,
      },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Term of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Our Product",
    services: [
      {
        name: "Token Sale",
        href: "/#home",
      },
      {
        name: "Healthy Cola",
        href: "/#about",
      },
      {
        name: "Availability",
        href: "/#availability",
      },
    ],
  },
  {
    title: "Help Center",
    services: [
      {
        name: "FAQ's",
        href: "/#faq",
      },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    title: "What is Healthy Cola?",
    content:
      "Healthy Cola is a next-generation cola designed for the modern consumer. It delivers the classic cola taste and fizz that people love, but in a health-conscious formula with zero sugar and natural sweeteners.\n\n It’s indulgence without compromise — a cola that balances pleasure and wellness. Healthy Cola isn’t just a drink; it’s a movement redefining the cola category for a new generation.",
  },
  {
    title: "What problem does it solve?",
    content:
      "Traditional colas contribute to obesity, diabetes, and lifestyle-related diseases, yet consumers still crave the cola experience. Healthy Cola bridges this gap by offering a guilt-free alternative: the same refreshment, but without the harmful sugar load.",
  },
  {
    title: "Who is the target audience?",
    content:
      "◆ \u00A0 Gen Z & Millennials: health-driven but trend-conscious, want authenticity\n" +
      "◆ \u00A0 Fitness & lifestyle consumers: refreshment that fits health goals\n" +
      "◆ \u00A0 Families & parents: safer choices for kids without denying them cola moments\n" +
      "◆ \u00A0 Older consumers: reducing sugar intake while keeping enjoyment" +
      "\n\nHealthy Cola is a cola for all of us.",
  },
  {
    title: "Where is Healthy Cola available now?",
    content:
      "Healthy Cola is already active in 16 countries across key regions:\n\n" +
      "◆ \u00A0 Arabian Peninsula & Gulf: Saudi Arabia, UAE, Qatar, Kuwait, Oman, Yemen\n" +
      "◆ \u00A0 Levant (Western Asia): Jordan, Palestine, Syria\n" +
      "◆ \u00A0 North Africa: Egypt, Libya\n" +
      "◆ \u00A0 Central Africa: Chad\n" +
      "◆ \u00A0 North America: USA, Canada\n" +
      "◆ \u00A0 Central Asia: Uzbekistan\n" +
      "◆ \u00A0 Eurasia: Russia\n" +
      "\nThis global footprint proves Healthy Cola’s adaptability across cultures, economies, and consumer needs.",
  },
  {
    title: "What makes Healthy Cola unique?",
    content:
      "◆ \u00A0 Zero sugar + natural sweeteners (stevia-based, better-for-you)\n" +
      "◆ \u00A0 Universal appeal → from athletes to families, across all age groups\n" +
      "◆ \u00A0 Movement-driven brand identity → not just a product, but a lifestyle\n" +
      "◆ \u00A0 Multi-channel adaptability → retail, pharmacy, HoReCa, gyms, online, export\n",
  },
  {
    title: "How does Healthy Cola make money?",
    content:
      "Healthy Cola’s five revenue streams create resilience and scale:\n\n" +
      "◆ \u00A0 B2B distribution → retail chains, pharmacies, gyms, distributors\n" +
      "◆ \u00A0 B2C engagement → direct partnerships with consumers in local markets\n" +
      "◆ \u00A0 E-commerce / DTC → digital-first presence on delivery platforms and brand-owned channels\n" +
      "◆ \u00A0 HoReCa sales → hotels, restaurants, cafés, gyms\n" +
      "◆ \u00A0 Export model → raw and finished product exports via logistics hubs (e.g., UAE, Germany)\n",
  },
  {
    title: "What traction has been achieved?",
    content:
      "◆ \u00A0 16 countries live across GCC, MENA, Levant, North America, Africa, Central Asia, and Russia\n" +
      "◆ \u00A0  Distribution across pharmacies, gyms, cafés, mini-markets, and retail stores\n" +
      "◆ \u00A0 Building awareness as the world’s first guilt-free cola with global scale\n",
  },
  {
    title: "How will the product expand globally in the coming years?",
    content:
      "◆ \u00A0 2026: expand from 16 to 22–30 markets.\n" +
      "◆ \u00A0 2027: expand to 30–40 markets\n" +
      "◆ \u00A0 2028: expand to 40–50 markets\n" +
      "◆ \u00A0 2029–2030: 50+ countries worldwide\n" +
      "◆ \u00A0 By 2030: $200M+ revenues and >15% EBITDA margin\n",
  },
  {
    title: "Why Healthy Cola?",
    content:
      "Healthy Cola is powered by a professional leadership team with deep expertise in FMCG, health, and international expansion. The team brings together seasoned executives across operations, marketing, sales, and finance, each with a proven track record of building successful consumer brands.\n\nAt the helm is Dr. Ashraf Siam, CEO — a visionary leader with 20+ years of global experience in FMCG and health-focused businesses, bridging both academic strategy and hands-on execution. Under his guidance, Healthy Cola is positioned to become the world’s first truly global guilt-free cola movement.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Gregory Placsintar",
    position: "Advisor – Private Equity ",
    image: "/assets/images/team/team1.png",
  },
  {
    name: "Dr. Alberto Muñoz",
    position: "Advisor – Economics & Blockchain ",
    image: "/assets/images/team/team2.png",
  },
  {
    name: "Dr. Bálint Noll",
    position: "Advisor – Legal Structuring ",
    image: "/assets/images/team/team3.png",
  },
  {
    name: "Kalman Hegyi",
    position: "Advisor – Digital Product",
    image: "/assets/images/team/team4.png",
  },
];

export interface ChainlinkPriceFeed {
  name: string;
  address: Address;
  decimals: number;
  description: string;
}

export const CHAINLINK_PRICE_FEEDS: Record<string, ChainlinkPriceFeed> = {
  "ETH/USD": {
    name: "ETH/USD",
    address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    decimals: 8,
    description: "ETH / USD",
  },
  "USDT/USD": {
    name: "USDT/USD",
    address: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
    decimals: 8,
    description: "USDT / USD",
  },
} as const;

export type PriceFeedKey = keyof typeof CHAINLINK_PRICE_FEEDS;

export const BUY_TOKEN_URL = "https://token.healthycola.com";
export const TOKEN_SYMBOL = "HEALTH";
export const TOKEN_NAME = "Healthy Cola Token";
