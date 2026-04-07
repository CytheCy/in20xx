/**
 * ─────────────────────────────────────────────
 *  IN 20xx — TIMELINE DATA
 *  Add new years and items here.
 *  Categories: "tech" | "social" | "crisis" | "bio" | "space" | "unknown"
 * ─────────────────────────────────────────────
 */

const TIMELINE_DATA = [
  {
    year: "2040",
    label: "The Connected Age",
    summary: "Ubiquitous connectivity reshapes daily life as 7G networks, AI companions, and smart infrastructure become baseline reality.",
    items: [
      { name: "Seven G. Network", desc: "Next-gen telecommunications replacing traditional radio with ultra-fast wireless infrastructure — the backbone of everything that follows.", category: "tech" },
      { name: "Blind Relay Signal Share", desc: "Connected devices share signals with each other, boosting strength and slashing power needs. The grid becomes the device.", category: "tech" },
      { name: "Embedded Trackers", desc: "Low-cost trackers embedded in all possessions. Nothing ever goes out of range again.", category: "tech" },
      { name: "Providence A.I.", desc: "Advanced AI that passively monitors all web activity, surfacing reports on suspicious behavior. Surveillance as a service.", category: "social" },
      { name: "AI Partners", desc: "AI entities designed as companions — filtering the dating landscape by quietly removing the undesirable.", category: "social" },
      { name: "Mersine", desc: "Drug that alleviates VR nausea, available in sodas and gum. The pill that made virtual reality livable.", category: "bio" },
      { name: "Car Pirates", desc: "Individuals who stop autonomous vehicles to abduct passengers. A new crime born from a new infrastructure.", category: "crisis" },
      { name: "Small Nuclear Plants", desc: "Underground nuclear facilities powering data centers and computing hubs. Energy goes underground.", category: "tech" },
      { name: "AI-Generated Video Detection", desc: "Real-time warnings when a video call is AI-generated — built into devices as a baseline trust feature.", category: "tech" },
      { name: "Tower Farms", desc: "Vertical farming structures maximizing space and food production, increasingly adopted by families and municipalities.", category: "social" },
      { name: "Counterfeit Robot", desc: "An advanced robot capable of forging paintings indistinguishable from famous artists — undetected for 40 years.", category: "tech" },
      { name: "Drone Delivery (Giantess)", desc: "Giant autonomous drones handling last-mile package delivery at scale.", category: "tech" },
      { name: "Triple-Fold Phones / Oriel", desc: "Smartphones that track eye movement to enable fully immersive VR experiences — fold three times, open a world.", category: "tech" },
      { name: "VR Shades & Headsets", desc: "Consumer-grade VR headsets and glasses normalized across all demographics for entertainment and education.", category: "tech" },
      { name: "AI-Driven Government", desc: "Widespread AI influence on government operations, increasingly controlled by a corporate class rather than elected bodies.", category: "social" },
      { name: "Carbon Cleaners", desc: "Large fan-in-box units deployed publicly and privately to scrub carbon from urban air.", category: "tech" },
      { name: "TazeWear", desc: "Clothing with electrified patches for self-defense. 'My jacket can shock you.'", category: "social" },
      { name: "Bullet-Resistant Jackets", desc: "Consumer garments with plastic linings and square-stitch ballistic protection — fashion meets survival.", category: "social" },
      { name: "Live Assignments via AI", desc: "Students complete coursework through structured interviews with AI rather than traditional tests.", category: "social" },
    ]
  },
  {
    year: "2041",
    label: "The Fractured Present",
    summary: "Weaponized drones, jailbroken AI, and autonomous cities mark a year when the line between security and surveillance dissolves.",
    items: [
      { name: "Weaponized Drones", desc: "The primary tool for remote mass killings — drones fly into public spaces and target specific groups with precision.", category: "crisis" },
      { name: "Jailbroken AI", desc: "Bypassing safety guardrails to plan attacks, order supplies, and receive expert-level hardware modification guidance.", category: "crisis" },
      { name: "LiDAR Spectroscopy Countermeasure", desc: "Used at public gatherings to detect explosive outgassing from incoming drones before detonation.", category: "tech" },
      { name: "Drone Backtracking Cameras", desc: "High-res systems that reconstruct drone flight paths to locate remote operators after an attack.", category: "tech" },
      { name: "Robot-Assisted Eye Surgery", desc: "Drop-in robotic procedures replace traditional optometry — walk in needing glasses, walk out without them.", category: "bio" },
      { name: "Ceiling & Floor Displays", desc: "Immersive screens that transform any room into an open sky, rolling ocean, or another environment entirely.", category: "tech" },
      { name: "Avatar Reception Screens", desc: "Realistic digital personalities handling patient intake and visitor interactions at clinics and public buildings.", category: "tech" },
      { name: "Droplet Earphones", desc: "Earphones the size of droplets resting invisibly next to the ear canal — high fidelity, no visibility.", category: "tech" },
      { name: "Balance-Display Payment Cards", desc: "Touch-activated cards that illuminate to show your current account balance directly on the card surface.", category: "tech" },
      { name: "Funzoid App", desc: "AI-driven entertainment streaming content-free shifting imagery specifically calibrated to trigger laughter.", category: "social" },
      { name: "Autonomous Taxis", desc: "Private car ownership replaced in most cities. Streets reclaimed as greenways as ride-share fleets go fully autonomous.", category: "social" },
      { name: "E-Fabrics", desc: "Shirts, hoods, and banners with programmable image and text displays, updated via USB connection.", category: "tech" },
      { name: "Encrypted Livestream Devices", desc: "Secure real-time broadcasting tools built for activists in high-risk environments.", category: "social" },
      { name: "Sleep Lockers", desc: "Compact, tech-integrated sleeping pods in high-density urban residential buildings. Minimum viable shelter, maximum tech.", category: "social" },
      { name: "Subscription-Locked Devices", desc: "Smart toothbrushes and other devices require active digital renewals to maintain mechanical functionality.", category: "social" },
      { name: "Maverick One", desc: "A predictive artificial superintelligence that reconstructs the past to accurately forecast future financial and political events.", category: "tech" },
      { name: "Remote Meeting Droids", desc: "Telepresence robots with screen faces enabling bedridden individuals to attend public events in person.", category: "tech" },
      { name: "Military Drug (Pen)", desc: "A combat drug that maximizes combat skill and prevents PTSD — issued to soldiers as standard kit.", category: "bio" },
      { name: "Photonic Circuit Wearables", desc: "Wrist or ankle-worn devices functioning as all-in-one gadgets, with other devices acting as peripherals.", category: "tech" },
      { name: "Celebrity Cloning", desc: "A new crime: fans illegally obtain celebrity DNA to create and raise exact genetic copies.", category: "crisis" },
      { name: "Live Translation Technology", desc: "Real-time translation breaking down language barriers — seamless cross-language communication becomes default.", category: "tech" },
      { name: "IRDub", desc: "Real-time voice dubbing that clones actors' voices, translates dialogue, and syncs lip movement — language barriers in film collapse.", category: "tech" },
      { name: "Hydrogen Power Cells", desc: "Clean energy tech producing pure water as its only byproduct, deployed at scale.", category: "tech" },
      { name: "Salt Water Batteries", desc: "Batteries charged using salt water — a low-cost, abundant-resource alternative power source.", category: "tech" },
    ]
  },
  {
    year: "2042",
    label: "The Body & The Network",
    summary: "Medicine, infrastructure, and digital identity merge as the body becomes a platform and the network becomes inescapable.",
    items: [
      { name: "Graphene/Plastic Hull Ships", desc: "Lightweight, durable composite material used in Climate Core ocean vessels — the ships that try to save the seas.", category: "tech" },
      { name: "Carbcrete Ballast", desc: "A carbon-concrete poured into ship hulls for stability — engineering meets carbon sequestration.", category: "tech" },
      { name: "Carbon-Removing Bacteria Solution", desc: "Liquid sprayed by ship arms to strip carbon from water, encouraging shell-growing bacteria that sink it to the ocean floor.", category: "bio" },
      { name: "Printed Bones", desc: "Medical advancement allowing broken bones to be 3D-printed and set without traditional casts.", category: "bio" },
      { name: "Connect-Link", desc: "A ubiquitous personal device handling communication, payments, and device control — the universal remote for life.", category: "tech" },
      { name: "Medusa Software", desc: "A shadow network transforming connect-links into mini-servers for anonymous surfing. The underground internet of 2042.", category: "tech" },
      { name: "Drop Tunnels", desc: "Car transportation networks bypassing traffic signals and weather — faster urban travel through underground routing.", category: "tech" },
      { name: "AI Distribution Plans", desc: "Fully automated systems managing inventory and supply chain logistics without human oversight.", category: "tech" },
      { name: "Pleasant (Perform-On Drug)", desc: "Cognitive enhancement pills marketed as non-addictive, providing focus without a high.", category: "bio" },
      { name: "Salt-Ion Batteries", desc: "Cheaper battery tech using common elements — the alternative that challenged lithium-ion dominance.", category: "tech" },
      { name: "Media Weapon", desc: "A weapon that induces PTSD transmitted through media broadcasts. An attack on the country that nobody saw coming.", category: "crisis" },
      { name: "LOS (Limbic Overload Syndrome)", desc: "Medical condition resulting from the media weapon attack — requiring a new pharmaceutical response.", category: "crisis" },
      { name: "Pexon", desc: "Drug developed to counteract LOS. Helps patients return to baseline but not designed to treat addiction.", category: "bio" },
      { name: "Mistoponics", desc: "Advanced grow-tower farming technology enabling high-density aeroponic plant cultivation.", category: "tech" },
      { name: "Neural Network Card", desc: "Hobbyist-grade hardware for tinkering with AI — consumer artificial intelligence built in home workshops.", category: "tech" },
    ]
  },
  {
    year: "2043",
    label: "The Augmented Body",
    summary: "Gene editing meets space colonization. Rejuvenation medicine, digital currency, and orbiting stations transform what it means to be human — and where humans can live.",
    items: [
      { name: "Sonic Barrier Treatment", desc: "Sonic waves pass through the blood-brain barrier for non-invasive brain treatment and neural cleaning.", category: "bio" },
      { name: "Microbial Cell Hosts", desc: "Cells extracted from patients and reprogrammed to latch onto host cells — extending life by transforming it from within.", category: "bio" },
      { name: "Programmer Cells", desc: "Cells that rewrite other cells and mark them against further modification — the key mechanism in rejuvenation therapy.", category: "bio" },
      { name: "CRISPR-like Virus Treatment", desc: "A virus-based treatment that edits genes of a grown adult — revolutionizing gene therapy beyond laboratory conditions.", category: "bio" },
      { name: "AI Personal News Aggregator", desc: "Reads biometrics and personal preferences to curate news — avoiding irrelevant or emotionally destabilizing content.", category: "tech" },
      { name: "FedWallet", desc: "Federal digital currency using blockchain for transaction integrity with smart tax withholding built in.", category: "social" },
      { name: "Standalone Robots", desc: "Human-sized robots with low centers of gravity capable of tiling floors, baking food, and providing elder care.", category: "tech" },
      { name: "Aeroponic Farming", desc: "Chefs source produce from aeroponic farms for land-grown flavor — agriculture as artisan practice.", category: "tech" },
      { name: "Space Port One", desc: "A large rotating space station orbiting Earth, using centrifugal force to simulate gravity. The first real permanent off-world address.", category: "space" },
      { name: "Origami Cars", desc: "Foldable vehicles designed to collapse for transport and expand for use — engineered for zero-gravity logistics.", category: "space" },
      { name: "VR Dots", desc: "Tiny chips embedded in skin and clothes providing accurate position and action tracking, powered by ambient radio waves.", category: "tech" },
      { name: "Air Keyboard", desc: "A virtual keyboard operated via VR dots — typing in empty air as naturally as on any surface.", category: "tech" },
      { name: "Micro-units / Coccoons", desc: "Downsized living spaces providing breathable air and livable temperature — legal shelter stripped to its minimum viable form.", category: "social" },
      { name: "Automated Cleanout Machines", desc: "Machines that clean and evict the last renter from sleeping units when rental time expires. The landlord is a robot.", category: "social" },
      { name: "Vacuum Shaver & Mister", desc: "Grooming tools engineered for zero-gravity: suction-based hair removal and mist-vacuum body cleaning.", category: "space" },
      { name: "Clothes Cleaner Device", desc: "A device that eradicates debris and vacuums clothing clean — the laundromat collapsed into a box.", category: "tech" },
      { name: "Pain Management Systems", desc: "Systems enabling patients to actively manage and reduce reliance on painkillers through biofeedback and targeted stimulation.", category: "bio" },
    ]
  },
  {
    year: "2044",
    label: "The Automated Frontier",
    summary: "Robots handle the physical world. Digital clones inhabit the virtual one. The line between a person and their avatar begins to blur permanently.",
    items: [
      { name: "Auto-Foffers", desc: "Automated systems loading cargo onto trains — the port worker replaced entirely by machine.", category: "tech" },
      { name: "Power-Storage Bells", desc: "Devices storing electricity via weights and generators, functioning in cold climates as alternatives to traditional batteries.", category: "tech" },
      { name: "Photonic Sync Links", desc: "Bulky earring-like wearables used for high-speed communication or data transfer.", category: "tech" },
      { name: "DNA Splice Software", desc: "Consumer-grade tools for manipulating and connecting DNA sequences on a standard screen.", category: "bio" },
      { name: "Four-Legged Military Robot", desc: "Military robotics systems tasked with handling casualties — autonomous presence in conflict zones replaces soldiers.", category: "crisis" },
      { name: "Anklet Connect Link & Key-Chip", desc: "Injected tracking chips paired with ankle devices for safety monitoring — the tracker becomes the body.", category: "tech" },
      { name: "Ten-Story Grow Houses", desc: "Large-scale vertical agricultural facilities where human workers are progressively replaced by retrofitting robots.", category: "tech" },
      { name: "Delivery Robot (Giantess)", desc: "Golf cart-sized autonomous delivery robots replacing last-mile human couriers entirely.", category: "tech" },
      { name: "Quadcopters / Drone Dogs", desc: "Robotic dogs equipped with advanced surveillance and detention technology — autonomous enforcement.", category: "crisis" },
      { name: "Palm-Size Drones", desc: "Tiny drones deployed in swarms for surveillance and reconnaissance at public and private sites.", category: "tech" },
      { name: "Thermal Camouflage Clothing", desc: "Advanced garments masking body heat signatures — invisibility to thermal detection as consumer clothing.", category: "tech" },
      { name: "Hexaped Dozer & Excavator", desc: "Six-legged heavy construction and demolition machinery — insectoid engineering at industrial scale.", category: "tech" },
      { name: "Smell Vision Technology", desc: "Sensory technology enabling detection and analysis of scents — implied military and forensic use.", category: "tech" },
      { name: "Sky Cranes", desc: "Massive drone aircraft capable of airlifting heavy supply loads — logistics infrastructure from the air.", category: "tech" },
      { name: "Algae Cultivation System", desc: "Industrial-scale algae farming in salt water producing food, fuel, and fertilizer simultaneously with no pesticides.", category: "tech" },
      { name: "Personality Clones", desc: "Online avatars that begin generic, then mine personal data to mimic individuals — family can visit them after death.", category: "social" },
      { name: "VR Hometown Simulation", desc: "Virtual reality reconstructions of hometowns built on personal and collective memory — digital preservation of place.", category: "social" },
      { name: "Life Recording Technology", desc: "Early-stage systems recording lived experiences for later VR simulation. The first steps toward total memory archive.", category: "tech" },
      { name: "Yeast-Based Food Products", desc: "Sam's Beef, Egg, Butter, Bacon — synthetic foods made from yeast, identical in taste and texture to the originals.", category: "bio" },
      { name: "Tower Cranes with Printer Parts", desc: "Giant construction machines combining crane reach with 3D printing capability for rapid building assembly.", category: "tech" },
      { name: "Automated Factories", desc: "Factories with no human labor — machines spin, punch, stitch, cut, and fold entirely autonomously.", category: "tech" },
      { name: "Co-op Solar Farms", desc: "Collaborative community-owned solar energy infrastructure replacing utility monopolies.", category: "tech" },
    ]
  }

  // ─── ADD NEW YEARS BELOW THIS LINE ───
  // Copy this template:
  // {
  //   year: "20xx",
  //   label: "Short era label",
  //   summary: "One or two sentence summary of this year's themes.",
  //   items: [
  //     { name: "Technology Name", desc: "What it does and why it matters.", category: "tech" },
  //   ]
  // },
];

// Category config — add new categories here if needed
const CATEGORIES = {
  tech:    { label: "Technology",   color: "#2ECFBF", bg: "rgba(46,207,191,0.1)"  },
  social:  { label: "Society",      color: "#8A9BA8", bg: "rgba(138,155,168,0.1)" },
  crisis:  { label: "Crisis",       color: "#E05050", bg: "rgba(220,80,80,0.1)"   },
  bio:     { label: "Biology",      color: "#9B6FE0", bg: "rgba(155,111,224,0.1)" },
  space:   { label: "Space",        color: "#C4622D", bg: "rgba(196,98,45,0.12)"  },
  unknown: { label: "Unknown",      color: "#4A5A65", bg: "rgba(74,90,101,0.1)"   },
};
