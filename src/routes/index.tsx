import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Calculator,
  Compass,
  Building2,
  Home as HomeIcon,
  Ruler,
  Trees,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import {
  homeFaqs,
  journey,
  packages,
  principles,
  projects,
  services,
  whatsappVisit,
  whatsappGeneral,
  phoneDisplay,
  phoneTel,
} from "@/data/copy";

export const Route = createFileRoute("/")({
  component: Home,
});

const architecturalThemes = [
  {
    id: "01",
    title: "Modern Villa Contemporary",
    subtitle: "Teak · Travertine · Expansive Double Glass",
    desc: "Seamless indoor-outdoor living with floor-to-ceiling glass, cantilevered canopies, and warm travertine stone facades.",
    tag: "Signature Villa",
    image: "/photos/hero-architectural-villa.webp",
  },
  {
    id: "02",
    title: "DC Converted Plotted Communities",
    subtitle: "25–50 Ft Concrete Roads · Underground Utilities · Green Corridors",
    desc: "Gated residential plots with legal title certainty, underground sewage, dedicated water pipelines, and tree-lined avenues.",
    tag: "Plotted Development",
    image: "/photos/images-sai-roots-entrance.webp",
  },
  {
    id: "03",
    title: "Turnkey Independent Residences",
    subtitle: "550-Grade TMT Steel · 53-Grade Cement · Teak Main Doors",
    desc: "Ground-up custom home builds designed specifically around your family lifestyle, with stage-wise transparent billing.",
    tag: "Custom Construction",
    image: "/photos/images-mr-rajendra-residence-proposed-design.webp",
  },
  {
    id: "04",
    title: "Silent Luxury Bungalows",
    subtitle: "Exposed Brick & Stone · Cantilever Terraces · Warm Ambient Glow",
    desc: "Quiet architectural dignity using natural terracotta, granite accents, and energy-efficient cross ventilation.",
    tag: "Bungalows",
    image: "/photos/hero-vision-transition.webp",
  },
  {
    id: "05",
    title: "Gated Park Townships",
    subtitle: "53 Sites · Grand Entrance Arch · Landscaped Green Corridors",
    desc: "Planned master communities featuring secure perimeter compound walls, security cabins, and children\'s parks.",
    tag: "Townships",
    image: "/photos/images-druthi-nice-city-completed-01.webp",
  },
  {
    id: "06",
    title: "Granite & Vitrified Elegance",
    subtitle: "Granite Flooring · UPVC Acoustic Windows · Modular Living",
    desc: "Premium interior finishes with teak doors, branded sanitaryware, and smart modular kitchen provisions.",
    tag: "Turnkey Finishing",
    image: "/photos/images-green-valley-reference.webp",
  },
];

