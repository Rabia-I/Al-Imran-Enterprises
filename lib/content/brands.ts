import type { Brand } from "./types";

export const brands: Brand[] = [
  // Tier 1 (Global Leaders)
  {
    slug: "siemens-pakistan",
    name: "Siemens",
    headline: "Siemens PLCs, Drives and Industrial Automation in Pakistan",
    description: "Sourcing Siemens S7 PLCs, VFDs, switchgear and industrial software for mills and process plants.",
    products: ["plc", "vfds", "circuit-breakers", "hmis"],
    industries: ["sugar-mills", "pharmaceutical-plants", "cement-plants", "textile-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["obsolete-part-sourcing", "imported-machine-parts"],
    faqs: [{ question: "Do you source Siemens S7-300 or S7-400 parts?", answer: "Yes, we specialize in sourcing both current and obsolete Siemens automation components." }]
  },
  {
    slug: "schneider-electric-pakistan",
    name: "Schneider Electric",
    headline: "Schneider Electric Switchgear and Automation in Pakistan",
    description: "Supply of Schneider Electric circuit breakers, contactors, PLCs and variable speed drives.",
    products: ["circuit-breakers", "magnetic-contactors", "plc", "vfds"],
    industries: ["sugar-mills", "pharmaceutical-plants", "cement-plants", "textile-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["emergency-procurement", "panel-builder-supply"],
    faqs: [{ question: "Can you provide Schneider Modicon PLCs?", answer: "Yes, we source Schneider Modicon series and Magelis HMI replacement parts." }]
  },
  {
    slug: "abb-pakistan",
    name: "ABB",
    headline: "ABB Drives, Motors and Control Systems in Pakistan",
    description: "Industrial ABB parts including VFDs, motors, soft starters and instrumentation for heavy industry.",
    products: ["vfds", "soft-starters", "transmitters", "circuit-breakers"],
    industries: ["sugar-mills", "pharmaceutical-plants", "cement-plants", "textile-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts", "emergency-procurement"],
    faqs: [{ question: "Which ABB VFD series can you source?", answer: "We can source parts for ACS series drives and various ABB instrumentation models." }]
  },
  {
    slug: "allen-bradley-pakistan",
    name: "Allen-Bradley",
    headline: "Allen-Bradley PLCs and ControlLogix in Pakistan",
    description: "Sourcing Allen-Bradley (Rockwell Automation) PLCs, I/O modules and industrial control components.",
    products: ["plc", "io-modules", "hmis", "relays"],
    industries: ["pharmaceutical-plants", "sugar-mills", "food-processing"],
    services: ["obsolete-part-sourcing", "imported-machine-parts"],
    faqs: [{ question: "Do you source Allen-Bradley ControlLogix modules?", answer: "Yes, we help source Rockwell/Allen-Bradley parts for imported production lines." }]
  },
  {
    slug: "honeywell-pakistan",
    name: "Honeywell",
    headline: "Honeywell Process Controls and Sensors in Pakistan",
    description: "Honeywell industrial sensors, controllers and process instrumentation for refined manufacturing.",
    products: ["transmitters", "sensors", "burner-controls", "control-valves"],
    industries: ["sugar-mills", "fertilizer-industry", "oil-gas-refineries", "pharmaceutical-plants"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Can you source Honeywell burner controllers?", answer: "Yes, we source Honeywell combustion and process control components." }]
  },
  {
    slug: "emerson-pakistan",
    name: "Emerson",
    headline: "Emerson & Rosemount Instrumentation in Pakistan",
    description: "High-precision Emerson and Rosemount transmitters, valves and process control hardware.",
    products: ["transmitters", "control-valves", "flow-instrumentation"],
    industries: ["sugar-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Do you provide Rosemount pressure transmitters?", answer: "Yes, Rosemount (an Emerson brand) is a frequently sourced brand for our refinery and chemical clients." }]
  },
  {
    slug: "yokogawa-pakistan",
    name: "Yokogawa",
    headline: "Yokogawa Control and Measurement in Pakistan",
    description: "Yokogawa analyzers, transmitters and control system parts for process industries.",
    products: ["transmitters", "flow-instrumentation", "scada"],
    industries: ["sugar-mills", "pharmaceutical-plants", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Yokogawa flow meters?", answer: "Yes, we handle Yokogawa instrumentation sourcing for process plants." }]
  },
  {
    slug: "endress-hauser-pakistan",
    name: "Endress+Hauser",
    headline: "Endress+Hauser Level and Flow Sourcing in Pakistan",
    description: "Endress+Hauser instrumentation for level, flow, pressure and temperature measurement.",
    products: ["level-switches", "transmitters", "flow-instrumentation"],
    industries: ["sugar-mills", "pharmaceutical-plants", "cement-plants", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you supply Endress+Hauser level sensors?", answer: "Yes, we source E+H instrumentation for various liquid and solid applications." }]
  },

  // Tier 2 (Automation + Sensors)
  {
    slug: "omron-pakistan",
    name: "Omron",
    headline: "Omron automation parts supplier in Pakistan",
    description: "Genuine Omron PLCs, sensors, relays, timers, counters and industrial control parts sourced for mills and plants across Pakistan.",
    products: ["plc", "sensors", "timers-counters", "safety-relays"],
    industries: ["sugar-mills", "textile-mills", "pharmaceutical-plants", "food-processing"],
    services: ["obsolete-part-sourcing", "imported-machine-parts"],
    faqs: [
      { question: "Can Al Imran Enterprises source Omron part numbers in Pakistan?", answer: "Yes. Share the model number, part number or a clear photo and the team will verify availability or import options." },
      { question: "Do you help identify Omron replacements?", answer: "Yes. The quote process supports basic descriptions and supporting documents for technical review." }
    ]
  },
  {
    slug: "ifm-electronic-pakistan",
    name: "IFM Electronic",
    headline: "IFM Electronic Sensors and Networking in Pakistan",
    description: "IFM Electronic proximity sensors, pressure sensors and IO-Link modules for industrial networking.",
    products: ["sensors", "transmitters", "io-modules"],
    industries: ["sugar-mills", "food-processing", "pharmaceutical-plants"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Can you source IFM flow sensors?", answer: "Yes, we source IFM Electronic components for process and machine automation." }]
  },
  {
    slug: "sick-pakistan",
    name: "Sick",
    headline: "Sick Sensor Intelligence in Pakistan",
    description: "Sick photoelectric sensors, encoders and safety systems for industrial automation.",
    products: ["sensors", "encoders", "safety-sensors", "light-curtains"],
    industries: ["sugar-mills", "pharmaceutical-plants", "cement-plants", "textile-mills"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Do you source Sick safety light curtains?", answer: "Yes, we source Sick sensors and safety components for machine protection." }]
  },
  {
    slug: "pepperl-fuchs-pakistan",
    name: "Pepperl+Fuchs",
    headline: "Pepperl+Fuchs Barriers and Sensors in Pakistan",
    description: "P+F intrinsic safety barriers, encoders and proximity sensors for hazardous and industrial areas.",
    products: ["sensors", "encoders", "safety-systems"],
    industries: ["oil-gas-refineries", "fertilizer-industry", "pharmaceutical-plants"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Can you source P+F isolation barriers?", answer: "Yes, we source Pepperl+Fuchs intrinsically safe components." }]
  },
  {
    slug: "balluff-pakistan",
    name: "Balluff",
    headline: "Balluff Sensors and RFID in Pakistan",
    description: "Balluff industrial sensors, linear position transducers and connectivity solutions.",
    products: ["sensors", "linear-encoders", "connectors"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Balluff proximity switches?", answer: "Yes, we handle sourcing for Balluff's extensive sensor range." }]
  },
  {
    slug: "baumer-pakistan",
    name: "Baumer",
    headline: "Baumer Precision Sensors and Encoders in Pakistan",
    description: "Baumer encoders, sensors and instrumentation for precision industrial measurement.",
    products: ["sensors", "encoders", "transmitters"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Baumer Thalheim encoders?", answer: "Yes, we source Baumer encoders and sensing technology for imported machinery." }]
  },
  {
    slug: "turck-pakistan",
    name: "Turck",
    headline: "Turck Sensors and Connectivity in Pakistan",
    description: "Turck industrial automation parts including sensors, fieldbus technology and connectors.",
    products: ["sensors", "io-modules", "connectors"],
    industries: ["oil-gas-refineries", "food-processing", "textile-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Turck proximity sensors?", answer: "Yes, we provide Turck components for industrial automation systems." }]
  },
  {
    slug: "keyence-pakistan",
    name: "Keyence",
    headline: "Keyence Sensors and Vision Systems in Pakistan",
    description: "Sourcing for Keyence sensors, laser markers and vision systems for high-end automation.",
    products: ["sensors", "safety-sensors", "light-curtains"],
    industries: ["pharmaceutical-plants", "textile-mills", "food-processing"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Can you source Keyence fiber optic sensors?", answer: "Yes, we help source Keyence parts for advanced production machinery." }]
  },
  {
    slug: "autonics-pakistan",
    name: "Autonics",
    headline: "Autonics Sensors and Controllers in Pakistan",
    description: "Affordable Autonics sensors, counters, timers and temperature controllers.",
    products: ["sensors", "timers-counters", "temperature-instrumentation"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["emergency-procurement"],
    faqs: [{ question: "Do you source Autonics encoders?", answer: "Yes, Autonics is a common brand we source for cost-effective automation." }]
  },

  // Tier 3 (Drives + Motion)
  {
    slug: "danfoss-pakistan",
    name: "Danfoss",
    headline: "Danfoss Drives and Power Electronics in Pakistan",
    description: "Danfoss VLT drives, pressure transmitters and temperature sensors for industrial use.",
    products: ["vfds", "transmitters", "pressure-switches"],
    industries: ["sugar-mills", "cement-plants", "food-processing"],
    services: ["imported-machine-parts", "emergency-procurement"],
    faqs: [{ question: "Can you source Danfoss VLT drive parts?", answer: "Yes, we source Danfoss drives and instrumentation for process plants." }]
  },
  {
    slug: "yaskawa-pakistan",
    name: "Yaskawa",
    headline: "Yaskawa Drives and Servo Motors in Pakistan",
    description: "Yaskawa VFDs, servo drives and motors for precise motion control in Pakistan.",
    products: ["vfds", "servo-systems"],
    industries: ["textile-mills", "sugar-mills", "food-processing"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Yaskawa inverter spare parts?", answer: "Yes, we help source Yaskawa drives and motion control components." }]
  },
  {
    slug: "mitsubishi-electric-pakistan",
    name: "Mitsubishi Electric",
    headline: "Mitsubishi Electric Automation in Pakistan",
    description: "Mitsubishi PLCs, HMIs and VFDs for industrial automation and control systems.",
    products: ["plc", "hmis", "vfds"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["obsolete-part-sourcing", "imported-machine-parts"],
    faqs: [{ question: "Can you source Mitsubishi FR-series VFDs?", answer: "Yes, we source various Mitsubishi Electric automation parts." }]
  },
  {
    slug: "fuji-electric-pakistan",
    name: "Fuji Electric",
    headline: "Fuji Electric controls and electrical parts in Pakistan",
    description: "Supply support for Fuji Electric breakers, contactors, overload relays, starters and industrial control equipment.",
    products: ["circuit-breakers", "magnetic-contactors", "dol-starters", "vfds"],
    industries: ["sugar-mills", "cement-plants", "fertilizer-industry", "textile-mills"],
    services: ["emergency-procurement", "imported-machine-parts"],
    faqs: [{ question: "Which Fuji Electric items are commonly requested?", answer: "Breakers, contactors, overload relays, motor protection items and control panel components are frequent requests." }]
  },
  {
    slug: "weg-pakistan",
    name: "WEG",
    headline: "WEG Motors and Drives in Pakistan",
    description: "WEG industrial motors, soft starters and variable frequency drives for heavy machinery.",
    products: ["vfds", "soft-starters", "circuit-breakers"],
    industries: ["cement-plants", "sugar-mills", "fertilizer-industry"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source WEG soft starters?", answer: "Yes, we provide sourcing support for WEG electrical and motor control products." }]
  },

  // Tier 4 (Valves + Process)
  {
    slug: "burkert-pakistan",
    name: "Burkert",
    headline: "Burkert Fluid Control Systems in Pakistan",
    description: "Burkert solenoid valves, process valves and flow sensors for fluid control.",
    products: ["solenoid-valves", "control-valves", "flow-instrumentation"],
    industries: ["sugar-mills", "pharmaceutical-plants", "fertilizer-industry", "food-processing"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Burkert pneumatic valves?", answer: "Yes, we source Burkert fluid and process control components." }]
  },
  {
    slug: "asco-pakistan",
    name: "ASCO",
    headline: "ASCO Solenoid Valves and Pneumatics in Pakistan",
    description: "ASCO solenoid valves and pressure switches for industrial fluid and gas control.",
    products: ["solenoid-valves", "pressure-switches"],
    industries: ["fertilizer-industry", "oil-gas-refineries", "sugar-mills"],
    services: ["imported-machine-parts", "emergency-procurement"],
    faqs: [{ question: "Do you provide ASCO RedHat valves?", answer: "Yes, we source ASCO solenoid valves for various industrial applications." }]
  },
  {
    slug: "norgren-pakistan",
    name: "Norgren",
    headline: "Norgren Pneumatics and Motion Control in Pakistan",
    description: "Norgren pneumatic cylinders, valves and air preparation equipment.",
    products: ["solenoid-valves", "pressure-switches", "actuators"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Norgren air filters and regulators?", answer: "Yes, we source Norgren pneumatic and fluid control parts." }]
  },
  {
    slug: "samson-pakistan",
    name: "Samson",
    headline: "Samson Control Valves and Positioners in Pakistan",
    description: "Samson process control valves, actuators and valve positioners for industrial plants.",
    products: ["control-valves", "actuators"],
    industries: ["sugar-mills", "fertilizer-industry", "pharmaceutical-plants"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Samson valve positioners?", answer: "Yes, we handle Samson process instrumentation and valve parts." }]
  },
  {
    slug: "gemu-pakistan",
    name: "GEMÜ",
    headline: "GEMÜ Valves and Control Systems in Pakistan",
    description: "GEMÜ diaphragm valves, plastic valves and process control instrumentation.",
    products: ["control-valves", "solenoid-valves"],
    industries: ["pharmaceutical-plants", "food-processing", "fertilizer-industry"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source GEMÜ diaphragm valves?", answer: "Yes, we specialize in sourcing GEMÜ parts for pharmaceutical and process lines." }]
  },
  {
    slug: "arca-pakistan",
    name: "ARCA",
    headline: "ARCA Regler Control Valves in Pakistan",
    description: "ARCA control valves and process instrumentation for power and process plants.",
    products: ["control-valves", "actuators"],
    industries: ["sugar-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source ARCA valve parts?", answer: "Yes, we help source ARCA Regler valves and control components." }]
  },

  // Tier 5 (Niche Brands)
  {
    slug: "eaton-pakistan",
    name: "Eaton",
    headline: "Eaton pressure switches, breakers and controls in Pakistan",
    description: "Eaton industrial electrical and instrumentation parts for maintenance teams that need trusted local sourcing.",
    products: ["pressure-switches", "circuit-breakers", "monitoring-relays", "vfds", "soft-starters"],
    industries: ["sugar-mills", "cement-plants", "food-processing", "fertilizer-industry"],
    services: ["obsolete-part-sourcing", "emergency-procurement"],
    faqs: [{ question: "Can you quote Eaton by model number?", answer: "Yes. Send the exact Eaton model or part number through WhatsApp, email or the quote form." }]
  },
  {
    slug: "pilz-pakistan",
    name: "Pilz",
    headline: "Pilz safety relay supplier in Pakistan",
    description: "Pilz safety relays, safety controllers and machine safety components for industrial automation applications.",
    products: ["safety-relays", "safety-sensors", "light-curtains"],
    industries: ["textile-mills", "pharmaceutical-plants", "food-processing"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "Do you source Pilz safety relays?", answer: "Yes. Al Imran Enterprises can review part numbers and quote Pilz safety components." }]
  },
  {
    slug: "carlo-gavazzi-pakistan",
    name: "Carlo Gavazzi",
    headline: "Carlo Gavazzi sensors and monitoring relays in Pakistan",
    description: "Carlo Gavazzi sensors, monitoring relays, level controls and automation components for industrial systems.",
    products: ["sensors", "monitoring-relays", "level-switches", "flow-instrumentation"],
    industries: ["cement-plants", "food-processing", "fertilizer-industry"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you help with Carlo Gavazzi alternatives?", answer: "Yes. Share the existing rating, model and application so a compatible option can be checked." }]
  },
  {
    slug: "brahma-pakistan",
    name: "Brahma",
    headline: "Brahma burner controls and ignition parts in Pakistan",
    description: "Brahma burner controllers, ignition relays, solenoid valves, UV sensors and flame supervision parts.",
    products: ["burner-controls", "solenoid-valves", "gas-detection"],
    industries: ["food-processing", "textile-mills", "cement-plants"],
    services: ["emergency-procurement", "imported-machine-parts"],
    faqs: [{ question: "What Brahma details are needed for a quote?", answer: "Send the burner controller model, voltage, flame sensor type and any photos of the label." }]
  },
  {
    slug: "huba-control-pakistan",
    name: "Huba Control",
    headline: "Huba Control pressure transmitters and switches in Pakistan",
    description: "Huba Control pressure switches, transmitters and fluid control instrumentation for plant maintenance.",
    products: ["pressure-switches", "transmitters", "flow-instrumentation"],
    industries: ["pharmaceutical-plants", "food-processing", "fertilizer-industry"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can Huba Control pressure ranges be matched?", answer: "Yes. Include pressure range, output signal, process connection and medium when requesting a quote." }]
  },
  {
    slug: "datasensing-pakistan",
    name: "Datasensing",
    headline: "Datasensing photoelectric and safety sensors in Pakistan",
    description: "Datasensing industrial sensors including photoelectric, area, safety and fork sensors.",
    products: ["sensors", "safety-sensors", "light-curtains"],
    industries: ["textile-mills", "food-processing", "pharmaceutical-plants"],
    services: ["obsolete-part-sourcing"],
    faqs: [{ question: "Do you source Datasensing by old Datalogic part numbers?", answer: "Yes. Legacy model numbers can be reviewed for direct or replacement sourcing." }]
  },
  {
    slug: "hohner-encoders-pakistan",
    name: "Hohner Encoders",
    headline: "Hohner rotary and linear encoders in Pakistan",
    description: "Hohner encoder sourcing for speed, position and automation feedback systems.",
    products: ["encoders", "rotary-encoders", "linear-encoders"],
    industries: ["sugar-mills", "textile-mills", "cement-plants"],
    services: ["imported-machine-parts", "obsolete-part-sourcing"],
    faqs: [{ question: "What encoder details should I send?", answer: "Send pulses per revolution, shaft or bore size, supply voltage, output type and label photos." }]
  },
  {
    slug: "xecro-pakistan",
    name: "Xecro",
    headline: "Xecro Sensors and Industrial Electronics in Pakistan",
    description: "Xecro proximity sensors and high-performance industrial sensing technology.",
    products: ["sensors", "proximity-sensors"],
    industries: ["textile-mills", "food-processing", "sugar-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Xecro inductive sensors?", answer: "Yes, we source Xecro sensors for machine automation." }]
  },
  {
    slug: "shinko-pakistan",
    name: "Shinko",
    headline: "Shinko Temperature Controllers in Pakistan",
    description: "Shinko Technos temperature controllers and indicators for industrial process control.",
    products: ["temperature-instrumentation", "timers-counters"],
    industries: ["textile-mills", "food-processing", "pharmaceutical-plants"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Shinko PID controllers?", answer: "Yes, we handle sourcing for Shinko temperature and process control items." }]
  },
  {
    slug: "cofi-ignitions-pakistan",
    name: "Cofi Ignitions",
    headline: "Cofi Ignition Transformers in Pakistan",
    description: "Cofi ignition transformers and related burner ignition components.",
    products: ["gas-combustion", "burner-controls"],
    industries: ["food-processing", "textile-mills", "cement-plants"],
    services: ["emergency-procurement"],
    faqs: [{ question: "Can you source Cofi ignition transformers?", answer: "Yes, we source Cofi parts for industrial burner systems." }]
  },
  {
    slug: "datexel-pakistan",
    name: "Datexel",
    headline: "Datexel Signal Conditioners and Transmitters in Pakistan",
    description: "Datexel signal conditioners, isolators and temperature transmitters.",
    products: ["transmitters", "temperature-instrumentation", "flow-instrumentation"],
    industries: ["pharmaceutical-plants", "fertilizer-industry", "food-processing"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Datexel signal isolators?", answer: "Yes, we provide Datexel instrumentation and signal conditioning parts." }]
  },
  {
    slug: "riko-pakistan",
    name: "RIKO",
    headline: "RIKO Sensors and Level Controls in Pakistan",
    description: "RIKO sensors and float switches for industrial level and position sensing.",
    products: ["sensors", "level-switches"],
    industries: ["food-processing", "sugar-mills", "textile-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source RIKO fiber optic sensors?", answer: "Yes, we source RIKO sensing and level control components." }]
  },
  {
    slug: "caem-pakistan",
    name: "Caem",
    headline: "Caem Industrial Thermostats in Pakistan",
    description: "Caem capillary thermostats and temperature control components for industrial heating.",
    products: ["temperature-instrumentation"],
    industries: ["food-processing", "textile-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Caem thermostats?", answer: "Yes, we provide Caem temperature control parts for machinery." }]
  },
  {
    slug: "fantini-cosmi-pakistan",
    name: "Fantini Cosmi",
    headline: "Fantini Cosmi Controls and Level Switches in Pakistan",
    description: "Fantini Cosmi level switches, thermostats and industrial control components.",
    products: ["level-switches", "pressure-switches", "temperature-instrumentation"],
    industries: ["sugar-mills", "food-processing", "fertilizer-industry"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Fantini Cosmi level regulators?", answer: "Yes, we handle Fantini Cosmi industrial control and sensing parts." }]
  },
  {
    slug: "lika-electronics-pakistan",
    name: "Lika Electronics",
    headline: "Lika encoder and position control parts in Pakistan",
    description: "Lika Electronics encoders and position measurement parts for industrial automation and machinery.",
    products: ["encoders", "rotary-encoders", "linear-encoders"],
    industries: ["cement-plants", "textile-mills", "sugar-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you quote Lika encoders for imported machines?", answer: "Yes. Imported machine part sourcing is a core service." }]
  },
  {
    slug: "ascon-tecnologic-pakistan",
    name: "Ascon Tecnologic",
    headline: "Ascon Tecnologic Controllers in Pakistan",
    description: "Ascon Tecnologic PID controllers, indicators and process control instrumentation.",
    products: ["temperature-instrumentation", "transmitters"],
    industries: ["pharmaceutical-plants", "food-processing", "textile-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Do you source Ascon Tecnologic controllers?", answer: "Yes, we provide Ascon Tecnologic instrumentation for process control." }]
  },

  // Additional Brands from Industry Meta-Tags
  {
    slug: "vega-pakistan",
    name: "VEGA",
    headline: "VEGA Level and Pressure Measurement in Pakistan",
    description: "VEGA sensors for level, switching and pressure for the process industry.",
    products: ["level-switches", "transmitters"],
    industries: ["sugar-mills", "fertilizer-industry", "oil-gas-refineries"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source VEGA radar level sensors?", answer: "Yes, we source VEGA measurement technology for various process applications." }]
  },
  {
    slug: "phoenix-contact-pakistan",
    name: "Phoenix Contact",
    headline: "Phoenix Contact Connectivity and Automation in Pakistan",
    description: "Phoenix Contact terminal blocks, power supplies and automation components.",
    products: ["terminal-blocks", "io-modules", "relays"],
    industries: ["pharmaceutical-plants", "cement-plants"],
    services: ["panel-builder-supply"],
    faqs: [{ question: "Do you source Phoenix Contact power supplies?", answer: "Yes, we handle Phoenix Contact parts for industrial panels." }]
  },
  {
    slug: "mettler-toledo-pakistan",
    name: "Mettler Toledo",
    headline: "Mettler Toledo Weighing and Analytical in Pakistan",
    description: "Mettler Toledo laboratory and industrial weighing and analytical instruments.",
    products: ["transmitters", "sensors"],
    industries: ["pharmaceutical-plants"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Mettler Toledo pH sensors?", answer: "Yes, we help source Mettler Toledo analytical and weighing components." }]
  },
  {
    slug: "fluke-pakistan",
    name: "Fluke",
    headline: "Fluke Test and Measurement Tools in Pakistan",
    description: "Fluke industrial testing equipment, thermal imagers and multimeters.",
    products: ["transmitters", "sensors"],
    industries: ["cement-plants"],
    services: ["emergency-procurement"],
    faqs: [{ question: "Do you source Fluke calibration tools?", answer: "Yes, we help source Fluke industrial test and measurement equipment." }]
  },
  {
    slug: "delta-electronics-pakistan",
    name: "Delta Electronics",
    headline: "Delta Electronics Automation and Power in Pakistan",
    description: "Delta Electronics VFDs, PLCs and power management solutions.",
    products: ["vfds", "plc", "hmis"],
    industries: ["textile-mills"],
    services: ["imported-machine-parts"],
    faqs: [{ question: "Can you source Delta VFDs?", answer: "Yes, we source Delta Electronics automation components." }]
  }
];
