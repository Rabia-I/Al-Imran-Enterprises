import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "sugar-mills",
    name: "Sugar Mills",
    problems: ["Centrifugal machine stoppage", "Imported part failure", "Encoder and sensor mismatch", "Burner and panel downtime"],
    requiredParts: ["encoders", "plc", "sensors", "magnetic-contactors", "burner-controls"],
    brandsUsed: ["Siemens", "ABB", "Schneider Electric", "Honeywell", "Endress+Hauser", "VEGA", "Yokogawa", "Danfoss", "Emerson", "IFM Electronic", "Sick", "Burkert", "Omron", "Fuji Electric", "Eaton", "Hohner Encoders", "Lika Electronics"],
    servicesNeeded: ["obsolete-part-sourcing", "imported-machine-parts", "emergency-procurement"]
  },
  {
    slug: "pharmaceutical-plants",
    name: "Pharmaceutical Plants",
    problems: ["Process control drift", "Safety compliance failures", "Pressure transmitter mismatch", "PLC replacement needs"],
    requiredParts: ["pressure-switches", "transmitters", "plc", "safety-relays"],
    brandsUsed: ["Endress+Hauser", "Siemens", "Schneider Electric", "ABB", "Allen-Bradley", "Omron", "Keyence", "Sick", "Mettler Toledo", "Yokogawa", "Phoenix Contact", "Pilz", "Huba Control", "Datexel"],
    servicesNeeded: ["obsolete-part-sourcing", "imported-machine-parts"]
  },
  {
    slug: "cement-plants",
    name: "Cement Plants",
    problems: ["Dust-exposed sensors", "Motor protection faults", "Level detection failures", "Burner control issues"],
    requiredParts: ["level-switches", "circuit-breakers", "flow-switches", "burner-controls"],
    brandsUsed: ["ABB", "Siemens", "Schneider Electric", "WEG", "Danfoss", "Fluke", "Endress+Hauser", "Sick", "Phoenix Contact", "Eaton", "Carlo Gavazzi", "Brahma", "Hohner Encoders"],
    servicesNeeded: ["imported-machine-parts", "emergency-procurement"]
  },
  {
    slug: "textile-mills",
    name: "Textile Mills",
    problems: ["Production line stoppage", "Sensor failure", "Motor starter faults", "Safety relay errors"],
    requiredParts: ["sensors", "safety-relays", "magnetic-contactors", "timers-counters"],
    brandsUsed: ["Siemens", "Delta Electronics", "Mitsubishi Electric", "Omron", "Schneider Electric", "ABB", "Yaskawa", "Keyence", "Autonics", "Pilz", "Fuji Electric", "Datasensing"],
    servicesNeeded: ["emergency-procurement", "obsolete-part-sourcing"]
  },
  {
    slug: "fertilizer-industry",
    name: "Fertilizer/Chemical",
    problems: ["Instrumentation failure", "Panel protection faults", "Process relay issues", "Pressure switch failure"],
    requiredParts: ["transmitters", "pressure-switches", "circuit-breakers", "monitoring-relays"],
    brandsUsed: ["Honeywell", "Yokogawa", "Emerson", "Endress+Hauser", "Siemens", "ABB", "Schneider Electric", "VEGA", "Burkert", "ASCO", "Eaton", "Fuji Electric", "Huba Control", "Carlo Gavazzi"],
    servicesNeeded: ["imported-machine-parts", "obsolete-part-sourcing"]
  },
  {
    slug: "oil-gas-refineries",
    name: "Oil & Gas/Refineries",
    problems: ["Hazardous area requirements", "Extreme pressure sensing", "Remote monitoring needs", "Safety instrumented systems"],
    requiredParts: ["transmitters", "flow-meters", "valves", "safety-systems"],
    brandsUsed: ["Emerson", "Rosemount", "Honeywell", "Yokogawa", "Siemens", "Schneider Electric", "ABB", "Endress+Hauser", "VEGA", "Pepperl+Fuchs", "Turck"],
    servicesNeeded: ["imported-machine-parts", "obsolete-part-sourcing", "emergency-procurement"]
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    problems: ["Burner control faults", "Flow switch failure", "Sensor washdown damage", "Level control issues"],
    requiredParts: ["burner-controls", "flow-switches", "sensors", "level-switches"],
    brandsUsed: ["Brahma", "Carlo Gavazzi", "Datasensing", "Huba Control", "Omron", "Fuji Electric"],
    servicesNeeded: ["emergency-procurement", "imported-machine-parts"]
  }
];