function Home() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [heroMode, setHeroMode] = useState<"transition" | "villa" | "blueprint">("transition");

  // Calculator State
  const [area, setArea] = useState<number>(1200);
  const [selectedPkg, setSelectedPkg] = useState<"vitrified" | "granite">("vitrified");

  const rate = selectedPkg === "vitrified" ? 1950 : 2200;
  const estimatedCost = (area * rate).toLocaleString("en-IN");
  const estimatedMonths = area <= 1200 ? "10 – 12" : area <= 2000 ? "12 – 14" : "14 – 16";

  const calcWhatsappLink = `https://wa.me/919632734110?text=Hi%2C%20I%20used%20your%20cost%20calculator%20for%20${area}%20sq.ft%20with%20${selectedPkg}%20package%20(Estimated%3A%20₹${estimatedCost}).%20Please%20guide%20me%20further.`;

  return (
    <main className="bg-[#1F3630] text-[#FDFCEE] selection:bg-terracotta selection:text-pine">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: #1F3630
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#1F3630] text-linen flex items-center border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={
              heroMode === "transition"
                ? "/photos/hero-vision-transition.webp"
                : heroMode === "villa"
                ? "/photos/hero-architectural-villa.webp"
                : "/photos/hero-blueprint-sketch.webp"
            }
            alt="Warm Architecture Editorial Villa - Global Mahanshi Builders"
            className="h-full w-full object-cover object-center transition-all duration-1000 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F3630]/95 via-[#1F3630]/70 to-transparent sm:w-3/4 lg:w-3/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3630] via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-lg">
              <span className="dot size-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-linen/95">
                Bengaluru • Residential &amp; Plotted Development
              </span>
            </div>

            <div className="mt-6">
              <p className="font-serif italic text-lg sm:text-xl text-terracotta tracking-wide">
                Step into the vision with Global Mahanshi
              </p>
              <h1 className="mt-2 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-sm">
                From a Drawing <br className="hidden sm:inline" />
                <span className="inline-block rounded-md px-2 py-0.5 my-1 bg-white/15 backdrop-blur-md border border-white/20 text-terracotta">
                  on paper.
                </span>{" "}
                <br />
                to a Dream <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-amber-200">
                  under the sky.
                </span>
              </h1>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-linen/85 max-w-xl">
              Quality home construction, custom architecture, and legally secure residential plots in
              South Bengaluru — planned, built, and delivered under one roof by one trusted company.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-linen/60 mr-2">
                View Concept:
              </span>
              <button
                type="button"
                onClick={() => setHeroMode("transition")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all ${
                  heroMode === "transition"
                    ? "bg-terracotta text-pine shadow-md"
                    : "border border-white/20 bg-white/5 text-linen/70 hover:bg-white/15"
                }`}
              >
                Drafting &amp; Twilight Blend
              </button>
              <button
                type="button"
                onClick={() => setHeroMode("villa")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all ${
                  heroMode === "villa"
                    ? "bg-terracotta text-pine shadow-md"
                    : "border border-white/20 bg-white/5 text-linen/70 hover:bg-white/15"
                }`}
              >
                Realistic Villa
              </button>
              <button
                type="button"
                onClick={() => setHeroMode("blueprint")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all ${
                  heroMode === "blueprint"
                    ? "bg-terracotta text-pine shadow-md"
                    : "border border-white/20 bg-white/5 text-linen/70 hover:bg-white/15"
                }`}
              >
                Blueprint Lines
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="sweep group inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold tracking-wider uppercase text-white shadow-xl transition-all duration-300 hover:bg-terracotta hover:text-pine hover:scale-105"
              >
                <span>Book a Site Visit</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium tracking-wide text-linen backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
              >
                <span>Ongoing Layouts</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 left-6 z-20 hidden lg:block mx-auto max-w-7xl">
          <div className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-4 divide-x divide-white/15 text-center">
              <div className="px-4">
                <p className="font-display text-2xl font-bold text-linen">100+ Projects</p>
                <p className="text-xs text-linen/70 uppercase tracking-wider mt-0.5">
                  Completed Across Bengaluru
                </p>
              </div>
              <div className="px-4">
                <p className="font-display text-2xl font-bold text-terracotta">DC Converted</p>
                <p className="text-xs text-linen/70 uppercase tracking-wider mt-0.5">
                  Individual E-Khata Plots
                </p>
              </div>
              <div className="px-4">
                <p className="font-display text-2xl font-bold text-linen">₹1,950 / sq.ft</p>
                <p className="text-xs text-linen/70 uppercase tracking-wider mt-0.5">
                  Construction Packages Onwards
                </p>
              </div>
              <div className="px-4">
                <p className="font-display text-2xl font-bold text-amber-200">12 Months</p>
                <p className="text-xs text-linen/70 uppercase tracking-wider mt-0.5">
                  Standard Home Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ARCHITECTURAL THEMES & PALETTES: ALTERNATE LIGHTER BG (#4B5E59)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#4B5E59] text-linen border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                The Aesthetic Spectrum
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Architectural Themes &amp; Palettes
              </h2>
            </div>
            <p className="max-w-md text-sm text-linen/85 leading-relaxed">
              From modern contemporary villas to legally approved plotted communities. Explore our
              board of materials, streetscapes, and spatial concepts.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            {/* Theme List Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {architecturalThemes.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTheme(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    activeTheme === idx
                      ? "bg-[#1F3630] text-white border-terracotta shadow-2xl scale-[1.02]"
                      : "bg-[#1F3630]/40 hover:bg-[#1F3630]/65 text-linen border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        activeTheme === idx ? "text-terracotta" : "text-amber-200"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full ${
                        activeTheme === idx ? "bg-white/15 text-terracotta" : "bg-white/10 text-linen/75"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-medium ${
                      activeTheme === idx ? "text-linen/90" : "text-linen/70"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Theme Detailed Card Display */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#1F3630]/90 shadow-2xl">
                <div className="zoom relative h-[380px] sm:h-[440px] overflow-hidden">
                  <img
                    src={architecturalThemes[activeTheme].image}
                    alt={architecturalThemes[activeTheme].title}
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                      Palette {architecturalThemes[activeTheme].id}
                    </span>
                    <h4 className="font-display text-3xl font-bold mt-1">
                      {architecturalThemes[activeTheme].title}
                    </h4>
                    <p className="mt-2 text-sm text-linen/90 leading-relaxed max-w-lg">
                      {architecturalThemes[activeTheme].desc}
                    </p>
                    <p className="mt-3 text-xs font-medium text-amber-200">
                      {architecturalThemes[activeTheme].subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-[#162723] flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-semibold text-linen/90 uppercase tracking-wider">
                      Available for Development &amp; Custom Builds
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta hover:text-white transition-colors"
                  >
                    <span>Enquire for this theme</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FEATURED WORK / PLOTTED PROJECTS: #1F3630
      ───────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-[#1F3630] text-[#FDFCEE] px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Portfolio &amp; Developments
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-linen">
                Active Projects &amp; Completed Landmarks
              </h2>
            </div>
            <p className="max-w-md text-sm text-linen/75 leading-relaxed">
              Legally verified plotted developments and completed communities across South Bengaluru.
              Each project with full infrastructure in place.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Sai Roots Layout (Flagship) */}
            <div className="group rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-terracotta hover:bg-white/10 hover:shadow-2xl">
              <div>
                <div className="zoom relative h-64 overflow-hidden">
                  <img
                    src="/photos/images-sai-roots-entrance.webp"
                    alt="Sai Roots Layout - Jigani Phase 1"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-emerald-700/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    DC Converted • E-Khata
                  </div>
                  <div className="arrow">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-terracotta uppercase font-bold tracking-wider">
                    <span>Jigani Phase-1, Bengaluru</span>
                    <span>53 Premium Sites</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-terracotta transition-colors">
                    Sai Roots Layout
                  </h3>
                  <p className="mt-3 text-sm text-linen/80 leading-relaxed">
                    53 sites (600 – 1,300+ sq.ft) with 50 ft main road, 40 ft entrance, 25 ft concrete
                    internal roads, underground sewage, and immediate registration ready.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-200">Ready to Construct</span>
                <Link
                  to="/projects/$slug"
                  params={{ slug: "sai-roots-layout" }}
                  className="ln text-xs font-bold uppercase tracking-wider text-linen hover:text-terracotta inline-flex items-center gap-1"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Card 2: Sri Sai Prasanthi */}
            <div className="group rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-terracotta hover:bg-white/10 hover:shadow-2xl">
              <div>
                <div className="zoom relative h-64 overflow-hidden">
                  <img
                    src="/photos/images-sri-sai-prasanthi-entrance.webp"
                    alt="Sri Sai Prasanthi Layout"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-blue-700/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Panchayath Approved
                  </div>
                  <div className="arrow">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-terracotta uppercase font-bold tracking-wider">
                    <span>Ramasandra, Jigani</span>
                    <span>Plots Available</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-terracotta transition-colors">
                    Sri Sai Prasanthi
                  </h3>
                  <p className="mt-3 text-sm text-linen/80 leading-relaxed">
                    Well-developed residential plotted layout with asphalted roads, water provisions,
                    and clear legal documentation ready for independent home construction.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-200">Plots Available</span>
                <Link
                  to="/projects/$slug"
                  params={{ slug: "sri-sai-prasanthi" }}
                  className="ln text-xs font-bold uppercase tracking-wider text-linen hover:text-terracotta inline-flex items-center gap-1"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Card 3: Mr. Rajendra Residence (Independent House) */}
            <div className="group rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-terracotta hover:bg-white/10 hover:shadow-2xl">
              <div>
                <div className="zoom relative h-64 overflow-hidden">
                  <img
                    src="/photos/images-mr-rajendra-residence-proposed-design.webp"
                    alt="Independent House Construction"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-amber-700/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Custom Turnkey
                  </div>
                  <div className="arrow">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-terracotta uppercase font-bold tracking-wider">
                    <span>Bengaluru</span>
                    <span>G+2 Independent Villa</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-terracotta transition-colors">
                    Custom House Construction
                  </h3>
                  <p className="mt-3 text-sm text-linen/80 leading-relaxed">
                    Turnkey construction from foundation to final paint. Built with 550-grade TMT steel,
                    branded 53-grade cement, and premium teak main door fixtures.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-200">12 Month Handover</span>
                <Link
                  to="/projects/$slug"
                  params={{ slug: "mr-rajendra-residence" }}
                  className="ln text-xs font-bold uppercase tracking-wider text-linen hover:text-terracotta inline-flex items-center gap-1"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-linen transition-all hover:bg-white/15 hover:border-terracotta"
            >
              <span>View All 5 Projects &amp; Layouts</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHO WE ARE & 4 FOUNDATIONAL PILLARS: ALTERNATE LIGHTER BG (#4B5E59)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#4B5E59] text-linen border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                Who We Are
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Building Trust Since Day One
              </h2>
              <p className="mt-6 text-base leading-relaxed text-linen/90">
                Global Mahanshi Builders is a professionally managed construction and real estate
                development company headquartered in Bengaluru, established in January 2026.
              </p>
              <p className="mt-4 text-base leading-relaxed text-linen/90">
                With construction as our core strength, we build high-quality homes, develop residential
                layouts, and provide customers with dependable end-to-end solutions — backed by
                professional execution and transparent business practices.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-[#1F3630]/85 border border-white/20 shadow-xl">
                <p className="font-serif italic text-lg text-linen">
                  "A home is the most sacred investment a family makes. We ensure every square foot is
                  legally unshakeable and structurally timeless."
                </p>
                <p className="mt-3 text-xs font-bold tracking-wider uppercase text-terracotta">
                  — G. Muniswamy, Founder &amp; Managing Director
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {principles.map((item, idx) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-[#1F3630]/60 border border-white/15 shadow-md transition-all duration-300 hover:border-terracotta hover:bg-[#1F3630]/85"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-amber-200 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-linen/80">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. TRANSPARENT PACKAGES & PRICING: #1F3630
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1F3630] px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto pb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Clear &amp; Transparent
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Three Ways to Build With Us
            </h2>
            <p className="mt-4 text-base text-linen/70 leading-relaxed">
              Every package comes with a complete written scope of work — no surprise escalations or
              hidden charges within the agreed specification.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Package 1: Vitrified */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg flex flex-col justify-between transition-all duration-300 hover:bg-white/10 hover:border-terracotta">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  Package 01
                </span>
                <h3 className="mt-1 font-display text-3xl font-bold text-white">
                  Standard Vitrified
                </h3>
                <div className="mt-4 pb-4 border-b border-white/15">
                  <p className="font-display text-4xl font-extrabold text-amber-200">
                    ₹1,950
                    <span className="text-base font-normal text-linen/60"> / sq.ft</span>
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    ✓ Complete foundation to turnkey paint
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-linen/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Premium vitrified tile flooring throughout</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Teak wood main door &amp; flush internal doors</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Branded UPVC windows with protective grills</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>53-grade branded cement &amp; 550-grade TMT steel</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-xs font-bold uppercase tracking-wider text-linen transition-colors hover:bg-white/15 hover:border-terracotta"
                >
                  <span>Full Package Specs</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Package 2: Granite */}
            <div className="relative rounded-3xl border-2 border-clay bg-[#243F38]/90 p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-clay px-4 py-1 text-[11px] font-bold tracking-wider uppercase text-white shadow-md">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  Package 02
                </span>
                <h3 className="mt-1 font-display text-3xl font-bold text-white">
                  Standard Granite
                </h3>
                <div className="mt-4 pb-4 border-b border-white/15">
                  <p className="font-display text-4xl font-extrabold text-amber-200">
                    ₹2,200
                    <span className="text-base font-normal text-linen/60"> / sq.ft</span>
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    ✓ Luxury granite flooring included
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-linen/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Polished granite flooring in living, kitchen &amp; bedrooms</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Solid teak wood main frame and brass fittings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>UPVC windows with toughened glass &amp; security mesh</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Anchor / Finolex electricals &amp; Jaquar bath fittings</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-clay py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-terracotta hover:text-pine"
                >
                  <span>Full Package Specs</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Package 3: Turnkey Custom Villa & Layout Plot */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg flex flex-col justify-between transition-all duration-300 hover:bg-white/10 hover:border-terracotta">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  Package 03
                </span>
                <h3 className="mt-1 font-display text-3xl font-bold text-white">
                  Turnkey Villa &amp; Plot
                </h3>
                <div className="mt-4 pb-4 border-b border-white/15">
                  <p className="font-display text-4xl font-extrabold text-amber-200">
                    Custom Quote
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    ✓ Plot purchase + Architect floor plan + Build
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-linen/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>DC converted E-Khata plot selection assistance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Architectural 3D elevation &amp; bespoke space planning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Stage-wise inspections with engineering certification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Guaranteed 12-month standard handover timeline</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-xs font-bold uppercase tracking-wider text-linen transition-colors hover:bg-white/15 hover:border-terracotta"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INTERACTIVE COST ESTIMATOR: ALTERNATE LIGHTER BG (#4B5E59)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#4B5E59] text-linen border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[#1F3630]/90 text-linen p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-white/20">
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-clay/20 blur-[100px]"></div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                  Interactive Planning
                </span>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  Calculate Your Home Estimate in 10 Seconds
                </h2>
                <p className="mt-4 text-sm sm:text-base text-linen/85 leading-relaxed max-w-lg">
                  Choose your built-up square footage and finish package to generate an instant
                  transparent estimate with delivery milestones.
                </p>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-linen/70 mb-3">
                    Standard Bangalore Plot Presets:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { label: "20x40 (800 sq ft)", val: 800 },
                      { label: "30x40 (1,200 sq ft)", val: 1200 },
                      { label: "30x50 (1,500 sq ft)", val: 1500 },
                      { label: "Duplex G+1 (2,400 sq ft)", val: 2400 },
                    ].map((p) => (
                      <button
                        key={p.val}
                        type="button"
                        onClick={() => setArea(p.val)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                          area === p.val
                            ? "bg-clay text-white shadow-md"
                            : "border border-white/20 bg-white/10 text-linen hover:bg-white/20"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-linen/90 block mb-2">
                      Built-up Area: <span className="text-amber-200 font-bold">{area} sq.ft</span>
                    </label>
                    <input
                      type="range"
                      min="600"
                      max="4000"
                      step="50"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-terracotta cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-linen/60 mt-1">
                      <span>600 sq.ft</span>
                      <span>2,000 sq.ft</span>
                      <span>4,000 sq.ft</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-linen/90 block mb-2">
                      Finishing Specification:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPkg("vitrified")}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          selectedPkg === "vitrified"
                            ? "bg-white/25 border-terracotta text-white shadow-md"
                            : "border-white/15 bg-white/5 text-linen/80"
                        }`}
                      >
                        <p className="text-xs font-bold">Standard Vitrified</p>
                        <p className="text-[11px] text-amber-200 font-semibold mt-0.5">₹1,950 / sq.ft</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPkg("granite")}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          selectedPkg === "granite"
                            ? "bg-white/25 border-terracotta text-white shadow-md"
                            : "border-white/15 bg-white/5 text-linen/80"
                        }`}
                      >
                        <p className="text-xs font-bold">Standard Granite</p>
                        <p className="text-[11px] text-amber-200 font-semibold mt-0.5">₹2,200 / sq.ft</p>
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-5 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-linen/80 uppercase tracking-wider">
                        Estimated Build Cost:
                      </span>
                      <span className="font-display text-3xl font-extrabold text-amber-200">
                        ₹{estimatedCost}*
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-linen/80">
                      <span>Estimated Construction Duration:</span>
                      <span className="font-semibold text-white">{estimatedMonths} Months</span>
                    </div>
                  </div>

                  <a
                    href={calcWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sweep flex items-center justify-center gap-2 rounded-full bg-clay py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-terracotta hover:text-pine"
                  >
                    <MessageSquare className="size-4" />
                    <span>Send This Estimate to WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. YOUR JOURNEY WITH US: #1F3630
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1F3630] px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto pb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Clear &amp; Predictable
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-base text-linen/70 leading-relaxed">
              From first site visit to final key handover — a transparent, documented process at
              every stage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {journey.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-terracotta transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-terracotta">{step.step}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-linen/70">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. BOOK SITE VISIT & ENQUIRY: ALTERNATE LIGHTER BG (#4B5E59)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-[#4B5E59] text-linen">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                Take the First Step
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Schedule Your Exclusive Site Visit
              </h2>
              <p className="mt-4 text-base text-linen/90 leading-relaxed">
                Inspect our active plotted developments at Sai Roots Layout (Jigani), examine underground
                infrastructure, or review floor plan drawings in person.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#1F3630]/75 border border-white/15 shadow-md">
                  <Phone className="size-5 text-terracotta shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-linen/70 font-semibold">
                      Direct Sales Hotline:
                    </p>
                    <a href={phoneTel} className="font-display text-lg font-bold text-white ln hover:text-terracotta">
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#1F3630]/75 border border-white/15 shadow-md">
                  <Calendar className="size-5 text-terracotta shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-linen/70 font-semibold">
                      Site Visit Timings:
                    </p>
                    <p className="text-sm font-medium text-white">
                      9:30 AM – 5:30 PM (Tuesday Holiday)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/20 bg-[#1F3630]/90 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                <h3 className="font-display text-2xl font-bold text-white">
                  Send an Enquiry
                </h3>
                <p className="mt-1 text-xs text-linen/70 mb-6">
                  Our sales team reaches out during working hours to understand your requirements and
                  schedule your site visit.
                </p>
                <EnquiryForm tone="paper" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
