import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "obsolete-part-sourcing",
    name: "Obsolete Part Sourcing",
    description: "Technical sourcing for discontinued or hard-to-find industrial electrical, electronic, instrumentation and pneumatic parts.",
    useCases: ["Old machine part replacement", "Discontinued PLC or relay", "Legacy sensor matching"],
    industries: ["sugar-mills", "textile-mills", "pharmaceutical-plants", "cement-plants"],
    ctaText: "Send the old part number"
  },
  {
    slug: "emergency-procurement",
    name: "Emergency Procurement",
    description: "Urgent sourcing support when plant equipment is down and a trusted replacement is needed quickly.",
    useCases: ["Machine breakdown", "Panel shutdown", "Production stoppage"],
    industries: ["sugar-mills", "textile-mills", "cement-plants", "food-processing"],
    ctaText: "Request urgent quote"
  },
  {
    slug: "imported-machine-parts",
    name: "Imported Machine Parts",
    description: "Imported replacement parts for machines where the exact component is not manufactured locally in Pakistan.",
    useCases: ["European machine spares", "Imported automation components", "Brand-specific replacement parts"],
    industries: ["sugar-mills", "pharmaceutical-plants", "fertilizer-industry", "food-processing"],
    ctaText: "Share machine details"
  },
  {
    slug: "crane-conductor-systems",
    name: "Crane Conductor Systems",
    description: "Insulated conductor systems, overhead crane electrical spares and related crane panel components.",
    useCases: ["Overhead crane maintenance", "Conductor replacement", "Crane electrical faults"],
    industries: ["sugar-mills", "cement-plants", "textile-mills"],
    ctaText: "Quote crane parts"
  },
  {
    slug: "panel-builder-supply",
    name: "Panel Builder Supply",
    description: "Reliable supply of breakers, contactors, relays, switches, controllers and instrumentation for panel builders.",
    useCases: ["Control panel assembly", "Replacement panel parts", "Automation panel upgrades"],
    industries: ["textile-mills", "food-processing", "fertilizer-industry"],
    ctaText: "Request panel item pricing"
  }
];
