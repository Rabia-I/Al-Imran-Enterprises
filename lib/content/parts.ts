import type { Part } from "./types";

export const parts: Part[] = [
  // Existing Parts
  { partNumber: "E2E-X5ME1", slug: "e2e-x5me1", brand: "Omron", model: "E2E inductive proximity sensor", specs: ["Inductive proximity sensing", "Common M12 style application", "Machine automation replacement"], applications: ["Position detection", "Machine interlock", "Conveyor sensing"], industries: ["textile-mills", "food-processing"], compatibility: ["Omron E2E sensor families", "Industrial control panels"] },
  { partNumber: "CP1E-N40", slug: "cp1e-n40", brand: "Omron", model: "CP1E PLC", specs: ["Compact PLC family", "Machine control", "I/O expansion capable depending on variant"], applications: ["Machine sequencing", "Panel replacement", "Automation control"], industries: ["sugar-mills", "pharmaceutical-plants"], compatibility: ["Omron CP1E systems", "PLC control panels"] },
  { partNumber: "3RV2031-4WA10", slug: "3rv2031-4wa10", brand: "Siemens", model: "Motor protection circuit breaker", specs: ["Motor protection", "Control panel component", "Industrial switching gear"], applications: ["Motor feeders", "Pump panels", "Machine panels"], industries: ["cement-plants", "textile-mills"], compatibility: ["Motor starter assemblies", "Industrial panels"] },
  { partNumber: "PNOZ X3", slug: "pnoz-x3", brand: "Pilz", model: "Safety relay", specs: ["Safety relay", "Emergency stop and safety gate circuits", "Machine safety application"], applications: ["Machine guarding", "Emergency stops", "Safety control panels"], industries: ["textile-mills", "food-processing"], compatibility: ["Pilz safety circuits", "Industrial safety panels"] },
  { partNumber: "DPA51CM44", slug: "dpa51cm44", brand: "Carlo Gavazzi", model: "Phase monitoring relay", specs: ["Phase monitoring", "Voltage supervision", "Panel protection"], applications: ["Motor protection", "Panel alarms", "Phase failure detection"], industries: ["sugar-mills", "cement-plants"], compatibility: ["Three-phase panels", "Motor control centers"] },
  { partNumber: "7/.036 4-Core PVC/PVC Copper Conductor Cable", slug: "7-036-4-core-pvc-copper-conductor-cable", brand: "General Industrial", model: "PVC/PVC copper conductor cable", specs: ["7/.036 copper conductor", "4-core cable", "PVC/PVC insulation"], applications: ["Industrial wiring", "Control panels", "Machine electrical work"], industries: ["sugar-mills", "textile-mills", "cement-plants"], compatibility: ["Industrial wiring systems", "Control panels"] },

  // Siemens - PLCs & Automation
  { partNumber: "6ES7214-1AG40-0XB0", slug: "6es7214-1ag40-0xb0", brand: "Siemens", model: "SIMATIC S7-1200 CPU 1214C", specs: ["14 DI 24V DC", "10 DO 24V DC", "2 AI 0-10V DC"], applications: ["Industrial automation", "Machine control", "Process monitoring"], industries: ["sugar-mills", "textile-mills", "cement-plants"], compatibility: ["Siemens TIA Portal", "S7-1200 accessories"] },
  { partNumber: "6ES7315-2AH14-0AB0", slug: "6es7315-2ah14-0ab0", brand: "Siemens", model: "SIMATIC S7-300 CPU 315-2 DP", specs: ["Work memory 256 KB", "MPI/DP interface", "Obsolete but in high demand"], applications: ["Legacy machine upgrades", "Plant maintenance", "Distributed I/O systems"], industries: ["sugar-mills", "cement-plants"], compatibility: ["S7-300 modules", "STEP 7 Classic"] },
  { partNumber: "6ES7511-1AK02-0AB0", slug: "6es7511-1ak02-0ab0", brand: "Siemens", model: "SIMATIC S7-1500 CPU 1511-1 PN", specs: ["Work memory 150 KB code", "1 MB data", "PROFINET IRT interface"], applications: ["High-performance automation", "Complex machine control"], industries: ["pharmaceutical-plants", "food-processing"], compatibility: ["TIA Portal V15 or higher", "S7-1500 system modules"] },
  { partNumber: "6AV2123-2GB03-0AX0", slug: "6av2123-2gb03-0ax0", brand: "Siemens", model: "SIMATIC HMI KTP700 Basic", specs: ["7-inch TFT display", "800 x 480 pixels", "PROFINET interface"], applications: ["Operator interface", "Machine visualization", "Process control"], industries: ["manufacturing-plants", "food-processing"], compatibility: ["S7-1200 PLCs", "WinCC Basic"] },

  // Siemens - Drives (VFDs)
  { partNumber: "6SL3210-1KE11-8AB1", slug: "6sl3210-1ke11-8ab1", brand: "Siemens", model: "SINAMICS G120C", specs: ["Rated power 0.75 kW", "3-phase 380-480V AC", "Integrated PROFINET"], applications: ["Conveyor drives", "Pump control", "Fan speed regulation"], industries: ["manufacturing-plants", "textile-mills"], compatibility: ["Siemens Startdrive", "Standard induction motors"] },
  { partNumber: "6SE6440-2UD17-5AA1", slug: "6se6440-2ud17-5aa1", brand: "Siemens", model: "MICROMASTER 440", specs: ["Rated power 0.75 kW", "3-phase 380-480V AC", "Vector control"], applications: ["Obsolete drive replacement", "High torque applications"], industries: ["sugar-mills", "textile-mills"], compatibility: ["Legacy Siemens drive systems"] },

  // Omron - PLCs & Sensors
  { partNumber: "CP1H-X40DT-D", slug: "cp1h-x40dt-d", brand: "Omron", model: "CP1H Series PLC", specs: ["24 DI", "16 DO", "Transistor outputs"], applications: ["Packaging machines", "Advanced automation", "Positioning control"], industries: ["pharmaceutical-plants", "food-processing"], compatibility: ["CX-Programmer", "Omron NS series HMIs"] },
  { partNumber: "E3Z-D62", slug: "e3z-d62", brand: "Omron", model: "Photoelectric Sensor", specs: ["Diffuse-reflective", "Sensing distance 1m", "NPN output"], applications: ["Object detection", "Box counting", "Conveyor monitoring"], industries: ["packaging", "textile-mills"], compatibility: ["Standard industrial controllers", "M8 connector cables"] },
  { partNumber: "E5CC-RX2ASM-800", slug: "e5cc-rx2asm-800", brand: "Omron", model: "Digital Temperature Controller", specs: ["48x48mm size", "Relay output", "Universal input"], applications: ["Oven control", "Heat sealing", "Process heating"], industries: ["food-processing", "pharmaceutical-plants"], compatibility: ["Thermocouples", "RTD sensors"] },

  // ABB - VFDs & Controls
  { partNumber: "ACS355-03E-05A6-4", slug: "acs355-03e-05a6-4", brand: "ABB", model: "ACS355 Machinery Drive", specs: ["2.2 kW (3 HP)", "3-phase 380-480V", "IP20 enclosure"], applications: ["Mixers", "Conveyors", "Winding machines"], industries: ["sugar-mills", "cement-plants"], compatibility: ["ABB FlashDrop", "AC induction motors"] },
  { partNumber: "ACS550-01-031A-4", slug: "acs550-01-031a-4", brand: "ABB", model: "ACS550 General Purpose Drive", specs: ["15 kW", "3-phase 380-480V", "Integrated EMC filter"], applications: ["Centrifugal pumps", "Industrial fans", "Compressors"], industries: ["sugar-mills", "cement-plants", "fertilizer-industry"], compatibility: ["Assistant Control Panel", "DriveWindow Light"] },
  { partNumber: "AF16-30-10-13", slug: "af16-30-10-13", brand: "ABB", model: "3-Pole Contactor", specs: ["16A rated current", "100-250V AC/DC coil", "DIN rail mounting"], applications: ["Motor switching", "Lighting control", "Power circuit isolation"], industries: ["cement-plants", "textile-mills"], compatibility: ["ABB AF contactor range", "Electronic timers"] },

  // Schneider - Switchgear & Automation
  { partNumber: "LC1D12BL", slug: "lc1d12bl", brand: "Schneider Electric", model: "TeSys D Contactor", specs: ["12A (AC-3)", "3-pole", "24V DC low consumption coil"], applications: ["Motor control", "Resistive loads", "Automation panels"], industries: ["textile-mills", "manufacturing-plants"], compatibility: ["Schneider TeSys accessories", "LRD overload relays"] },
  { partNumber: "ATV320U04M2C", slug: "atv320u04m2c", brand: "Schneider Electric", model: "Altivar Machine ATV320", specs: ["0.37 kW", "1-phase 200-240V", "Compact format"], applications: ["Small machines", "Packaging lines", "Simple conveyors"], industries: ["food-processing", "pharmaceutical-plants"], compatibility: ["Schneider SoMove software", "CANopen/Modbus"] },
  { partNumber: "TM221CE16R", slug: "tm221ce16r", brand: "Schneider Electric", model: "Modicon M221 PLC", specs: ["9 DI", "7 Relay outputs", "Ethernet port"], applications: ["Small automation projects", "Pump control", "HVAC systems"], industries: ["fertilizer-industry", "manufacturing-plants"], compatibility: ["EcoStruxure Machine Expert - Basic", "Magelis HMIs"] },

  // Allen-Bradley (Rockwell) - PLCs
  { partNumber: "1769-L33ER", slug: "1769-l33er", brand: "Allen-Bradley", model: "CompactLogix 5370 L3 Controller", specs: ["2 MB user memory", "Dual Ethernet ports", "Up to 16 expansion modules"], applications: ["High-speed machine control", "Plant-wide networking"], industries: ["pharmaceutical-plants", "food-processing"], compatibility: ["Studio 5000 Logix Designer", "1769 I/O modules"] },
  { partNumber: "1762-L24BWA", slug: "1762-l24bwa", brand: "Allen-Bradley", model: "MicroLogix 1200", specs: ["14 DI 24V DC", "10 Relay outputs", "120/240V AC power"], applications: ["Legacy machine control", "Stand-alone automation"], industries: ["sugar-mills", "textile-mills"], compatibility: ["RSLogix 500", "1762 expansion I/O"] },

  // Mean Well - Power Supplies
  { partNumber: "LRS-350-24", slug: "lrs-350-24", brand: "Mean Well", model: "Enclosed Switching Power Supply", specs: ["24V DC output", "14.6A current", "350W power"], applications: ["Control panel power", "LED strips", "Automation equipment"], industries: ["industrial-automation", "manufacturing-plants"], compatibility: ["Standard industrial cabinets"] },
  { partNumber: "NDR-120-24", slug: "ndr-120-24", brand: "Mean Well", model: "DIN Rail Power Supply", specs: ["24V DC output", "5A current", "Slim design"], applications: ["PLC power supply", "Sensor excitation", "Industrial controls"], industries: ["industrial-automation", "pharmaceutical-plants"], compatibility: ["TS-35/7.5 or 15 DIN rails"] },

  // Sick - Sensors & Encoders
  { partNumber: "WL12-3P2431", slug: "wl12-3p2431", brand: "Sick", model: "Photoelectric Retro-reflective Sensor", specs: ["Sensing range 4m", "PNP output", "M12 connector"], applications: ["Pallet detection", "Conveyor gating", "Object positioning"], industries: ["food-processing", "cement-plants"], compatibility: ["Industrial automation systems", "Reflectors"] },
  { partNumber: "DFS60B-S4PM10000", slug: "dfs60b-s4pm10000", brand: "Sick", model: "Incremental Encoder", specs: ["10,000 pulses/rev", "10-32V DC", "M12 connector"], applications: ["Speed measurement", "Position feedback", "Motor synchronization"], industries: ["textile-mills", "sugar-mills"], compatibility: ["Programmable encoder interfaces", "PLC high-speed counters"] },

  // IFM - Sensors
  { partNumber: "IG5595", slug: "ig5595", brand: "IFM Electronic", model: "Inductive Proximity Sensor", specs: ["M18 housing", "8mm sensing range", "PNP NO output"], applications: ["Position sensing", "Rotational speed monitoring"], industries: ["sugar-mills", "cement-plants"], compatibility: ["Standard M12 connector cables"] },
  { partNumber: "O5D100", slug: "o5d100", brand: "IFM Electronic", model: "Time-of-Flight Laser Distance Sensor", specs: ["Sensing range 0.03-2m", "PMD technology", "Analog and switching output"], applications: ["Level monitoring", "Stack height measurement"], industries: ["food-processing", "manufacturing-plants"], compatibility: ["IO-Link compatible"] },

  // Mitsubishi - PLCs & VFDs
  { partNumber: "FX3U-48MT/ES-A", slug: "fx3u-48mt-es-a", brand: "Mitsubishi Electric", model: "MELSEC FX3U Series PLC", specs: ["24 DI", "24 Transistor outputs", "High-speed processing"], applications: ["Machine automation", "Multi-axis control"], industries: ["textile-mills", "food-processing"], compatibility: ["GX Works2", "FX series expansion blocks"] },
  { partNumber: "FR-D740-080-EC", slug: "fr-d740-080-ec", brand: "Mitsubishi Electric", model: "FR-D700 Series VFD", specs: ["3.7 kW", "3-phase 380-480V", "Integrated digital dial"], applications: ["Simple machine drives", "Pump and fan control"], industries: ["textile-mills", "manufacturing-plants"], compatibility: ["Mitsubishi inverter range"] },

  // Keyence - High-end Sensors
  { partNumber: "FS-N41N", slug: "fs-n41n", brand: "Keyence", model: "Digital Fiber Optic Sensor", specs: ["High-speed response", "OLED display", "NPN output"], applications: ["Small part detection", "High-speed counting"], industries: ["pharmaceutical-plants", "textile-mills"], compatibility: ["Keyence fiber units"] },
  { partNumber: "LR-ZB250AN", slug: "lr-zb250an", brand: "Keyence", model: "Laser Distance Sensor", specs: ["250mm range", "CMOS technology", "NPN output"], applications: ["Precise height measurement", "Object presence detection"], industries: ["pharmaceutical-plants", "manufacturing-plants"], compatibility: ["Standard industrial power supplies"] },

  // Danfoss - Drives
  { partNumber: "VLT-FC-051P2K2T4E20H3BXC", slug: "vlt-fc-051p2k2t4e20h3bxc", brand: "Danfoss", model: "VLT Micro Drive FC 51", specs: ["2.2 kW (3.0 HP)", "380-480V AC", "IP20"], applications: ["HVAC fans", "Centrifugal pumps", "Conveyor belts"], industries: ["sugar-mills", "food-processing", "textile-mills"], compatibility: ["VLT control panels", "MCT 10 software"] },

  // Festo - Pneumatics
  { partNumber: "DSBC-40-100-PPVA-N3", slug: "dsbc-40-100-ppva-n3", brand: "Festo", model: "Standard Pneumatic Cylinder", specs: ["40mm bore", "100mm stroke", "ISO 15552 standard"], applications: ["Pushing/Pulling", "Clamping", "Material handling"], industries: ["manufacturing-plants", "food-processing"], compatibility: ["Festo cylinder sensors", "ISO standard mountings"] },
  { partNumber: "VUVG-L10-B52-T-M7-1R8L", slug: "vuvg-l10-b52-t-m7-1r8l", brand: "Festo", model: "Solenoid Valve", specs: ["5/2-way", "24V DC", "M7 thread connection"], applications: ["Cylinder control", "Pneumatic logic", "Compact valve manifolds"], industries: ["manufacturing-plants", "pharmaceutical-plants"], compatibility: ["Festo manifolds", "Plug-in cables"] },

  // SMC - Pneumatics
  { partNumber: "AW20-02BG-A", slug: "aw20-02bg-a", brand: "SMC", model: "Filter Regulator", specs: ["1/4 inch port", "Integrated pressure gauge", "5 micron filtration"], applications: ["Air preparation", "Pressure regulation for machines"], industries: ["manufacturing-plants", "textile-mills"], compatibility: ["SMC modular FRL units"] },

  // Fan Motors (ebm-papst)
  { partNumber: "W2E142-BB01-01", slug: "w2e142-bb01-01", brand: "ebm-papst", model: "Compact Axial Fan", specs: ["150x172x38mm", "230V AC", "Ball bearing"], applications: ["Cabinet cooling", "Electronic equipment ventilation"], industries: ["manufacturing-plants", "industrial-automation"], compatibility: ["Standard fan guards", "AC power lines"] },

  // Additional 150+ high-demand part numbers
  // [Siemens]
  { partNumber: "6ES7212-1BE40-0XB0", slug: "6es7212-1be40-0xb0", brand: "Siemens", model: "S7-1200 CPU 1212C AC/DC/RLY", specs: ["8 DI", "6 DO (Relay)", "2 AI"], applications: ["Small machine control", "Simple automation"], industries: ["sugar-mills", "textile-mills"], compatibility: ["TIA Portal", "S7-1200 series"] },
  { partNumber: "6ES7223-1BL32-0XB0", slug: "6es7223-1bl32-0xb0", brand: "Siemens", model: "Digital I/O SM 1223", specs: ["16 DI", "16 DO"], applications: ["I/O expansion"], industries: ["textile-mills"], compatibility: ["S7-1200 CPU"] },
  { partNumber: "6AV6647-0AK11-3AX0", slug: "6av6647-0ak11-3ax0", brand: "Siemens", model: "SIMATIC HMI KTP400 Basic Color", specs: ["4 inch display"], applications: ["Operator interface"], industries: ["food-processing"], compatibility: ["S7-1200", "S7-1500"] },
  { partNumber: "6ES7214-1BG40-0XB0", slug: "6es7214-1bg40-0xb0", brand: "Siemens", model: "S7-1200 CPU 1214C AC/DC/RLY", specs: ["14 DI", "10 DO Relay", "2 AI"], applications: ["Machine control"], industries: ["sugar-mills"], compatibility: ["TIA Portal"] },
  { partNumber: "6ES7215-1AG40-0XB0", slug: "6es7215-1ag40-0xb0", brand: "Siemens", model: "S7-1200 CPU 1215C DC/DC/DC", specs: ["14 DI", "10 DO DC", "2 AI", "2 AO"], applications: ["Process control"], industries: ["pharmaceutical-plants"], compatibility: ["TIA Portal"] },
  { partNumber: "6ES7221-1BH32-0XB0", slug: "6es7221-1bh32-0xb0", brand: "Siemens", model: "SM 1221 DI 16 x 24V DC", specs: ["16 DI"], applications: ["Input expansion"], industries: ["textile-mills"], compatibility: ["S7-1200"] },
  { partNumber: "6ES7222-1BH32-0XB0", slug: "6es7222-1bh32-0xb0", brand: "Siemens", model: "SM 1222 DO 16 x 24V DC", specs: ["16 DO"], applications: ["Output expansion"], industries: ["textile-mills"], compatibility: ["S7-1200"] },
  { partNumber: "6ES7231-4HD32-0XB0", slug: "6es7231-4hd32-0xb0", brand: "Siemens", model: "SM 1231 AI 4 x 13 bit", specs: ["4 AI"], applications: ["Analog measurement"], industries: ["sugar-mills"], compatibility: ["S7-1200"] },
  { partNumber: "6ES7232-4HD32-0XB0", slug: "6es7232-4hd32-0xb0", brand: "Siemens", model: "SM 1232 AO 4 x 13 bit", specs: ["4 AO"], applications: ["Analog control"], industries: ["sugar-mills"], compatibility: ["S7-1200"] },
  { partNumber: "6ES7954-8LC03-0AA0", slug: "6es7954-8lc03-0aa0", brand: "Siemens", model: "SIMATIC S7 Memory Card 4 MB", specs: ["4 MB memory"], applications: ["Program storage"], industries: ["cement-plants"], compatibility: ["S7-1200", "S7-1500"] },
  { partNumber: "6ES7211-1AE40-0XB0", slug: "6es7211-1ae40-0xb0", brand: "Siemens", model: "S7-1200 CPU 1211C DC/DC/DC", specs: ["6 DI", "4 DO DC", "2 AI"], applications: ["Basic control"], industries: ["manufacturing-plants"], compatibility: ["TIA Portal"] },
  { partNumber: "6SL3210-1KE13-2AB2", slug: "6sl3210-1ke13-2ab2", brand: "Siemens", model: "SINAMICS G120C 1.1 kW", specs: ["1.1 kW"], applications: ["Conveyor drive"], industries: ["textile-mills"], compatibility: ["Standard motors"] },
  { partNumber: "6SL3210-1KE15-8AB1", slug: "6sl3210-1ke15-8ab1", brand: "Siemens", model: "SINAMICS G120C 2.2 kW", specs: ["2.2 kW"], applications: ["Pump drive"], industries: ["textile-mills"], compatibility: ["Standard motors"] },
  { partNumber: "6SL3210-1KE18-8AB1", slug: "6sl3210-1ke18-8ab1", brand: "Siemens", model: "SINAMICS G120C 4.0 kW", specs: ["4.0 kW"], applications: ["Fan drive"], industries: ["sugar-mills"], compatibility: ["Standard motors"] },
  { partNumber: "6SL3210-1KE21-3AB1", slug: "6sl3210-1ke21-3ab1", brand: "Siemens", model: "SINAMICS G120C 5.5 kW", specs: ["5.5 kW"], applications: ["Industrial drive"], industries: ["cement-plants"], compatibility: ["Standard motors"] },
  { partNumber: "6AV2123-2DB03-0AX0", slug: "6av2123-2db03-0ax0", brand: "Siemens", model: "KTP400 Basic", specs: ["4 inch color"], applications: ["HMI interface"], industries: ["food-processing"], compatibility: ["S7-1200"] },
  { partNumber: "6AV2123-2JB03-0AX0", slug: "6av2123-2jb03-0ax0", brand: "Siemens", model: "KTP900 Basic", specs: ["9 inch color"], applications: ["HMI interface"], industries: ["manufacturing-plants"], compatibility: ["S7-1200"] },
  { partNumber: "6AV2123-2MA03-0AX0", slug: "6av2123-2ma03-0ax0", brand: "Siemens", model: "KTP1200 Basic", specs: ["12 inch color"], applications: ["HMI interface"], industries: ["sugar-mills"], compatibility: ["S7-1200"] },
  { partNumber: "6EP1332-2BA20", slug: "6ep1332-2ba20", brand: "Siemens", model: "SITOP PSU100S 24 V/2.5 A", specs: ["24V DC", "2.5A"], applications: ["Power supply"], industries: ["pharmaceutical-plants"], compatibility: ["DIN rail"] },
  { partNumber: "6EP1333-2BA20", slug: "6ep1333-2ba20", brand: "Siemens", model: "SITOP PSU100S 24 V/5 A", specs: ["24V DC", "5A"], applications: ["Power supply"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "6EP1334-2BA20", slug: "6ep1334-2ba20", brand: "Siemens", model: "SITOP PSU100S 24 V/10 A", specs: ["24V DC", "10A"], applications: ["Power supply"], industries: ["cement-plants"], compatibility: ["DIN rail"] },

  // [Omron]
  { partNumber: "CP1W-40EDT", slug: "cp1w-40edt", brand: "Omron", model: "Expansion I/O Unit", specs: ["24 DI", "16 DO Transistor"], applications: ["PLC expansion"], industries: ["sugar-mills"], compatibility: ["CP1E", "CP1L", "CP1H"] },
  { partNumber: "CP1W-AD041", slug: "cp1w-ad041", brand: "Omron", model: "Analog Input Unit", specs: ["4 AI"], applications: ["Analog input expansion"], industries: ["textile-mills"], compatibility: ["CP1 series"] },
  { partNumber: "CP1W-DA041", slug: "cp1w-da041", brand: "Omron", model: "Analog Output Unit", specs: ["4 AO"], applications: ["Analog output expansion"], industries: ["textile-mills"], compatibility: ["CP1 series"] },
  { partNumber: "E3Z-T61", slug: "e3z-t61", brand: "Omron", model: "Through-beam Sensor", specs: ["15m range", "NPN"], applications: ["Long range detection"], industries: ["packaging"], compatibility: ["M8 connector"] },
  { partNumber: "E3Z-R61", slug: "e3z-r61", brand: "Omron", model: "Retro-reflective Sensor", specs: ["4m range", "NPN"], applications: ["Object detection"], industries: ["manufacturing-plants"], compatibility: ["M8 connector"] },
  { partNumber: "E2E-X2D1-N", slug: "e2e-x2d1-n", brand: "Omron", model: "Proximity Sensor M12", specs: ["2mm range", "2-wire DC"], applications: ["Position sensing"], industries: ["textile-mills"], compatibility: ["M12 housing"] },
  { partNumber: "E2E-X10ME1", slug: "e2e-x10me1", brand: "Omron", model: "Proximity Sensor M18", specs: ["10mm range", "NPN"], applications: ["Position sensing"], industries: ["sugar-mills"], compatibility: ["M18 housing"] },
  { partNumber: "E2E-X18ME1", slug: "e2e-x18me1", brand: "Omron", model: "Proximity Sensor M30", specs: ["18mm range", "NPN"], applications: ["Position sensing"], industries: ["cement-plants"], compatibility: ["M30 housing"] },
  { partNumber: "MY4N-GS 24VDC", slug: "my4n-gs-24vdc", brand: "Omron", model: "General Purpose Relay", specs: ["4PDT", "24V DC coil"], applications: ["Switching circuits"], industries: ["textile-mills"], compatibility: ["PYF14A socket"] },
  { partNumber: "MY2N-GS 220/240VAC", slug: "my2n-gs-220vac", brand: "Omron", model: "General Purpose Relay", specs: ["DPDT", "220V AC coil"], applications: ["Switching circuits"], industries: ["manufacturing-plants"], compatibility: ["PYF08A socket"] },
  { partNumber: "LY2N 24VDC", slug: "ly2n-24vdc", brand: "Omron", model: "Power Relay", specs: ["DPDT", "10A", "24V DC coil"], applications: ["Power switching"], industries: ["sugar-mills"], compatibility: ["PTF08A socket"] },
  { partNumber: "H3CR-A8 100-240VAC", slug: "h3cr-a8-240vac", brand: "Omron", model: "Solid-state Timer", specs: ["8-pin", "Multi-mode"], applications: ["Timing control"], industries: ["textile-mills"], compatibility: ["P2CF-08 socket"] },
  { partNumber: "H5CX-A11-N", slug: "h5cx-a11-n", brand: "Omron", model: "Digital Timer", specs: ["11-pin", "LCD display"], applications: ["Precise timing"], industries: ["food-processing"], compatibility: ["P2CF-11 socket"] },
  { partNumber: "G3MB-202P DC5", slug: "g3mb-202p-dc5", brand: "Omron", model: "Solid State Relay", specs: ["2A", "5V DC input", "240V AC output"], applications: ["PCB switching"], industries: ["industrial-automation"], compatibility: ["PCB mount"] },
  { partNumber: "S8FS-C05024", slug: "s8fs-c05024", brand: "Omron", model: "Power Supply 50W 24V", specs: ["50W", "24V DC"], applications: ["Basic power"], industries: ["pharmaceutical-plants"], compatibility: ["Panel mount"] },
  { partNumber: "S8FS-C15024", slug: "s8fs-c15024", brand: "Omron", model: "Power Supply 150W 24V", specs: ["150W", "24V DC"], applications: ["Industrial power"], industries: ["manufacturing-plants"], compatibility: ["Panel mount"] },

  // [ABB]
  { partNumber: "ACS310-03E-02A6-4", slug: "acs310-03e-02a6-4", brand: "ABB", model: "ACS310 Inverter", specs: ["0.75 kW"], applications: ["Pump/Fan control"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "ACS310-03E-09A7-4", slug: "acs310-03e-09a7-4", brand: "ABB", model: "ACS310 4.0 kW", specs: ["4.0 kW"], applications: ["Pump/Fan control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "ACS355-03E-01A2-4", slug: "acs355-03e-01a2-4", brand: "ABB", model: "ACS355 0.37 kW", specs: ["0.37 kW"], applications: ["Machine drive"], industries: ["manufacturing-plants"], compatibility: ["AC motors"] },
  { partNumber: "ACS355-03E-08A8-4", slug: "acs355-03e-08a8-4", brand: "ABB", model: "ACS355 4.0 kW", specs: ["4.0 kW"], applications: ["Machine drive"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "ACS550-01-038A-4", slug: "acs550-01-038a-4", brand: "ABB", model: "ACS550 18.5 kW", specs: ["18.5 kW"], applications: ["General purpose drive"], industries: ["cement-plants"], compatibility: ["AC motors"] },
  { partNumber: "ACS580-01-018A-4", slug: "acs580-01-018a-4", brand: "ABB", model: "ACS580 General Purpose Drive", specs: ["7.5 kW"], applications: ["Pump/Fan/Conveyor"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "AF09-30-10-13", slug: "af09-30-10-13", brand: "ABB", model: "AF09 Contactor", specs: ["9A", "100-250V coil"], applications: ["Motor switching"], industries: ["textile-mills"], compatibility: ["ABB accessories"] },
  { partNumber: "AF26-30-00-13", slug: "af26-30-00-13", brand: "ABB", model: "AF26 Contactor", specs: ["26A", "100-250V coil"], applications: ["Motor switching"], industries: ["sugar-mills"], compatibility: ["ABB accessories"] },
  { partNumber: "AF30-30-00-13", slug: "af30-30-00-13", brand: "ABB", model: "AF30 Contactor", specs: ["30A", "100-250V coil"], applications: ["Motor switching"], industries: ["cement-plants"], compatibility: ["ABB accessories"] },
  { partNumber: "S201-C16", slug: "s201-c16", brand: "ABB", model: "MCB 1-Pole 16A", specs: ["16A", "1-Pole"], applications: ["Circuit protection"], industries: ["manufacturing-plants"], compatibility: ["DIN rail"] },
  { partNumber: "S203-C32", slug: "s203-c32", brand: "ABB", model: "MCB 3-Pole 32A", specs: ["32A", "3-Pole"], applications: ["Circuit protection"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "Tmax T1N 160", slug: "tmax-t1n-160", brand: "ABB", model: "MCCB 160A", specs: ["160A", "Fixed"], applications: ["Main breaker"], industries: ["sugar-mills"], compatibility: ["Industrial panels"] },

  // [Schneider Electric]
  { partNumber: "LC1D09P7", slug: "lc1d09p7", brand: "Schneider Electric", model: "TeSys D Contactor 9A 230V", specs: ["9A", "230V AC coil"], applications: ["Motor control"], industries: ["textile-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D18P7", slug: "lc1d18p7", brand: "Schneider Electric", model: "TeSys D Contactor 18A 230V", specs: ["18A", "230V AC coil"], applications: ["Motor control"], industries: ["textile-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D25P7", slug: "lc1d25p7", brand: "Schneider Electric", model: "TeSys D Contactor 25A 230V", specs: ["25A", "230V AC coil"], applications: ["Motor control"], industries: ["sugar-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D32P7", slug: "lc1d32p7", brand: "Schneider Electric", model: "TeSys D Contactor 32A 230V", specs: ["32A", "230V AC coil"], applications: ["Motor control"], industries: ["sugar-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D40AP7", slug: "lc1d40ap7", brand: "Schneider Electric", model: "TeSys D Contactor 40A 230V", specs: ["40A", "230V AC coil"], applications: ["Motor control"], industries: ["cement-plants"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D65AP7", slug: "lc1d65ap7", brand: "Schneider Electric", model: "TeSys D Contactor 65A 230V", specs: ["65A", "230V AC coil"], applications: ["Motor control"], industries: ["cement-plants"], compatibility: ["TeSys accessories"] },
  { partNumber: "LRD08", slug: "lrd08", brand: "Schneider Electric", model: "Overload Relay 2.5-4A", specs: ["2.5-4A"], applications: ["Motor protection"], industries: ["textile-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "LRD12", slug: "lrd12", brand: "Schneider Electric", model: "Overload Relay 7-10A", specs: ["7-10A"], applications: ["Motor protection"], industries: ["textile-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "LRD21", slug: "lrd21", brand: "Schneider Electric", model: "Overload Relay 12-18A", specs: ["12-18A"], applications: ["Motor protection"], industries: ["sugar-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "LRD3353", slug: "lrd3353", brand: "Schneider Electric", model: "Overload Relay 23-32A", specs: ["23-32A"], applications: ["Motor protection"], industries: ["sugar-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "GV2ME08", slug: "gv2me08", brand: "Schneider Electric", model: "Motor Circuit Breaker 2.5-4A", specs: ["2.5-4A", "Push button"], applications: ["Motor circuit protection"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "GV2P10", slug: "gv2p10", brand: "Schneider Electric", model: "Motor Circuit Breaker 4-6.3A", specs: ["4-6.3A", "Rotary handle"], applications: ["Motor circuit protection"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "ATV12H018M2", slug: "atv12h018m2", brand: "Schneider Electric", model: "Altivar 12 0.18 kW", specs: ["0.18 kW", "230V 1-phase"], applications: ["Small machine speed control"], industries: ["packaging"], compatibility: ["AC motors"] },
  { partNumber: "ATV312HU15M2", slug: "atv312hu15m2", brand: "Schneider Electric", model: "Altivar 312 1.5 kW", specs: ["1.5 kW", "230V 1-phase"], applications: ["Machine speed control"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "ATV630U22N4", slug: "atv630u22n4", brand: "Schneider Electric", model: "Altivar 630 2.2 kW", specs: ["2.2 kW", "400V 3-phase"], applications: ["Process pump control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "TM221C16R", slug: "tm221c16r", brand: "Schneider Electric", model: "Modicon M221 PLC Relay", specs: ["9 DI", "7 DO Relay"], applications: ["Small automation"], industries: ["manufacturing-plants"], compatibility: ["EcoStruxure"] },
  { partNumber: "XB4BA31", slug: "xb4ba31", brand: "Schneider Electric", model: "Push Button Green", specs: ["Flush", "Spring return"], applications: ["Operator control"], industries: ["manufacturing-plants"], compatibility: ["22mm hole"] },
  { partNumber: "XB4BW33M5", slug: "xb4bw33m5", brand: "Schneider Electric", model: "Illuminated Push Button", specs: ["Green", "230V LED"], applications: ["Operator control"], industries: ["manufacturing-plants"], compatibility: ["22mm hole"] },

  // [Mitsubishi Electric]
  { partNumber: "FX3G-24MT/ES-A", slug: "fx3g-24mt-es-a", brand: "Mitsubishi Electric", model: "FX3G Series PLC", specs: ["14 DI", "10 DO Transistor"], applications: ["Standard machine control"], industries: ["textile-mills"], compatibility: ["GX Works2"] },
  { partNumber: "FX3U-16MR/ES-A", slug: "fx3u-16mr-es-a", brand: "Mitsubishi Electric", model: "FX3U Series PLC Relay", specs: ["8 DI", "8 DO Relay"], applications: ["Advanced machine control"], industries: ["sugar-mills"], compatibility: ["GX Works2"] },
  { partNumber: "FX3U-4AD", slug: "fx3u-4ad", brand: "Mitsubishi Electric", model: "Analog Input Block", specs: ["4 AI"], applications: ["Analog measurement expansion"], industries: ["textile-mills"], compatibility: ["FX3U PLC"] },
  { partNumber: "FX3U-4DA", slug: "fx3u-4da", brand: "Mitsubishi Electric", model: "Analog Output Block", specs: ["4 AO"], applications: ["Analog control expansion"], industries: ["textile-mills"], compatibility: ["FX3U PLC"] },
  { partNumber: "FR-E740-040-EC", slug: "fr-e740-040-ec", brand: "Mitsubishi Electric", model: "FR-E700 Series VFD 1.5 kW", specs: ["1.5 kW", "400V 3-phase"], applications: ["Standard motor control"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "FR-E740-095-EC", slug: "fr-e740-095-ec", brand: "Mitsubishi Electric", model: "FR-E700 Series VFD 3.7 kW", specs: ["3.7 kW", "400V 3-phase"], applications: ["Standard motor control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "MR-JE-20A", slug: "mr-je-20a", brand: "Mitsubishi Electric", model: "Servo Amplifier", specs: ["200W"], applications: ["Position control"], industries: ["textile-mills"], compatibility: ["HG servo motors"] },
  { partNumber: "HG-KN23J-S100", slug: "hg-kn23j-s100", brand: "Mitsubishi Electric", model: "Servo Motor", specs: ["200W"], applications: ["Position control"], industries: ["textile-mills"], compatibility: ["MR-JE amplifier"] },
  { partNumber: "GS2107-WTBD", slug: "gs2107-wtbd", brand: "Mitsubishi Electric", model: "GOT Simple HMI 7 inch", specs: ["7 inch touch"], applications: ["Machine interface"], industries: ["food-processing"], compatibility: ["FX series", "Q series"] },

  // [Mean Well]
  { partNumber: "LRS-150-24", slug: "lrs-150-24", brand: "Mean Well", model: "Power Supply 150W 24V", specs: ["24V DC", "6.5A"], applications: ["General equipment power"], industries: ["industrial-automation"], compatibility: ["Enclosed mount"] },
  { partNumber: "LRS-200-24", slug: "lrs-200-24", brand: "Mean Well", model: "Power Supply 200W 24V", specs: ["24V DC", "8.8A"], applications: ["General equipment power"], industries: ["industrial-automation"], compatibility: ["Enclosed mount"] },
  { partNumber: "DR-120-24", slug: "dr-120-24", brand: "Mean Well", model: "DIN Rail Power Supply 120W", specs: ["24V DC", "5A"], applications: ["Control panel power"], industries: ["manufacturing-plants"], compatibility: ["DIN rail"] },
  { partNumber: "MDR-60-24", slug: "mdr-60-24", brand: "Mean Well", model: "DIN Rail Power Supply 60W", specs: ["24V DC", "2.5A"], applications: ["Small panel power"], industries: ["pharmaceutical-plants"], compatibility: ["DIN rail"] },

  // [Sick]
  { partNumber: "GL6-P4111", slug: "gl6-p4111", brand: "Sick", model: "Photoelectric Sensor G6", specs: ["Retro-reflective", "PNP"], applications: ["Object detection"], industries: ["packaging"], compatibility: ["M8 connector"] },
  { partNumber: "W100-P1131", slug: "w100-p1131", brand: "Sick", model: "Photoelectric Sensor W100", specs: ["Retro-reflective", "PNP"], applications: ["Object detection"], industries: ["packaging"], compatibility: ["M8 connector"] },
  { partNumber: "IME12-04BPSZC0K", slug: "ime12-04bpszc0k", brand: "Sick", model: "Inductive Proximity Sensor IME", specs: ["M12", "Short body", "PNP"], applications: ["Metal detection"], industries: ["sugar-mills"], compatibility: ["M12 housing"] },
  { partNumber: "DFS60A-S4PC16384", slug: "dfs60a-s4pc16384", brand: "Sick", model: "Encoder DFS60", specs: ["16384 PPR", "Programmable"], applications: ["High resolution feedback"], industries: ["textile-mills"], compatibility: ["TTL/HTL output"] },
  { partNumber: "OD2-P50W10AO", slug: "od2-p50w10ao", brand: "Sick", model: "Displacement Measurement Sensor", specs: ["50mm center", "Laser"], applications: ["Thickness measurement"], industries: ["manufacturing-plants"], compatibility: ["Analog output"] },

  // [IFM Electronic]
  { partNumber: "EVT001", slug: "evt001", brand: "IFM Electronic", model: "Connecting cable M12", specs: ["M12 straight", "5m"], applications: ["Sensor wiring"], industries: ["industrial-automation"], compatibility: ["M12 sensors"] },
  { partNumber: "IF5719", slug: "if5719", brand: "IFM Electronic", model: "Inductive sensor M12", specs: ["M12", "Flush", "NPN"], applications: ["Position detection"], industries: ["sugar-mills"], compatibility: ["M12 housing"] },
  { partNumber: "PI2794", slug: "pi2794", brand: "IFM Electronic", model: "Pressure sensor", specs: ["-1 to 10 bar", "G1 process"], applications: ["Hydraulic pressure"], industries: ["pharmaceutical-plants"], compatibility: ["Process lines"] },
  { partNumber: "TN2511", slug: "tn2511", brand: "IFM Electronic", model: "Temperature sensor", specs: ["4-digit display", "Pt1000"], applications: ["Process temperature"], industries: ["food-processing"], compatibility: ["Immersion depth"] },

  // [Keyence]
  { partNumber: "FS-N11N", slug: "fs-n11n", brand: "Keyence", model: "Fiber optic amplifier", specs: ["Standard", "NPN"], applications: ["Fiber optic sensing"], industries: ["textile-mills"], compatibility: ["Keyence fibers"] },
  { partNumber: "PZ-G41N", slug: "pz-g41n", brand: "Keyence", model: "Photoelectric sensor", specs: ["Retro-reflective", "NPN"], applications: ["Object detection"], industries: ["packaging"], compatibility: ["M8 connector"] },
  { partNumber: "IV2-G30", slug: "iv2-g30", brand: "Keyence", model: "Vision sensor", specs: ["Standard field", "Auto-focus"], applications: ["Quality inspection"], industries: ["manufacturing-plants"], compatibility: ["Vision software"] },
  { partNumber: "LR-W500", slug: "lr-w500", brand: "Keyence", model: "Full spectrum sensor", specs: ["500mm range", "Color detection"], applications: ["Color sorting"], industries: ["pharmaceutical-plants"], compatibility: ["M12 connector"] },

  // [Danfoss]
  { partNumber: "VLT-FC-051P0K75", slug: "vlt-fc-051p0k75", brand: "Danfoss", model: "FC-051 0.75 kW", specs: ["0.75 kW", "230V 1-phase"], applications: ["Small motor drive"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "VLT-FC-051P4K0T4", slug: "vlt-fc-051p4k0t4", brand: "Danfoss", model: "FC-051 4.0 kW", specs: ["4.0 kW", "400V 3-phase"], applications: ["Motor drive"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "VLT-FC-302PK75T5", slug: "vlt-fc-302pk75t5", brand: "Danfoss", model: "FC-302 Automation Drive", specs: ["0.75 kW", "High performance"], applications: ["Automation control"], industries: ["cement-plants"], compatibility: ["AC motors"] },
  { partNumber: "KP35", slug: "kp35", brand: "Danfoss", model: "Pressure Switch", specs: ["0.2 to 7.5 bar", "G 1/4"], applications: ["Pressure control"], industries: ["sugar-mills"], compatibility: ["Air/Water systems"] },

  // [Yaskawa]
  { partNumber: "CIMR-VA4A0009FAA", slug: "cimr-va4a0009faa", brand: "Yaskawa", model: "V1000 Inverter 3.0 kW", specs: ["3.0 kW", "400V 3-phase"], applications: ["General purpose drive"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "CIMR-VA4A0011FAA", slug: "cimr-va4a0011faa", brand: "Yaskawa", model: "V1000 Inverter 4.0 kW", specs: ["4.0 kW", "400V 3-phase"], applications: ["General purpose drive"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "SGD7S-2R8A00A", slug: "sgd7s-2r8a00a", brand: "Yaskawa", model: "Sigma-7 Servo Drive", specs: ["400W", "200V"], applications: ["Servo control"], industries: ["manufacturing-plants"], compatibility: ["Sigma-7 motors"] },
  { partNumber: "SGM7J-04AFA21", slug: "sgm7j-04afa21", brand: "Yaskawa", model: "Sigma-7 Servo Motor", specs: ["400W", "200V"], applications: ["Servo drive"], industries: ["manufacturing-plants"], compatibility: ["Sigma-7 drives"] },

  // [SMC]
  { partNumber: "MSQB20A", slug: "msqb20a", brand: "SMC", model: "Rotary Table", specs: ["Size 20", "Adjustable angle"], applications: ["Pneumatic rotation"], industries: ["manufacturing-plants"], compatibility: ["SMC fittings"] },
  { partNumber: "SY5120-5LZD-01", slug: "sy5120-5lzd-01", brand: "SMC", model: "Solenoid Valve SY series", specs: ["5-way", "24V DC coil"], applications: ["Cylinder control"], industries: ["pharmaceutical-plants"], compatibility: ["SY manifold"] },
  { partNumber: "CQ2B32-15DM", slug: "cq2b32-15dm", brand: "SMC", model: "Compact Cylinder", specs: ["32mm bore", "15mm stroke"], applications: ["Short stroke push"], industries: ["manufacturing-plants"], compatibility: ["DIN standard"] },
  { partNumber: "MXS12-30", slug: "mxs12-30", brand: "SMC", model: "Air Slide Table", specs: ["Size 12", "30mm stroke"], applications: ["Precision slide"], industries: ["manufacturing-plants"], compatibility: ["SMC fittings"] },

  // [Festo]
  { partNumber: "DNC-40-50-PPV-A", slug: "dnc-40-50-ppv-a", brand: "Festo", model: "Pneumatic Cylinder DNC", specs: ["40mm bore", "50mm stroke"], applications: ["Standard pneumatic action"], industries: ["sugar-mills"], compatibility: ["ISO 15552"] },
  { partNumber: "CPE14-M1BH-5L-1/8", slug: "cpe14-m1bh-5l-1-8", brand: "Festo", model: "Solenoid Valve CPE", specs: ["Size 14", "24V DC coil"], applications: ["Valve manifold"], industries: ["textile-mills"], compatibility: ["CPE manifold"] },
  { partNumber: "ADVC-32-10-I-P", slug: "advc-32-10-i-p", brand: "Festo", model: "Short-stroke cylinder", specs: ["32mm bore", "10mm stroke"], applications: ["Basic push"], industries: ["manufacturing-plants"], compatibility: ["Standard mountings"] },
  { partNumber: "MS4-LR-1/4-D7-AS", slug: "ms4-lr-1-4-d7-as", brand: "Festo", model: "Pressure regulator", specs: ["Size 4", "1/4 port"], applications: ["Air regulation"], industries: ["textile-mills"], compatibility: ["MS series modules"] },

  // [WAGO]
  { partNumber: "750-333", slug: "750-333", brand: "WAGO", model: "PROFIBUS DP Fieldbus Coupler", specs: ["12 MBaud", "Digital/Analog"], applications: ["Remote I/O"], industries: ["cement-plants"], compatibility: ["750 series modules"] },
  { partNumber: "750-430", slug: "750-430", brand: "WAGO", model: "8-Channel Digital Input", specs: ["24V DC", "3.0ms"], applications: ["I/O expansion"], industries: ["manufacturing-plants"], compatibility: ["750 series coupler"] },
  { partNumber: "750-530", slug: "750-530", brand: "WAGO", model: "8-Channel Digital Output", specs: ["24V DC", "0.5A"], applications: ["I/O expansion"], industries: ["manufacturing-plants"], compatibility: ["750 series coupler"] },
  { partNumber: "221-413", slug: "221-413", brand: "WAGO", model: "Lever-Nuts Connector", specs: ["3-Wire", "Transparent"], applications: ["Electrical connection"], industries: ["industrial-automation"], compatibility: ["Solid/Stranded wire"] },

  // [Weidmüller]
  { partNumber: "PRO ECO 120W 24V 5A", slug: "1469480000", brand: "Weidmüller", model: "Power Supply", specs: ["24V DC", "5A"], applications: ["Control panel power"], industries: ["manufacturing-plants"], compatibility: ["DIN rail"] },
  { partNumber: "MCZ R 24VDC", slug: "8365980000", brand: "Weidmüller", model: "Relay Terminal", specs: ["1 NO contact", "6mm slim"], applications: ["Signal switching"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "SAK 2.5", slug: "0279660000", brand: "Weidmüller", model: "Terminal Block", specs: ["2.5mm²", "Screw connection"], applications: ["Panel wiring"], industries: ["industrial-automation"], compatibility: ["TS 32 rail"] },
  { partNumber: "WDU 2.5", slug: "1020000000", brand: "Weidmüller", model: "Feed-through terminal", specs: ["2.5mm²", "Screw connection"], applications: ["Panel wiring"], industries: ["industrial-automation"], compatibility: ["TS 35 rail"] },

  // [Allen-Bradley]
  { partNumber: "1769-IQ16", slug: "1769-iq16", brand: "Allen-Bradley", model: "Compact I/O Digital Input", specs: ["16 DI", "24V DC"], applications: ["I/O expansion"], industries: ["textile-mills"], compatibility: ["CompactLogix"] },
  { partNumber: "1769-OB16", slug: "1769-ob16", brand: "Allen-Bradley", model: "Compact I/O Digital Output", specs: ["16 DO", "24V DC"], applications: ["I/O expansion"], industries: ["textile-mills"], compatibility: ["CompactLogix"] },
  { partNumber: "1769-IF4", slug: "1769-if4", brand: "Allen-Bradley", model: "Compact I/O Analog Input", specs: ["4 AI"], applications: ["Analog measurement"], industries: ["sugar-mills"], compatibility: ["CompactLogix"] },
  { partNumber: "1794-IB16", slug: "1794-ib16", brand: "Allen-Bradley", model: "FLEX I/O Input Module", specs: ["16 DI"], applications: ["Distributed I/O"], industries: ["cement-plants"], compatibility: ["FLEX I/O adapter"] },
  { partNumber: "1794-ASB", slug: "1794-asb", brand: "Allen-Bradley", model: "FLEX I/O Adapter", specs: ["Remote I/O"], applications: ["Distributed I/O"], industries: ["cement-plants"], compatibility: ["FLEX I/O modules"] },
  { partNumber: "25B-D4P0N104", slug: "25b-d4p0n104", brand: "Allen-Bradley", model: "PowerFlex 525 1.5 kW", specs: ["1.5 kW", "480V 3-phase"], applications: ["Motor speed control"], industries: ["manufacturing-plants"], compatibility: ["AC motors"] },
  { partNumber: "25B-D010N104", slug: "25b-d010n104", brand: "Allen-Bradley", model: "PowerFlex 525 4.0 kW", specs: ["4.0 kW", "480V 3-phase"], applications: ["Motor speed control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "22F-D6P0N103", slug: "22f-d6p0n103", brand: "Allen-Bradley", model: "PowerFlex 4M", specs: ["2.2 kW"], applications: ["Basic motor control"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "2711R-T7T", slug: "2711r-t7t", brand: "Allen-Bradley", model: "PanelView 800 7 inch", specs: ["7 inch touch screen"], applications: ["Machine HMI"], industries: ["food-processing"], compatibility: ["MicroLogix", "CompactLogix"] },

  // [Additional parts for depth]
  { partNumber: "LC1D50P7", slug: "lc1d50p7", brand: "Schneider Electric", model: "TeSys D Contactor 50A", specs: ["50A", "230V AC coil"], applications: ["Heavy motor switching"], industries: ["sugar-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LC1D95P7", slug: "lc1d95p7", brand: "Schneider Electric", model: "TeSys D Contactor 95A", specs: ["95A", "230V AC coil"], applications: ["Heavy motor switching"], industries: ["sugar-mills"], compatibility: ["TeSys accessories"] },
  { partNumber: "LRD3355", slug: "lrd3355", brand: "Schneider Electric", model: "Overload Relay 30-40A", specs: ["30-40A"], applications: ["Motor protection"], industries: ["sugar-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "LRD3357", slug: "lrd3357", brand: "Schneider Electric", model: "Overload Relay 37-50A", specs: ["37-50A"], applications: ["Motor protection"], industries: ["sugar-mills"], compatibility: ["LC1D contactors"] },
  { partNumber: "GV2ME20", slug: "gv2me20", brand: "Schneider Electric", model: "Motor Circuit Breaker 13-18A", specs: ["13-18A"], applications: ["Motor circuit protection"], industries: ["textile-mills"], compatibility: ["DIN rail"] },
  { partNumber: "GV2ME32", slug: "gv2me32", brand: "Schneider Electric", model: "Motor Circuit Breaker 24-32A", specs: ["24-32A"], applications: ["Motor circuit protection"], industries: ["sugar-mills"], compatibility: ["DIN rail"] },
  { partNumber: "ATV320U22N4C", slug: "atv320u22n4c", brand: "Schneider Electric", model: "Altivar 320 2.2 kW", specs: ["2.2 kW", "400V 3-phase"], applications: ["Machine speed control"], industries: ["textile-mills"], compatibility: ["AC motors"] },
  { partNumber: "ATV320U55N4B", slug: "atv320u55n4b", brand: "Schneider Electric", model: "Altivar 320 5.5 kW", specs: ["5.5 kW", "400V 3-phase"], applications: ["Machine speed control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "ATV320U75N4B", slug: "atv320u75n4b", brand: "Schneider Electric", model: "Altivar 320 7.5 kW", specs: ["7.5 kW", "400V 3-phase"], applications: ["Machine speed control"], industries: ["cement-plants"], compatibility: ["AC motors"] },
  { partNumber: "ATV630D11N4", slug: "atv630d11n4", brand: "Schneider Electric", model: "Altivar 630 11 kW", specs: ["11 kW", "400V 3-phase"], applications: ["Pump control"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "TM3AM6", slug: "tm3am6", brand: "Schneider Electric", model: "Modicon TM3 Analog I/O", specs: ["4 AI", "2 AO"], applications: ["Analog extension"], industries: ["manufacturing-plants"], compatibility: ["M221", "M241", "M251"] },
  { partNumber: "TM3TI4", slug: "tm3ti4", brand: "Schneider Electric", model: "Modicon TM3 Temperature Input", specs: ["4 temperature inputs"], applications: ["Temperature measurement"], industries: ["pharmaceutical-plants"], compatibility: ["M221", "M241", "M251"] },
  { partNumber: "HMIZGPF", slug: "hmizgpf", brand: "Schneider Electric", model: "Magelis Protective Film", specs: ["Screen protector"], applications: ["HMI maintenance"], industries: ["food-processing"], compatibility: ["Magelis HMI"] },
  { partNumber: "XB4BS8445", slug: "xb4bs8445", brand: "Schneider Electric", model: "Emergency Stop Button", specs: ["Turn release", "Red"], applications: ["Emergency control"], industries: ["industrial-automation"], compatibility: ["22mm hole"] },
  { partNumber: "FX3U-32MR/ES-A", slug: "fx3u-32mr-es-a", brand: "Mitsubishi Electric", model: "FX3U Series PLC 32 I/O Relay", specs: ["16 DI", "16 DO Relay"], applications: ["Machine control"], industries: ["sugar-mills"], compatibility: ["GX Works2"] },
  { partNumber: "FX3U-48MR/ES-A", slug: "fx3u-48mr-es-a", brand: "Mitsubishi Electric", model: "FX3U Series PLC 48 I/O Relay", specs: ["24 DI", "24 DO Relay"], applications: ["Machine control"], industries: ["sugar-mills"], compatibility: ["GX Works2"] },
  { partNumber: "FX3U-64MR/ES-A", slug: "fx3u-64mr-es-a", brand: "Mitsubishi Electric", model: "FX3U Series PLC 64 I/O Relay", specs: ["32 DI", "32 DO Relay"], applications: ["Machine control"], industries: ["sugar-mills"], compatibility: ["GX Works2"] },
  { partNumber: "FX3U-ENET-L", slug: "fx3u-enet-l", brand: "Mitsubishi Electric", model: "Ethernet Block", specs: ["Ethernet interface"], applications: ["PLC networking"], industries: ["textile-mills"], compatibility: ["FX3U PLC"] },
  { partNumber: "FR-E740-120-EC", slug: "fr-e740-120-ec", brand: "Mitsubishi Electric", model: "FR-E700 Series VFD 5.5 kW", specs: ["5.5 kW", "400V 3-phase"], applications: ["Motor drive"], industries: ["sugar-mills"], compatibility: ["AC motors"] },
  { partNumber: "FR-E740-170-EC", slug: "fr-e740-170-ec", brand: "Mitsubishi Electric", model: "FR-E700 Series VFD 7.5 kW", specs: ["7.5 kW", "400V 3-phase"], applications: ["Motor drive"], industries: ["cement-plants"], compatibility: ["AC motors"] },
  { partNumber: "MR-JE-40A", slug: "mr-je-40a", brand: "Mitsubishi Electric", model: "Servo Amplifier 400W", specs: ["400W", "200V"], applications: ["Servo control"], industries: ["textile-mills"], compatibility: ["HG servo motors"] },
  { partNumber: "HG-KN43J-S100", slug: "hg-kn43j-s100", brand: "Mitsubishi Electric", model: "Servo Motor 400W", specs: ["400W", "200V"], applications: ["Servo drive"], industries: ["textile-mills"], compatibility: ["MR-JE amplifier"] },
  { partNumber: "GT2107-WTSD", slug: "gt2107-wtsd", brand: "Mitsubishi Electric", model: "GOT2000 HMI 7 inch", specs: ["7 inch touch", "WVGA"], applications: ["Advanced machine HMI"], industries: ["pharmaceutical-plants"], compatibility: ["Mitsubishi PLCs"] }
];
