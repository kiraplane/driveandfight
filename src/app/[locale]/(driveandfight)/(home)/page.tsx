import { DriveAndFightHomePage } from '@/components/driveandfight/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Drive and Fight Wiki - Codes, Truck Upgrades & Guides',
    description:
      'Drive and Fight Wiki for current codes, truck upgrades, trailers, loot, skills, air drops, and a safer first Roblox apocalypse run.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <DriveAndFightHomePage />;
}
