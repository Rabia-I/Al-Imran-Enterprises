import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "sugar-mills",
    name: "Sugar Mills",
    problems: ["Centrifugal machine stoppage", "Imported part failure", "Encoder and sensor mismatch", "Burner and panel downtime"],
    requiredParts: ["encoders", "plc", "sensors", "magnetic-contactors", "burner-controls"],
    brandsUsed: ["Omron", "Fuji Electric", "Eaton", "Hohner Encoders", "Lika Electronics"],
    servicesNeeded: ["obsolete-part-sourcing", "imported-machine-parts", "emergency-procurement"]
  },
  {
    slug: "textile-mills",
    name: "Textile Mills",
    problems: ["Production line stoppage", "Sensor failure", "Motor starter faults", "Safety relay errors"],
    requiredParts: ["sensors", "safety-relays", "magnetic-contactors", "timers-counters"],
    brandsUsed: ["Omron", "Pilz", "Fuji Electric", "Datasensing"],
    servicesNeeded: ["emergency-procurement", "obsolete-part-sourcing"]
  },
  {
    slug: "cement-plants",
    name: "Cement Plants",
    problems: ["Dust-exposed sensors", "Motor protection faults", "Level detection failures", "Burner control issues"],
    requiredParts: ["level-switches", "circuit-breakers", "flow-switches", "burner-controls"],
    brandsUsed: ["Eaton", "Carlo Gavazzi", "Brahma", "Hohner Encoders"],
    servicesNeeded: ["imported-machine-parts", "emergency-procurement"]
  },
  {
    slug: "pharmaceutical-plants",
    name: "Pharmaceutical Plants",
    problems: ["Process control drift", "Safety compliance failures", "Pressure transmitter mismatch", "PLC replacement needs"],
    requiredParts: ["pressure-switches", "transmitters", "plc", "safety-relays"],
    brandsUsed: ["Omron", "Pilz", "Huba Control", "Datexel"],
    servicesNeeded: ["obsolete-part-sourcing", "imported-machine-parts"]
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    problems: ["Burner control faults", "Flow switch failure", "Sensor washdown damage", "Level control issues"],
    requiredParts: ["burner-controls", "flow-switches", "sensors", "level-switches"],
    brandsUsed: ["Brahma", "Carlo Gavazzi", "Datasensing", "Huba Control"],
    servicesNeeded: ["emergency-procurement", "imported-machine-parts"]
  },
  {
    slug: "fertilizer-industry",
    name: "Fertilizer Industry",
    problems: ["Instrumentation failure", "Panel protection faults", "Process relay issues", "Pressure switch failure"],
    requiredParts: ["transmitters", "pressure-switches", "circuit-breakers", "monitoring-relays"],
    brandsUsed: ["Eaton", "Fuji Electric", "Huba Control", "Carlo Gavazzi"],
    servicesNeeded: ["imported-machine-parts", "obsolete-part-sourcing"]
  }
];
