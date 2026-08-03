import { CodeCopyButton } from '@/components/driveandfight/code-copy-button';
import { FaqSection } from '@/components/driveandfight/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  activeCodes,
  codeStatusSummary,
  expiredCodes,
} from '@/data/driveandfight/codes';
import { getRouteLabel } from '@/data/driveandfight/route-labels';
import {
  officialExperienceSource,
  officialGameFacts,
} from '@/data/driveandfight/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowRight,
  CircleAlert,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Drive and Fight Codes (July 2026) - 7500LIKE',
    description:
      'Copy the current official Drive and Fight code 7500LIKE, follow the live redeem flow, and check the next 15,000-like code milestone.',
    locale,
    pathname: '/codes',
  });
}

const faq = [
  {
    question: 'What is the active Drive and Fight code?',
    answer:
      '25KLIKES is published in the current official Roblox experience description checked on August 3, 2026.',
  },
  {
    question: 'What reward does 25KLIKES give?',
    answer:
      'The official description does not name the reward. Use the current in-game success popup and inventory change as the final check.',
  },
  {
    question: 'When is the next Drive and Fight code?',
    answer:
      'The official description promises another code at 50,000 likes but does not publish the future string.',
  },
  {
    question: 'Why is a Drive and Fight code not working?',
    answer:
      'Confirm Place ID 97960402739248 and creator 646 Studios, paste the exact code without spaces, and retry in a fresh server. It may also have expired after an update.',
  },
];

export default function CodesPage() {
  const pageUrl = `${officialGameFacts.canonicalUrl}/codes`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Drive and Fight Codes',
        description:
          'Current official Drive and Fight code, milestone status, redeem checks, and safe verification steps.',
        datePublished: '2026-07-29',
        dateModified: '2026-08-03',
        mainEntityOfPage: pageUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
          url: officialGameFacts.canonicalUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="space-y-7 py-5 text-stone-100">
      <JsonLd data={jsonLd} />
      <header className="rounded-2xl border border-[#E8C36A]/30 bg-[radial-gradient(circle_at_top_right,rgba(232,195,106,.2),transparent_45%),#141816] p-6 md:p-8">
        <Badge className="bg-[#E8C36A] text-[#17100A]">
          Checked August 3, 2026
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Drive and Fight Codes
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
          {codeStatusSummary.message} The exact reward stays tied to the live
          success popup because the official description does not name it.
        </p>
      </header>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F3A23A]">
              Official active list
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Current codes to redeem
            </h2>
          </div>
          <Badge variant="outline" className="border-white/10 text-stone-400">
            {activeCodes.length} active · {expiredCodes.length} expired
          </Badge>
        </div>
        <div className="mt-4 grid gap-3">
          {activeCodes.map((item) => (
            <article
              key={item.code}
              className="min-w-0 rounded-xl border border-[#F3A23A]/30 bg-[#141816] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="break-all text-3xl font-black text-[#FFD08A]">
                      {item.code}
                    </code>
                    <Badge className="bg-[#F3A23A] text-[#17100A]">
                      Official active
                    </Badge>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-300">
                    {item.reward}
                  </p>
                </div>
                <CodeCopyButton code={item.code} />
              </div>
              <p className="mt-4 border-white/8 border-t pt-4 text-xs leading-5 text-stone-500">
                {item.notes}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#F3A23A]/25 bg-[#F3A23A]/5 p-6">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 size-6 shrink-0 text-[#F3A23A]" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#FFD08A]">
              Source boundary
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Published by the current Roblox experience
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              The code appears in the description for Place{' '}
              {officialGameFacts.placeId}, published by{' '}
              {officialGameFacts.creatorName}. Similar driving games and generic
              code videos are not used for this list.
            </p>
            <a
              href={officialExperienceSource.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FFD08A] hover:text-white"
            >
              Check the official description <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#141816] p-6">
        <h2 className="text-2xl font-black">How to redeem safely</h2>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-stone-300">
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">1. Open the current game.</strong>{' '}
            Confirm Place ID {officialGameFacts.placeId} and creator{' '}
            {officialGameFacts.creatorName}.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">2. Use the live code input.</strong>{' '}
            Find the current code control in the game interface. Menu placement
            can change during Beta.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">3. Paste the code exactly.</strong>{' '}
            Keep the capitalization and numbers; remove leading or trailing
            spaces.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">4. Trust the live result.</strong>{' '}
            The success message and inventory change are the final reward check.
          </li>
        </ol>
      </section>

      <section className="rounded-xl border border-[#E8C36A]/30 bg-[#E8C36A]/7 p-6">
        <div className="flex items-start gap-4">
          <CircleAlert className="mt-1 size-6 shrink-0 text-[#E8C36A]" />
          <div>
            <h2 className="text-2xl font-black">Next code at 50,000 likes</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              The official description promises a new code at{' '}
              {codeStatusSummary.nextMilestone}. No future code string is
              published yet. Do not guess it or import a milestone code from a
              different Roblox game.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={faq} />

      <section className="rounded-xl border border-white/10 bg-[#141816] p-5">
        <h2 className="text-xl font-black">Next steps</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            '/guides/beginner-guide',
            '/official-links',
            '/guides/first-1000-meters',
            '/updates',
          ].map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal break-words rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-stone-300 hover:border-[#F3A23A]/40 hover:text-[#FFD08A]"
            >
              <span className="min-w-0">{getRouteLabel(route)}</span>
              <ArrowRight className="size-4 shrink-0" />
            </LocaleLink>
          ))}
        </div>
      </section>
    </div>
  );
}
