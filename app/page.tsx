import { SOCIAL_URLS } from "../lib/socials";
import SocialLinks from "../components/SocialLinks";

const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

const DotRow = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) => {
  const inner = (
    <span className="dot-row">
      <span className="dot-row-label">{label}</span>
      <span className="dot-row-spacer" aria-hidden="true" />
      <span className="dot-row-value">{value}</span>
    </span>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-60 transition-opacity"
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
};

const vlogitSpec = [
  { label: "Beta testers", value: "1,700+" },
  { label: "Waitlist", value: "62,000+", href: "https://waitlister.me/p/vlogit" },
  { label: "Platform", value: "iOS" },
  { label: "Launch", value: "May 2026" },
  { label: "Stack", value: "Swift · Firebase · Cloudflare" },
];

const journeySpec = [
  { label: "Instagram", value: "@omarontape", href: SOCIAL_URLS.instagram },
  { label: "TikTok", value: "@omarontape", href: SOCIAL_URLS.tiktok },
  { label: "X (Twitter)", value: "@omarontape", href: SOCIAL_URLS.twitter },
  { label: "LinkedIn", value: "Omar Zeineddine", href: SOCIAL_URLS.linkedin },
  { label: "Vlogit page", value: "@theofficialvlogit", href: SOCIAL_URLS.vlogitInstagram },
];

const contactSpec = [
  { label: "Email", value: "ofzeineddine@gmail.com", href: "mailto:ofzeineddine@gmail.com" },
  { label: "App", value: "vlogit.app", href: "https://vlogit.app" },
  { label: "Waitlist", value: "waitlister.me/p/vlogit", href: "https://waitlister.me/p/vlogit" },
  { label: "Press", value: "UVA Today", href: "https://news.virginia.edu/content/hoo-built-app-helping-make-social-media-feel-more-real" },
];

const WRAP = "max-w-7xl mx-auto px-6 md:px-16 lg:px-24";

export default function Home() {
  return (
    <div className="bg-page text-ink">

      {/* ── OPENER ───────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center pt-28 pb-20">
        <div className={`${WRAP} w-full`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

            <div className="space-y-8 max-w-2xl">
              <div className="space-y-0">
                <h1 className="display-name text-ink">OMAR</h1>
                <h1 className="display-name text-ink">ZEINEDDINE</h1>
              </div>

              <div className="w-16 h-[3px] bg-accent" />

              <p className="body-lead text-muted">
                Currently building Vlogit in public.{" "}
                I&apos;ve grown over <span className="text-ink font-semibold">210K followers</span> across IG/TikTok in the last 9 months since starting to document my journey.
                Vlogit currently has 62,000 people on the waitlist, and over 1700 beta testers. Launching to the public in May 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://vlogit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 justify-center px-7 py-3.5 bg-accent hover:bg-ink text-page font-semibold rounded-full transition-colors text-sm"
                >
                  <span className="w-5 h-5 rounded-md overflow-hidden flex-shrink-0 block">
                    <img
                      src={`${basePath}/images/vlogit_logo.jpg`}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </span>
                  View Vlogit
                </a>
                <a
                  href={SOCIAL_URLS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-ink/20 hover:border-ink/50 text-ink font-semibold rounded-full transition-colors text-sm"
                >
                  Follow the Journey
                </a>
              </div>

              <SocialLinks />
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[390px] flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-ink/5">
                  <img
                    src={`${basePath}/images/omar.jpg`}
                    alt="Omar Zeineddine"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/30 -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VLOGIT ─── dark section ──────────────────────────── */}
      <section id="vlogit" className="section-dark bg-ink text-page py-24 md:py-32 border-t border-page/[0.07]">
        <div className={WRAP}>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-page/10">
                <img
                  src={`${basePath}/images/vlogit_logo.jpg`}
                  alt="Vlogit"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="font-barlow font-black text-accent leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                VLOGIT
              </span>
            </div>

            <p
              className="font-barlow font-black text-page leading-[0.92] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              &ldquo;Every day, someone in your friend group gets picked. You&apos;ve
              got 24 hours to Vlogit all.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-5 body-lead" style={{ color: "oklch(97% 0.012 80 / 0.6)" }}>
              <p>
                Vlogit started out as a fun side project. You create private friend groups,
                and every day, someone is picked to vlog their day in each group. 
              
              </p>
              <p>
                I started posting about the idea, and it blew up. Fast. The waitlist started
                growing, and I grew hundreds of thousands of followers. The side project
                then became my full-time job, as I quit my SWE job to go all-in just 1 month in.
              </p>
              <p>
                Vlogit is currently in its active beta phase, with over 1700 beta testers.
                It is launching fully to the public in May 2026.
              </p>
              <a
                href="https://vlogit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-page font-semibold text-sm transition-colors pt-2"
              >
                View Vlogit →
              </a>
            </div>

            <div>
              {vlogitSpec.map((row) => (
                <DotRow key={row.label} {...row} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── BUILDING IN PUBLIC ───────────────────────────────── */}
      <section id="journey" className="py-24 md:py-32 border-t border-ink/10">
        <div className={WRAP}>

          <div className="mb-14">
            <div
              className="font-barlow font-black text-accent leading-none mb-4"
              style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
            >
              210K+
            </div>
            <p className="body-lead text-muted max-w-2xl">
              Followers on Instagram and TikTok. All following my journey of building Vlogit. Every feature, every
              pivot, every number, every setback — posted publicly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="body-lead text-muted space-y-4">
              <p>
                I show everything. The good and the bad. The wins and the setbacks. The big launches and the small bug fixes. The growth and the dips. The features and the pivots. It&apos;s all there, for better or worse.
              </p>

            </div>

            <div>
              {journeySpec.map((row) => (
                <DotRow key={row.label} {...row} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── THE STORY ────────────────────────────────────────── */}
      <section id="story" className="py-24 md:py-32 border-t border-ink/10">
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-24 items-start">

            <h2 className="display-section text-ink lg:sticky lg:top-32">
              THE<br />FOUNDER
            </h2>

            <div className="space-y-5 body-lead text-muted max-w-2xl">
              <p>
                I graduated from UVA in May 2025 with a degree in Computer Science. Got a software
                engineering job right out of college and quit two months in to go all in on Vlogit.
              </p>
              <p>
                The app had already started taking off. People were following along on social, the
                waitlist was growing, and staying in a job felt like the wrong bet.
              </p>
              <p>
                I&apos;m currently based in San Francisco, and I travel between here and New York,
                building the app full-time and growing my personal brand. Showing the process and
                life of a founder authentically is really important to me, because being a founder
                is not an easy path, and social media tends to hide the bad parts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRESS ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-ink/10">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <p className="font-barlow font-black text-xs tracking-widest uppercase text-muted mb-8">
              Press
            </p>
            <blockquote
              className="font-barlow font-black text-accent leading-[0.92] mb-10"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              &ldquo;Once we got our friends to use Vlogit and enjoy it, the
              feeling was surreal. All of those months of grinding — it was the
              most rewarding part.&rdquo;
            </blockquote>
            <div className="flex items-center gap-6">
              <p className="text-sm text-muted">UVA Today — University of Virginia</p>
              <a
                href="https://news.virginia.edu/content/hoo-built-app-helping-make-social-media-feel-more-real"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-ink font-semibold transition-colors"
              >
                Read the feature →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-ink/10">
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            <h2 className="display-close text-ink">CONTACT.</h2>

            <div>
              {contactSpec.map((row) => (
                <DotRow key={row.label} {...row} />
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
