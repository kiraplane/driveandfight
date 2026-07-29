import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Drive and Fight Wiki',
    description:
      'Independence, trademark, accuracy and external-link disclaimer for Drive and Fight Wiki.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#0B0D0C] py-12 text-stone-100">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-stone-300">
          Drive and Fight Wiki is an independent information site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Roblox, 646
          Studios, or the Drive and Fight development team.
        </p>
        <p className="leading-8 text-stone-300">
          Roblox, Drive and Fight, game artwork, and related marks belong to
          their respective owners. Official media is used for identification and
          guide context.
        </p>
        <p className="leading-8 text-stone-300">
          Codes, rewards, truck upgrades, items, skills, events, balance, and
          availability can change without notice. Check the live game and
          official channels before spending currency or Robux.
        </p>
        <p className="leading-8 text-stone-300">
          External Roblox, YouTube, and publisher links are provided for
          reference. We do not control their availability, content, or privacy
          practices.
        </p>
      </Container>
    </div>
  );
}
