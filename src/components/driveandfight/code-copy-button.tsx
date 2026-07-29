'use client';

import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      size="sm"
      className="bg-[#FFC55F] font-bold text-[#171006] hover:bg-[#FFD98B]"
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}
