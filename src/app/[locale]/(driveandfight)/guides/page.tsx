import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { guides } from '@/data/driveandfight/guides';
import { officialGameFacts } from '@/data/driveandfight/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Drive and Fight Guides - Truck, Loot, Co-op & Wins',
    description:
      'Drive and Fight guides for the first run, 1,000 meters, truck supplies, inventory, co-op roles, and a 15,000-meter win plan.',
    locale,
    pathname: '/guides',
  });
}

export default function GuidesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Drive and Fight Roblox Guides',
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
    })),
  };

  return (
    <div className="space-y-8 py-5 text-slate-100">
      <JsonLd data={itemList} />
      <header className="rounded-2xl border border-[#B9402A]/25 bg-[radial-gradient(circle_at_top_right,rgba(185,64,42,.24),transparent_45%),#141816] p-6 md:p-8">
        <Badge className="bg-[#F3A23A] text-[#17100A]">
          {guides.length} original player routes
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Drive and Fight Guides
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Keep the truck moving, build a repeatable first kilometer, organize
          supplies, assign co-op roles, and protect a full completion route.
          Each guide separates official milestones from volatile Beta details.
        </p>
      </header>

      <section aria-labelledby="guide-library-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F3A23A]">
              Choose the current problem
            </p>
            <h2 id="guide-library-heading" className="mt-2 text-2xl font-black">
              Browse all guides
            </h2>
          </div>
          <span className="text-sm text-slate-400">
            Original decisions, not transcript summaries
          </span>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <LocaleLink
              href={`/guides/${guide.slug}`}
              key={guide.slug}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141816] transition hover:-translate-y-0.5 hover:border-[#F3A23A]/40"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141816]/95 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-3">
                  <Badge className="border border-[#F3A23A]/25 bg-[#17100A]/90 text-[#FFD08A] backdrop-blur">
                    {guide.category}
                  </Badge>
                  {guide.video ? (
                    <Badge className="border border-[#E8C36A]/25 bg-[#2A2015]/90 text-[#F0D994] backdrop-blur">
                      <PlayCircle className="mr-1 size-3.5" />
                      Video cross-check
                    </Badge>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-white/10 text-slate-400"
                  >
                    {guide.difficulty}
                  </Badge>
                  <ArrowRight className="size-4 text-[#F3A23A] transition group-hover:translate-x-1" />
                </div>
                <h3 className="mt-3 break-words text-lg font-black text-white group-hover:text-[#FFE0A8]">
                  {guide.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                  {guide.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-3">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#E59B83]">
                      #{tag.replaceAll(' ', '')}
                    </span>
                  ))}
                </div>
              </div>
            </LocaleLink>
          ))}
        </div>
      </section>
    </div>
  );
}
