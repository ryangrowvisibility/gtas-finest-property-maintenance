const PHONE_DISPLAY = "(647) 745-9400";
const PHONE_TEL = "tel:+16477459400";
const PHONE_SMS = "sms:+16477459400";
const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=GTA'S%20Finest%20Property%20Maintenance%20Inc&query_place_id=ChIJ0f9Y04TVKogRnAacgz_s52M";
const FACEBOOK = "https://www.facebook.com/gtasfinestpm";
const INSTAGRAM = "https://www.instagram.com/gtasfinestpm";
const ADDRESS_LINE_1 = "13085 Yonge St, Suite 374";
const ADDRESS_LINE_2 = "Richmond Hill, ON L4E 0G2";

type IconName =
  | "pavers" | "steps" | "fence" | "grade" | "sod" | "mower" | "snow"
  | "phone" | "star" | "clock" | "pin" | "check" | "chat" | "user" | "home" | "quote" | "leaf" | "spark";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "pavers":
      return (<svg {...p}><rect x="3" y="3" width="8" height="5" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="3" y="10" width="5" height="5" rx="1" /><rect x="10" y="10" width="11" height="5" rx="1" /><rect x="3" y="17" width="11" height="4" rx="1" /><rect x="16" y="17" width="5" height="4" rx="1" /></svg>);
    case "steps":
      return (<svg {...p}><path d="M3 20h18" /><path d="M3 20v-4h6v-4h6V8h6v12" /></svg>);
    case "fence":
      return (<svg {...p}><path d="M5 21V7l2-3 2 3v14" /><path d="M15 21V7l2-3 2 3v14" /><path d="M9 10h6" /><path d="M9 16h6" /></svg>);
    case "grade":
      return (<svg {...p}><path d="M3 17l7-5 4 3 7-6" /><path d="M3 21h18" /><path d="M17 9h4v4" /></svg>);
    case "sod":
      return (<svg {...p}><path d="M3 20h18" /><path d="M5 20c0-4 1-7 2-9" /><path d="M9 20c0-5 1-8 3-11" /><path d="M14 20c0-4 0-7-1-10" /><path d="M18 20c0-4-1-6-2-8" /></svg>);
    case "mower":
      return (<svg {...p}><circle cx="7" cy="18" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="M4 15h16l-2-5H8" /><path d="M8 10L5 4" /></svg>);
    case "snow":
      return (<svg {...p}><path d="M12 2v20" /><path d="M4.9 6.5l14.2 11" /><path d="M19.1 6.5l-14.2 11" /><path d="M9 4l3 2 3-2" /><path d="M9 20l3-2 3 2" /></svg>);
    case "phone":
      return (<svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
    case "star":
      return (<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>);
    case "clock":
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
    case "pin":
      return (<svg {...p}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case "check":
      return (<svg {...p}><path d="M20 6L9 17l-5-5" /></svg>);
    case "chat":
      return (<svg {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>);
    case "user":
      return (<svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>);
    case "home":
      return (<svg {...p}><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></svg>);
    case "quote":
      return (<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.5 6C6.5 6.8 5 9.2 5 12.5V18h5.5v-5.5H8c0-2 .7-3.3 2.3-3.9zM18.5 6c-3 .8-4.5 3.2-4.5 6.5V18h5.5v-5.5H17c0-2 .7-3.3 2.3-3.9z" /></svg>);
    case "leaf":
      return (<svg {...p}><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19l7-7" /></svg>);
    case "spark":
      return (<svg {...p}><path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="M6 6l2.5 2.5" /><path d="M15.5 15.5L18 18" /><path d="M6 18l2.5-2.5" /><path d="M15.5 8.5L18 6" /></svg>);
  }
}

function Rating({ value, className = "h-5 w-5" }: { value: number; className?: string }) {
  const full = Math.floor(value);
  return (
    <span className="inline-flex" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={i < full ? "text-star" : "text-line"}>
          <Icon name="star" className={className} />
        </span>
      ))}
    </span>
  );
}

const services: { icon: IconName; name: string; text: string; tag?: string }[] = [
  {
    icon: "pavers",
    name: "Interlock Patios & Walkways",
    text: "New interlock patios, BBQ pads and walkways, built quickly and priced fairly. A clean, level surface you can enjoy all summer.",
    tag: "Most booked",
  },
  {
    icon: "steps",
    name: "Interlock Repair & Step Releveling",
    text: "Sunken or tilting interlock steps lifted, re-based and relaid, front and back. Small pads rebuilt so they sit flat again.",
  },
  {
    icon: "fence",
    name: "Fences & Gates",
    text: "Fence relocation, new access gates and large sliding gates up to 10 feet wide, installed straight and solid.",
  },
  {
    icon: "grade",
    name: "Soil Regrading",
    text: "Backyards regraded with compacted gravel so rainwater runs away from the house instead of pooling by the foundation.",
  },
  {
    icon: "sod",
    name: "Topsoil & Sod Remediation",
    text: "New build lawn that will not grow? We scrape out the gravel and construction debris left under builder sod and bring in quality topsoil.",
    tag: "New-build fix",
  },
  {
    icon: "mower",
    name: "Lawn Maintenance",
    text: "Regular seasonal lawn care for homes and commercial properties, so the yard always looks looked-after.",
  },
  {
    icon: "snow",
    name: "Snow Removal",
    text: "Winter snow clearing for residential and commercial clients in Richmond Hill and York Region.",
  },
];

