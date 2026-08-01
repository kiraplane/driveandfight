import { officialExperienceSource } from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [
  {
    code: '7500LIKE',
    reward:
      'The official description does not name the reward. Use the live success popup as the final reward check.',
    status: 'active',
    lastChecked: '2026-07-31',
    sources: [officialExperienceSource],
    notes:
      'Published directly in the current Roblox experience description. Copy the capitalization and numbers exactly.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeStatusSummary = {
  checkedAt: '2026-07-31',
  activeCount: activeCodes.length,
  expiredCount: expiredCodes.length,
  nextMilestone: '15,000 likes',
  message:
    '7500LIKE is published in the current official Roblox description. Another code is promised at 15,000 likes, but no unreleased string is listed.',
};
