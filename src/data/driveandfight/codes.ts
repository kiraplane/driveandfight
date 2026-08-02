import { officialExperienceSource } from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [
  {
    code: '25KLIKES',
    reward:
      'The official description does not name the reward. Use the live success popup as the final reward check.',
    status: 'active',
    lastChecked: '2026-08-01',
    sources: [officialExperienceSource],
    notes:
      'Published directly in the current Roblox experience description. Copy the capitalization and numbers exactly.',
  },
];

export const expiredCodes: GameCode[] = [
  {
    code: '7500LIKE',
    reward:
      'The official description did not name the reward while this code was listed.',
    status: 'expired',
    lastChecked: '2026-08-01',
    sources: [officialExperienceSource],
    notes:
      'Removed from the official Roblox description when 25KLIKES replaced it. Keep it in history rather than presenting it as active.',
  },
];

export const codeStatusSummary = {
  checkedAt: '2026-08-01',
  activeCount: activeCodes.length,
  expiredCount: expiredCodes.length,
  nextMilestone: '35,000 likes',
  message:
    '25KLIKES is published in the current official Roblox description. Another code is promised at 35,000 likes, but no unreleased string is listed.',
};
