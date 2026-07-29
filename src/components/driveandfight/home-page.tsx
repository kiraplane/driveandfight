import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes, codeStatusSummary } from '@/data/driveandfight/codes';
import { guides } from '@/data/driveandfight/guides';
import { getRouteLabel } from '@/data/driveandfight/route-labels';
import {
  checkedAt,
  officialGameFacts,
  videos,
} from '@/data/driveandfight/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  CircleDollarSign,
  ExternalLink,
  Fuel,
  Gauge,
  PackageOpen,
  Plane,
  Shield,
  Trophy,
  Truck,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { FaqSection } from './faq-section';
import {
  DriveAndFightMobileMenu,
  DriveAndFightRouteSidebar,
} from './wiki-navigation';

const quickLinks = [
  { label: 'Codes', href: '/codes', icon: CircleDollarSign },
  { label: 'Beginner', href: '/guides/beginner-guide', icon: BookOpen },
  { label: 'Truck', href: '/truck-upgrades', icon: Truck },
  { label: 'Air Drops', href: '/air-drops', icon: Plane },
];

const systemLinks = [
  {
    label: 'Truck Upgrades',
    href: '/truck-upgrades',
    summary:
      'Spend against the failure ending the current run: movement, damage, or storage.',
    icon: Truck,
  },
  {
    label: 'Trailers & Mobile Base',
    href: '/trailers',
    summary:
      'Organize fuel, healing, ammunition, and flexible loot for a faster departure.',
    icon: PackageOpen,
  },
  {
    label: 'Weapons & Armor',
    href: '/weapons-and-armor',
    summary:
      'Compare reliability, matching ammunition, survival value, and the next fight.',
    icon: Shield,
  },
  {
    label: 'Skills & XP',
    href: '/skills',
    summary:
      'Build around the job you perform and re-test the exact wall after an unlock.',
    icon: Zap,
  },
  {
    label: 'Air Drops',
    href: '/air-drops',
    summary:
      'Enter the current event with open storage, a defended truck, and a leave rule.',
    icon: Plane,
  },
  {
    label: 'How to Win',
    href: '/guides/how-to-win',
    summary:
      'Use the official 1k, 5k, and 15k milestones to structure a completion run.',
    icon: Trophy,
  },
];

const faq = [
  {
    question: 'What is drive and fight on Roblox?',
    answer:
      'drive and fight is a Beta apocalypse road-survival experience by 646 Studios. Players keep a truck moving, scavenge weapons, armor, fuel, and supplies, attach trailers, learn skills, and travel with up to three other players.',
  },
  {
    question: 'What is the correct Drive and Fight game?',
    answer:
      'Use Place ID 97960402739248 and creator 646 Studios. Roblox maps it to Universe ID 7961333063.',
  },
  {
    question: 'What is the current Drive and Fight code?',
    answer:
      '7500LIKE is published in the current official Roblox description. Another code is promised at 15,000 likes, but the unreleased string is not listed.',
  },
  {
    question: 'What should a new player do first?',
    answer:
      'Make the truck movable, keep fuel and healing available, carry ammunition that matches the equipped weapon, and use 1,000 meters as the first repeatable benchmark.',
  },
  {
    question: 'Can you play Drive and Fight with friends?',
    answer:
      'Yes. The official description says you can travel with up to three other players, for a party of four.',
  },
];

