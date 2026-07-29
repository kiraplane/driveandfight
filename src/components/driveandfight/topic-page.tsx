import { Badge } from '@/components/ui/badge';
import { getRouteLabel } from '@/data/driveandfight/route-labels';
import { officialGameFacts } from '@/data/driveandfight/sources';
import type { TopicPage as TopicPageData } from '@/data/driveandfight/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '../seo/json-ld';
import { FaqSection } from './faq-section';

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: topic.title,
    numberOfItems: topic.relatedRoutes.length,
    itemListElement: topic.relatedRoutes.map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: getRouteLabel(route),
      url: `${officialGameFacts.canonicalUrl}${route}`,
    })),
  };

  return (
    <div className="space-y-7 py-5 text-slate-100">
      <JsonLd data={itemList} />
      <header className="rounded-2xl border border-[#B9402A]/25 bg-[radial-gradient(circle_at_top_right,rgba(185,64,42,.24),transparent_44%),#141816] p-6 md:p-8">
        <Badge className="bg-[#F3A23A] text-[#17100A]">{topic.eyebrow}</Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">{topic.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {topic.summary}
        </p>
      </header>
      {topic.sections.map((section) => (
        <section
          key={section.heading}
          className="rounded-xl border border-white/10 bg-[#141816] p-6"
        >
          <h2 className="text-2xl font-black text-white">{section.heading}</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-lg border border-white/8 bg-black/15 px-3 py-2"
                >
                  • {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          {section.links ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {section.links.map((link) =>
                link.href.startsWith('http') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F3A23A] hover:text-[#FFE0A8]"
                  >
                    {link.label}
                    <ArrowRight className="size-4" />
                  </a>
                ) : (
                  <LocaleLink
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F3A23A] hover:text-[#FFE0A8]"
                  >
                    {link.label}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                )
              )}
            </div>
          ) : null}
        </section>
      ))}
      <FaqSection items={topic.faq} />
      <section className="rounded-xl border border-white/10 bg-[#141816] p-5">
        <h2 className="text-xl font-black">Related pages</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {topic.relatedRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="h-auto min-w-0 whitespace-normal break-words rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-slate-300 hover:border-[#F3A23A]/40 hover:text-[#FFE0A8]"
            >
              {getRouteLabel(route)}
            </LocaleLink>
          ))}
        </div>
      </section>
    </div>
  );
}
