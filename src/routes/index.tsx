import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Cpu,
  Users,
  Megaphone,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { siteConfig, whatsappLink } from "@/config/site";
import logo from "@/assets/wiv-logo.png";
import gallery1 from "@/assets/wiv-gallery-1.jpg";
import gallery2 from "@/assets/wiv-gallery-2.jpg";
import gallery3 from "@/assets/wiv-gallery-3.jpg";

const title = "Wisdom Innovation Village | Learn. Apply. Grow.";
const description =
  "Wisdom Innovation Village helps MSMEs strengthen digital adoption, customer systems, marketing and practical business capabilities in Monrovia, Liberia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    icon: Cpu,
    title: "Digital Adoption & Transformation",
    text: "Practical technology and digital systems for stronger businesses.",
  },
  {
    icon: Users,
    title: "Customer & Business Systems",
    text: "Customer experience, CRM, workflows and business processes.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Storytelling",
    text: "Brand positioning, content, visibility and customer engagement.",
  },
  {
    icon: GraduationCap,
    title: "MSME Capacity Development",
    text: "Practical training, mentorship and implementation support.",
  },
];

const journey = ["Learn", "Apply", "Measure", "Improve"];

const gallery = [
  { src: gallery1, alt: "Entrepreneurs in a WIV business capability session" },
  { src: gallery2, alt: "A small business owner using digital tools in her shop" },
  { src: gallery3, alt: "A WIV facilitator leading a community learning session" },
];

const partnershipAreas = [
  "Digital Transformation",
  "MSME Programs",
  "Capacity Building",
  "Customer Experience",
  "Market Readiness",
  "Digital Adoption",
  "Research & Pilots",
];

function Index() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-gold-soft/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center fade-up">
          <img
            src={logo}
            alt="Wisdom Innovation Village logo"
            width={700}
            height={700}
            className="mx-auto w-56 max-w-full rounded-3xl sm:w-72"
          />
          <h1 className="mt-8 text-[2.1rem] font-semibold leading-[1.12] text-primary sm:text-5xl">
            Helping Businesses
            <br />
            Learn. Apply. Grow.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-14 w-full max-w-sm rounded-full bg-whatsapp text-base font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:brightness-95"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" aria-hidden />
                Connect on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 w-full max-w-sm rounded-full border-primary/25 text-base font-semibold text-primary transition hover:bg-secondary"
            >
              <a
                href={siteConfig.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="size-5" aria-hidden />
                Follow us on Facebook
              </a>
            </Button>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary underline-offset-4 transition hover:underline"
            >
              Explore WIV <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="scroll-mt-8 bg-cream px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            What we do
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold text-primary sm:text-4xl">
            Practical Solutions for Business Growth
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title: t, text }) => (
              <article
                key={t}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 rounded-full border-primary/25 px-7 text-primary"
            >
              <a
                href={siteConfig.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="size-5" aria-hidden />
                View WIV Capability Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WIV IN ACTION */}
      <section id="in-action" className="scroll-mt-8 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-xl text-3xl font-semibold text-primary sm:text-4xl">
            Learning Must Lead to Application.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We work with businesses, entrepreneurs, young people and communities to
            turn knowledge into practical capability.
          </p>

          <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
            {journey.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-accent/40 bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                  {step}
                </span>
                {i < journey.length - 1 ? (
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {gallery.map((image) => (
              <figure
                key={image.alt}
                className="reveal relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="cinematic-pan aspect-[4/5] w-full object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 film-grade"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section id="partnership" className="scroll-mt-8 px-5 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-maroon-deep px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
            Let's Build Stronger Businesses Together.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            WIV is open to collaboration with government, financial institutions,
            development partners, corporations, business networks, technology
            partners and MSMEs.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {partnershipAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-gold/40 px-4 py-1.5 text-sm text-gold-soft"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <EnquiryDialog
              intent="Partnership Enquiry"
              title="Discuss a Partnership"
              description="Share a few details and we will follow up personally."
              purposeLabel="Brief purpose of enquiry"
              purposePlaceholder="What would you like to explore together?"
              trigger={
                <Button
                  size="lg"
                  className="h-13 rounded-full bg-gold px-7 text-base font-semibold text-maroon-deep hover:brightness-95"
                >
                  Discuss a Partnership
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* BUSINESS SUPPORT */}
      <section id="support" className="scroll-mt-8 bg-cream px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Looking for Support for Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether the challenge is visibility, customer management, digital
            adoption, branding or business growth, the first step is understanding
            the problem.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <EnquiryDialog
              intent="Discovery Conversation"
              title="Request a Discovery Conversation"
              description="Tell us about your business and we will start with understanding the challenge."
              purposeLabel="What challenge would you like to solve?"
              purposePlaceholder="Briefly describe your business and the challenge."
              trigger={
                <Button
                  size="lg"
                  className="h-13 w-full max-w-sm rounded-full px-7 text-base font-semibold"
                >
                  Request a Discovery Conversation
                </Button>
              }
            />
            <a
              href={whatsappLink(
                "Hello WIV, I would like to request a discovery conversation about my business.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Or message us directly on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-8 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.12em] text-primary sm:text-3xl">
            Wisdom Innovation Village
          </h2>
          <ul className="mx-auto mt-8 max-w-md space-y-3">
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-[var(--shadow-card)] transition hover:border-accent"
                >
                  <Phone className="size-5 shrink-0 text-accent" aria-hidden />
                  <span className="min-w-0 truncate">Call / WhatsApp: {phone}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-[var(--shadow-card)] transition hover:border-accent"
              >
                <Mail className="size-5 shrink-0 text-accent" aria-hidden />
                <span className="min-w-0 truncate">{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-[var(--shadow-card)] transition hover:border-accent"
              >
                <Facebook className="size-5 shrink-0 text-accent" aria-hidden />
                <span className="min-w-0 truncate">{siteConfig.facebook.label}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-[var(--shadow-card)]">
              <MapPin className="size-5 shrink-0 text-accent" aria-hidden />
              <span className="min-w-0 truncate">{siteConfig.location}</span>
            </li>
          </ul>
          <p className="mt-12 text-center font-display text-2xl font-semibold text-primary">
            Learn. Apply. Grow.
          </p>
        </div>
      </section>

      {/* Sticky mobile WhatsApp */}
      <div className="sticky bottom-0 z-40 border-t border-border bg-background/90 px-5 py-3 backdrop-blur sm:hidden">
        <Button
          asChild
          className="h-12 w-full rounded-full bg-whatsapp text-base font-semibold text-primary-foreground"
        >
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-5" aria-hidden />
            Connect on WhatsApp
          </a>
        </Button>
      </div>
    </main>
  );
}