export function DriveAndFightHomePage() {
  const currentCode = activeCodes[0];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        description:
          'Drive and Fight Wiki for current codes, truck upgrades, trailers, loot, skills, air drops, and safer Roblox apocalypse runs.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        logo: `${officialGameFacts.canonicalUrl}${officialGameFacts.iconImage}`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        url: officialGameFacts.robloxUrl,
        gamePlatform: 'Roblox',
        genre: officialGameFacts.genre,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
          url: officialGameFacts.creatorGroupUrl,
        },
      },
      {
        '@type': 'VideoObject',
        name: videos.currentGameplay.title,
        description:
          'Current Drive and Fight Roblox gameplay used as a first-run cross-check.',
        thumbnailUrl: videos.currentGameplay.thumbnailUrl,
        uploadDate: videos.currentGameplay.publishedAt,
        embedUrl: `https://www.youtube.com/embed/${videos.currentGameplay.id}`,
        contentUrl: videos.currentGameplay.url,
      },
    ],
  };

  return (
    <div className="overflow-x-hidden bg-[#0B0D0C] text-stone-100">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-white/10 border-b">
        <Image
          src={officialGameFacts.heroImage}
          alt="Official Drive and Fight truck artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,12,.99)_0%,rgba(11,13,12,.90)_51%,rgba(11,13,12,.48)_100%),linear-gradient(0deg,#0B0D0C_0%,transparent_66%)]" />
        <Container className="relative grid min-h-[430px] items-center gap-8 px-4 py-9 lg:grid-cols-[1.02fr_.98fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#F3A23A] text-[#17100A]">
                Roblox truck survival
              </Badge>
              <Badge className="border border-[#E8C36A]/35 bg-[#E8C36A]/10 text-[#F0D994]">
                Beta snapshot · checked {checkedAt}
              </Badge>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[.96] tracking-tight sm:text-6xl lg:text-7xl">
              Drive and Fight <span className="text-[#F3A23A]">Wiki</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              Current codes and decision-first guides for truck upgrades,
              trailers, loot, skills, Air Drops, and the route to your first
              complete run.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#F3A23A] font-bold text-[#17100A] hover:bg-[#FFC36B]"
              >
                <a
                  href={officialGameFacts.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play current game <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#B9402A]/65 bg-black/50 text-white hover:bg-[#B9402A]/20"
              >
                <LocaleLink href="/guides/beginner-guide">
                  Start the route <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
            </div>
            <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <LocaleLink
                  key={href}
                  href={href}
                  className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm font-semibold text-stone-200 backdrop-blur hover:border-[#F3A23A]/50 hover:text-[#FFD08A]"
                >
                  <Icon className="size-4 shrink-0 text-[#F3A23A]" />
                  {label}
                </LocaleLink>
              ))}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#B9402A]/45 bg-black shadow-[0_0_80px_rgba(185,64,42,.24)]">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${videos.currentGameplay.id}?rel=0`}
              title="Current Drive and Fight Roblox gameplay"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <DriveAndFightMobileMenu currentPath="/" />
        <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
          <main className="min-w-0 space-y-10">
            <section>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F3A23A]">
                    Start the run
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-white">
                    Verify the fast-changing facts first
                  </h2>
                </div>
                <LocaleLink
                  href="/updates"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD08A] hover:text-white"
                >
                  Beta status <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <LocaleLink
                  href="/codes"
                  className="rounded-xl border border-[#E8C36A]/25 bg-[#E8C36A]/7 p-5 hover:border-[#E8C36A]/55"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F0D994]">
                    Current code
                  </p>
                  <p className="mt-2 font-mono text-2xl font-black text-white">
                    {currentCode.code}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    Official description; exact reward stays tied to the live
                    popup.
                  </p>
                </LocaleLink>
                <LocaleLink
                  href="/official-links"
                  className="rounded-xl border border-[#F3A23A]/25 bg-[#F3A23A]/6 p-5 hover:border-[#F3A23A]/55"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFD08A]">
                    Current identity
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">
                    Place {officialGameFacts.placeId}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    Published by 646 Studios; use this Place for every current
                    fact.
                  </p>
                </LocaleLink>
                <LocaleLink
                  href="/guides/first-1000-meters"
                  className="rounded-xl border border-[#B9402A]/30 bg-[#B9402A]/8 p-5 hover:border-[#B9402A]/65"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E59B83]">
                    First benchmark
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">
                    1,000 meters
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    The first official distance badge and a repeatable route
                    test.
                  </p>
                </LocaleLink>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F3A23A]">
                    Route systems
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Keep the truck moving
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD08A] hover:text-white"
                >
                  All guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {systemLinks.map(({ label, href, summary, icon: Icon }) => (
                  <LocaleLink
                    key={href}
                    href={href}
                    className="group flex min-w-0 gap-4 rounded-xl border border-white/10 bg-[#141816] p-5 transition hover:-translate-y-0.5 hover:border-[#B9402A]/55"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#B9402A]/15 text-[#E59B83]">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <strong className="flex items-center gap-2 text-lg text-white group-hover:text-[#FFD08A]">
                        {label}
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </strong>
                      <span className="mt-2 block text-sm leading-6 text-stone-400">
                        {summary}
                      </span>
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#E8C36A]">
                    Player routes
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Solve the current problem
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-white/10 text-stone-400"
                >
                  {guides.length} original guides
                </Badge>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {guides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-[#141816] hover:border-[#F3A23A]/45"
                  >
                    <div className="relative aspect-[16/7]">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} guide cover`}
                        fill
                        sizes="(min-width: 768px) 420px, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141816] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <Badge className="bg-[#B9402A]/25 text-[#EFA48D]">
                          {guide.category}
                        </Badge>
                        <ArrowRight className="size-4 text-[#F3A23A] transition group-hover:translate-x-1" />
                      </div>
                      <h3 className="mt-3 text-lg font-black text-white group-hover:text-[#FFD08A]">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-stone-400">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-[#E8C36A]/25 bg-[#E8C36A]/7 p-6">
              <div className="flex items-start gap-4">
                <Gauge className="mt-1 size-6 shrink-0 text-[#E8C36A]" />
                <div>
                  <h2 className="text-2xl font-black">
                    Build around official milestones
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    Roblox confirms single-run badges at 1,000, 5,000, and
                    15,000 meters, plus a first-win badge. Use them as route
                    phases while the live objective supplies the current Beta
                    details.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <LocaleLink
                      href="/guides/first-1000-meters"
                      className="rounded-lg border border-[#E8C36A]/30 px-3 py-2 text-sm font-bold text-[#F0D994] hover:bg-[#E8C36A]/10"
                    >
                      First 1,000 meters
                    </LocaleLink>
                    <LocaleLink
                      href="/guides/how-to-win"
                      className="rounded-lg border border-[#E8C36A]/30 px-3 py-2 text-sm font-bold text-[#F0D994] hover:bg-[#E8C36A]/10"
                    >
                      15,000-meter plan
                    </LocaleLink>
                  </div>
                </div>
              </div>
            </section>

            <FaqSection items={faq} />

            <section className="rounded-xl border border-white/10 bg-[#141816] p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-black">
                  Explore every current route
                </h2>
                <Users className="size-5 text-[#F3A23A]" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  '/codes',
                  '/guides',
                  '/truck-upgrades',
                  '/trailers',
                  '/weapons-and-armor',
                  '/skills',
                  '/air-drops',
                  '/updates',
                  '/official-links',
                  '/guides/first-1000-meters',
                  '/guides/how-to-win',
                  '/guides/multiplayer-guide',
                  '/guides/controls-and-inventory',
                  '/guides/fuel-and-supply-checklist',
                ].map((route) => (
                  <LocaleLink
                    key={route}
                    href={route}
                    className="h-auto min-w-0 whitespace-normal break-words rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-stone-300 hover:border-[#F3A23A]/45 hover:text-[#FFD08A]"
                  >
                    {getRouteLabel(route)}
                  </LocaleLink>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-stone-500">
                {codeStatusSummary.message}
              </p>
            </section>
          </main>
          <DriveAndFightRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
