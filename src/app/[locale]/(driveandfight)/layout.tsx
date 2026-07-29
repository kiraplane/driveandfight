import { DriveAndFightPageShell } from '@/components/driveandfight/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function DriveAndFightLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0D0C]">
      <Navbar scroll={true} />
      <main className="flex-1">
        <DriveAndFightPageShell>{children}</DriveAndFightPageShell>
      </main>
      <Footer />
    </div>
  );
}
