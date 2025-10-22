import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { getContent, type SiteContent } from "@/lib/content";

export const revalidate = 0;

export default async function Home() {
  const content: SiteContent = await getContent();

  return (
    <main className="relative overflow-hidden">
      <div className="grid-overlay" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <header className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3">
              {content.highlights.map((item) => (
                <span
                  key={item.label}
                  className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-cyan-500/20"
                >
                  <span className="text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                {content.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                {content.hero.subheadline}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={content.hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-[2px] hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                {content.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={content.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/60 hover:-translate-y-[2px]"
              >
                <Sparkles className="h-4 w-4 text-cyan-300" />
                {content.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <aside className="glass-panel grid gap-6 rounded-3xl p-8 shadow-2xl shadow-black/40">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                AI + Human Strategy
              </p>
              <p className="mt-3 text-lg text-slate-200">
                We build lean, intelligent workflows that move fast without
                compromising craft.
              </p>
            </div>
            <dl className="grid gap-6">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-700/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
                >
                  <dt className="text-sm uppercase tracking-wide text-slate-400">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold text-slate-50">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="rounded-2xl border border-slate-700/50 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">
                Who we partner with
              </p>
              <p className="mt-2 leading-relaxed">
                Early-stage founders, growth teams, and ambitious professionals
                ready to unlock leverage with AI.
              </p>
            </div>
          </aside>
        </header>

        <section id="services" className="mt-28 space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Services
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Integrated solutions shaped by AI intelligence
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-300">
              We design modular engagements that blend strategic insight,
              automation, and rapid experimentation—delivering tangible growth
              without the overhead of a large agency.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.services.map((service) => (
              <article
                key={service.name}
                className="group flex flex-col gap-5 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-slate-900/70"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-200">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="inline-flex items-start gap-3 rounded-2xl bg-slate-800/60 px-4 py-3 transition-all duration-300 group-hover:bg-slate-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="mt-28 grid gap-12 rounded-[32px] border border-slate-800/70 bg-slate-900/40 p-10 shadow-2xl shadow-black/30 sm:p-12"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <div>
              <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {content.approach.title}
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-300">
              From first discovery session through continuous optimization, we
              operate as an embedded team, keeping you close to every insight
              and iteration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.approach.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/50"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mt-28 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Proof
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Partners who scale with us
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-300">
              Momentum built alongside founders and operators across APAC and
              beyond.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="glass-panel flex flex-col gap-4 rounded-3xl p-8 text-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40"
              >
                <p className="text-lg leading-relaxed text-slate-200">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-4 text-sm text-slate-400">
                  <p className="font-semibold text-slate-100">
                    {testimonial.name}
                  </p>
                  <p>{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mt-28 grid gap-10 rounded-[32px] border border-slate-800/80 bg-slate-900/40 p-10 sm:p-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-4">
            <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Answers for fast-moving teams
            </h2>
            <p className="text-base text-slate-300">
              If you have a unique question, reach out—we respond within one
              business day.
            </p>
          </div>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-800/60 bg-slate-950/60 px-6 py-5 transition-all duration-300 hover:border-cyan-300/40 open:bg-slate-900/70"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white marker:hidden">
                  {faq.question}
                  <ArrowRight className="h-5 w-5 flex-none transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="mt-28 grid gap-10 rounded-[32px] border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 via-slate-900/60 to-indigo-500/10 p-10 shadow-2xl shadow-cyan-500/20 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-5">
            <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-900">
              Let’s build together
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="text-base text-slate-100/90">
              {content.cta.description}
            </p>
            <Link
              href={content.cta.button.href}
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-base font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white"
            >
              {content.cta.button.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="rounded-3xl border border-white/20 bg-slate-950/60 p-6 text-sm text-slate-200">
            <p className="text-base font-semibold uppercase tracking-[0.3em] text-slate-300">
              What’s next
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                Share your goals and assets; we audit opportunities and surface
                quick wins.
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                Co-design a roadmap aligned to your KPIs with automation baked
                in from day one.
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                Launch, measure, and optimize with transparent reporting every
                week.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="mt-28 rounded-[32px] border border-slate-800/70 bg-slate-900/40 p-10 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <p className="section-heading inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Let’s align on outcomes
              </h2>
              <p className="max-w-lg text-base text-slate-300">
                Based in Colombo with a global network of specialists. We work
                async-first, adapting to your time zone and tool stack.
              </p>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {content.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-300" />
                  <a
                    href={`tel:${content.contact.phone}`}
                    className="transition-colors hover:text-white"
                  >
                    {content.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span>{content.contact.location}</span>
                </div>
              </div>
            </div>
            <form className="glass-panel grid gap-5 rounded-3xl p-8 text-sm text-slate-200 shadow-2xl shadow-black/40">
              <p className="text-base font-semibold text-white">
                Share your next milestone
              </p>
              <div className="grid gap-3">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Project Snapshot
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you’re building and the outcomes you’re chasing."
                  className="rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300"
                />
              </div>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-[2px] hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Send details
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-slate-400">
                Prefer a direct chat? Drop us an email and we’ll align on a time
                that fits.
              </p>
            </form>
          </div>
        </section>
      </div>
      <footer className="border-t border-slate-800/50 bg-slate-950/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} S10 Digital Solutions. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="transition-colors hover:text-slate-200"
            >
              Services
            </Link>
            <Link
              href="#approach"
              className="transition-colors hover:text-slate-200"
            >
              Approach
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors hover:text-slate-200"
            >
              Proof
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-slate-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