const reviews = [
  {
    name: "Valorie H.",
    job: "Topsoil & sod remediation",
    text: "Our builder laid sod right over packed gravel and debris. Josh scraped out yards of it, brought in good topsoil and checked in with us at every step. A man of real integrity, and his pricing is very fair.",
  },
  {
    name: "Carmen F.",
    job: "Interlock step releveling",
    text: "They releveled our front and back interlock stairs and rebuilt a 4x6 BBQ pad. Prompt, clean and precise. We are booking them again in the spring.",
  },
  {
    name: "Luis C.",
    job: "Backyard regrade & gates",
    text: "Regraded the yard with compacted gravel, moved the fence, and installed a new access gate plus a 10 ft sliding gate. Fast work. We will use them again.",
  },
  {
    name: "Michael D.",
    job: "Interlock BBQ patio",
    text: "Josh and his team built a patio for our barbecue area. Fast, high quality and affordable.",
  },
  {
    name: "Yalini S.",
    job: "Fence & backyard work",
    text: "Clean, fast and efficient. A friendly team that clearly cares about its clients.",
  },
  {
    name: "Lindsay K.",
    job: "Landscaping, lawn & snow",
    text: "Amazing prices and even better work, whether it is landscaping, lawn maintenance or snow removal.",
  },
];

const whyUs: { icon: IconName; title: string; text: string }[] = [
  { icon: "user", title: "Josh is on your job", text: "The owner checks in at every step and stands behind the result." },
  { icon: "check", title: "Very fair prices", text: "The phrase customers use most. You get a clear price before we start." },
  { icon: "spark", title: "Clean and precise", text: "Straight lines, level stones, and a tidy site when the work is done." },
  { icon: "clock", title: "Fast turnaround", text: "Patios, gates and regrades finished quickly, without cutting corners." },
];

const steps = [
  { title: "Call or text Josh", text: `Reach us at ${PHONE_DISPLAY}. A few photos of the yard by text helps us understand the job right away.` },
  { title: "On-site look & price", text: "We come out, look at the grade, the base and what you want, then give you an honest, fair price." },
  { title: "We do the work", text: "Our crew builds it fast and clean, and Josh keeps you updated at each stage." },
  { title: "Walk it together", text: "We walk the finished job with you. Happy customers book us again for the next season." },
];

const areas = ["Richmond Hill", "York Region", "Greater Toronto Area"];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We are based in Richmond Hill and work across York Region and the wider GTA. If you are close by and not sure, call or text and ask.",
  },
  {
    q: "Do you work on residential and commercial properties?",
    a: "Yes. GTA's Finest handles hardscaping, lawn maintenance and snow removal for both homeowners and commercial properties.",
  },
  {
    q: "My interlock steps have sunk. Can you fix them without replacing everything?",
    a: "Often, yes. We lift the stones, rebuild and compact the base, and relay them level. Customers have had front and back steps releveled and small BBQ pads rebuilt this way.",
  },
  {
    q: "The sod on our new build is dying. What can you do?",
    a: "Builders sometimes lay sod over hard-packed gravel and debris, so grass can not root. We scrape that material out, bring in quality topsoil and get the lawn on proper ground.",
  },
  {
    q: "Do you offer snow removal?",
    a: "Yes. We provide snow removal for residential and commercial clients, along with lawn maintenance through the warmer months.",
  },
  {
    q: "How do I get a price?",
    a: `Call or text ${PHONE_DISPLAY}. We will come out, look at the job and give you a clear, fair price before any work starts.`,
  },
  {
    q: "When can I reach you?",
    a: "We open at 7 a.m. on Mondays. Calls and texts are the fastest way to reach Josh; if he is on a job, leave a message and he will call you back.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "GTA'S Finest Property Maintenance Inc",
  telephone: "+1-647-745-9400",
  url: "https://gtas-finest-property-maintenance.growlocalvisibility.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13085 Yonge St STE 374",
    addressLocality: "Richmond Hill",
    addressRegion: "ON",
    postalCode: "L4E 0G2",
    addressCountry: "CA",
  },
  areaServed: areas,
  sameAs: [FACEBOOK, INSTAGRAM],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.2, reviewCount: 10 },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hardscape and property maintenance",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

