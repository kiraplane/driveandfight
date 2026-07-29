import { TopicPage } from '@/components/driveandfight/topic-page';
import { getTopic } from '@/data/driveandfight/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const topic = getTopic('skills');
  return constructMetadata({
    title: topic.title,
    description: topic.description,
    locale,
    pathname: topic.route,
  });
}

export default function SkillsPage() {
  return <TopicPage topic={getTopic('skills')} />;
}