function CallButton({ big = false, label }: { big?: boolean; label?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`btn ring-on-hover inline-flex items-center justify-center gap-2 rounded-xl bg-cta font-bold text-brand-deep hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${big ? "min-h-14 px-7 text-lg" : "min-h-12 px-5"}`}
    >
      <span className="ring-icon inline-flex"><Icon name="phone" className="h-5 w-5" /></span>
      {label ?? `Call ${PHONE_DISPLAY}`}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="GTA's Finest Property Maintenance home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cta"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-xl font-extrabold text-brand-deep">GTA’s Finest</span>
              <span className="block text-xs font-semibold text-muted">Property Maintenance</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold lg:flex">
            <a href="#services" className="hover:text-brand hover:underline">Services</a>
            <a href="#reviews" className="hover:text-brand hover:underline">Reviews</a>
            <a href="#about" className="hover:text-brand hover:underline">About</a>
            <a href="#area" className="hover:text-brand hover:underline">Service Area</a>
            <a href="#faq" className="hover:text-brand hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold text-brand-deep xl:inline">{PHONE_DISPLAY}</a>
            <span className="hidden md:inline-flex"><CallButton label="Call Josh" /></span>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-brand-deep md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-brand ring-1 ring-line">
                <Icon name="pin" className="h-4 w-4" /> Richmond Hill · York Region · GTA
              </p>
              <h1 className="rise rise-2 text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-brand-deep">
                Interlock, Fences &amp; Yard Grading in Richmond Hill
              </h1>
              <p className="rise rise-3 mt-5 max-w-[58ch] text-lg text-muted">
                Patios, walkways, sunken-step repairs, gates, regrading and new-build lawn fixes, plus lawn care and snow removal all year. Josh and his crew do honest, clean work at a fair price.
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton big />
                <a href={PHONE_SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-brand bg-surface px-7 text-lg font-bold text-brand hover:bg-brand-soft">
                  <Icon name="chat" className="h-5 w-5" /> Text us a photo
                </a>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted hover:text-brand">
                <Rating value={4.2} />
                <span><strong className="text-ink">4.2</strong> · 10 Google reviews</span>
                <span aria-hidden="true">·</span>
                <span>Residential &amp; commercial</span>
                <span aria-hidden="true">·</span>
                <span>Owner-led</span>
              </a>
            </div>

            <div className="rise rise-3 space-y-4">
              <figure className="rounded-2xl bg-surface p-7 shadow-[0_18px_40px_-26px_oklch(0.28_0.06_160/0.5)] ring-1 ring-line">
                <span className="text-brand/25"><Icon name="quote" className="h-9 w-9" /></span>
                <blockquote className="mt-2 text-lg leading-relaxed">
                  “Josh scraped out yards of debris the builder left under our sod and brought in good topsoil, checking in at every step. Real integrity, and very fair pricing.”
                </blockquote>
                <figcaption className="mt-4 text-sm"><strong className="text-base">Valorie H.</strong> <span className="text-muted">· Sod remediation · Google review</span></figcaption>
              </figure>
              <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-brand p-5 text-white">
                <div><dt className="text-sm text-white/70">Opens</dt><dd className="font-bold">7 a.m. Mondays</dd></div>
                <div><dt className="text-sm text-white/70">Based in</dt><dd className="font-bold">Richmond Hill</dd></div>
                <div><dt className="text-sm text-white/70">Seasons</dt><dd className="font-bold">Year-round</dd></div>
                <div><dt className="text-sm text-white/70">Quotes</dt><dd className="font-bold">On-site, clear price</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers choose GTA's Finest" className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-7 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, big: "4.2 on Google", small: "10 reviews" },
              { icon: "user" as IconName, big: "Owner-led", small: "Josh on every job" },
              { icon: "home" as IconName, big: "Homes & businesses", small: "Residential and commercial" },
              { icon: "snow" as IconName, big: "Year-round", small: "Hardscape, lawn & snow" },
            ].map((t) => (
              <li key={t.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span className="leading-tight"><strong className="block font-heading text-brand-deep">{t.big}</strong><span className="text-sm text-muted">{t.small}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">What we do around Richmond Hill</h2>
              <p className="mt-4 text-lg text-muted">
                Hardscaping first, with the property care to keep it looking good. Whether it is one sunken step or a full backyard regrade with new gates, we treat it like our own yard.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`card flex flex-col rounded-2xl bg-surface p-6 ring-1 ${s.tag ? "ring-2 ring-brand" : "ring-line"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-cta"><Icon name={s.icon} /></span>
                    {s.tag && <span className="rounded-full bg-cta/30 px-3 py-1 text-xs font-bold text-brand-deep">{s.tag}</span>}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-deep">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1 font-bold text-brand hover:underline">Call about this <span aria-hidden="true">→</span></a>
                </article>
              ))}
              <article className="flex flex-col justify-center rounded-2xl bg-brand-deep p-6 text-white">
                <h3 className="text-xl font-bold">Not sure what your yard needs?</h3>
                <p className="mt-2 text-white/80">Text Josh a couple of photos. He will tell you honestly what it needs, even if it is a small fix.</p>
                <a href={PHONE_SMS} className="btn mt-5 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl bg-cta px-5 font-bold text-brand-deep hover:bg-cta-hover">
                  <Icon name="chat" className="h-5 w-5" /> Text photos
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Rated 4.2 from 10 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Recent customers keep saying the same three things: clean, fast and fairly priced.</p>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center gap-2 self-start rounded-xl border-2 border-brand bg-surface px-5 font-bold text-brand hover:bg-brand-soft md:self-auto">
                Read all reviews on Google <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-line">
                  <span className="text-brand/25"><Icon name="quote" className="h-7 w-7" /></span>
                  <blockquote className="mt-2 flex-1">“{r.text}”</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-heading font-bold text-brand">{r.name.charAt(0)}</span>
                    <span className="text-sm leading-tight"><strong className="block text-base">{r.name}</strong><span className="text-muted">{r.job} · Google</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">An independent Richmond Hill crew, led by Josh</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>
                  GTA’s Finest Property Maintenance is an independent landscape and hardscape company based right here in Richmond Hill. We work on homes and commercial properties across York Region and the GTA.
                </p>
                <p>
                  Josh leads the team and stays involved on every project. Customers talk about his integrity: he explains what the ground actually needs, checks in as the work moves along, and charges a price that feels fair when the job is done.
                </p>
                <p>
                  A lot of our work is fixing what went wrong somewhere else: sod laid over builder gravel, interlock steps that sank, yards that slope toward the house. We like turning those headaches into a yard you are proud of.
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="font-bold text-brand underline">Facebook</a>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-bold text-brand underline">Instagram</a>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <li key={w.title} className="rounded-2xl bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-cta"><Icon name={w.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{w.title}</h3>
                  <p className="mt-1 text-muted">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-4xl">How it works</h2>
            <p className="mt-3 max-w-[60ch] text-lg text-white/80">No pressure, no surprises. Four steps from first call to a finished yard.</p>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white/[0.07] p-6 ring-1 ring-white/15">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-heading text-lg font-extrabold text-brand-deep">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-white/80">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Serving Richmond Hill and York Region</h2>
              <p className="mt-4 text-lg text-muted">
                Our home base is Richmond Hill. We take hardscape, lawn and snow work across York Region and the Greater Toronto Area.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-tint px-4 py-2 font-semibold text-brand-deep">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <address className="mt-8 not-italic text-muted">
                <strong className="block text-ink">GTA’s Finest Property Maintenance Inc</strong>
                {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
              </address>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map of Richmond Hill, Ontario"
                src="https://maps.google.com/maps?q=Richmond%20Hill%2C%20ON&z=11&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Good questions, straight answers</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl bg-surface ring-1 ring-line">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-lg font-bold text-brand-deep">
                    {f.q}
                    <svg className="chev h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Let’s get your yard sorted. Call Josh.</h2>
              <p className="mt-3 text-lg text-white/80">Patios, steps, gates, grading, lawn or snow. A fair price, and work you will want to book again.</p>
            </div>
            <span className="shrink-0"><CallButton big label={PHONE_DISPLAY} /></span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink pb-28 text-white/75 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-heading text-xl font-extrabold text-white">GTA’s Finest Property Maintenance Inc</p>
            <p className="mt-3">Interlock, fences, grading, lawn care and snow removal in Richmond Hill, York Region and the GTA.</p>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href={PHONE_TEL} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</li>
              <li>Opens 7 a.m. Mondays</li>
              <li className="flex gap-3 pt-1">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="GTA's Finest on Facebook" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" /></svg>
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="GTA's Finest on Instagram" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" aria-label="GTA's Finest on Google Maps" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <Icon name="pin" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {services.map((s) => (<li key={s.name}>{s.name}</li>))}
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-[1200px] border-t border-white/15 px-5 pt-6 text-sm md:px-6">© {new Date().getFullYear()} GTA’s Finest Property Maintenance Inc. Serving Richmond Hill, York Region and the GTA.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-surface p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta font-bold text-brand-deep"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={PHONE_SMS} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand font-bold text-white"><Icon name="chat" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
