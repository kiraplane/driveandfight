import type { DataSource, VideoSource } from './types';

export const checkedAt = '2026-08-03';

export const officialGameFacts = {
  name: 'drive and fight',
  siteName: 'Drive and Fight Wiki',
  canonicalUrl: 'https://www.driveandfight.wiki',
  robloxUrl: 'https://www.roblox.com/games/97960402739248/drive-and-fight',
  creatorName: '646 Studios',
  creatorGroupId: '3239513',
  creatorGroupUrl: 'https://www.roblox.com/communities/3239513/646-Studios',
  placeId: '97960402739248',
  universeId: '7961333063',
  genre: 'Adventure / Exploration / Survival',
  status: 'Beta',
  currentTitle: '🚚 drive and fight [🌸 NEW BIOME]',
  officialWebsite: null,
  verifiedDiscordUrl: null,
  verifiedTrelloUrl: null,
  iconImage: '/driveandfight/icon.png',
  heroImage: '/driveandfight/media/experience.png',
  ogImage: '/driveandfight/og-image.png',
} as const;

export const officialExperienceSource: DataSource = {
  type: 'official',
  label: 'drive and fight on Roblox',
  url: officialGameFacts.robloxUrl,
  checkedAt,
  confidence: 'high',
  note: 'Primary source for the current title, creator, beta notice, game loop, party size, update focus, and description-published code.',
};

export const officialUniverseSource: DataSource = {
  type: 'official_api',
  label: 'Roblox Universe lookup',
  url: 'https://apis.roblox.com/universes/v1/places/97960402739248/universe',
  checkedAt,
  confidence: 'high',
  note: 'Maps the approved Place ID to Universe ID 7961333063.',
};

export const officialGameApiSource: DataSource = {
  type: 'official_api',
  label: 'Roblox game metadata API',
  url: 'https://games.roblox.com/v1/games?universeIds=7961333063',
  checkedAt,
  confidence: 'high',
  note: 'Confirms current title, root Place, Group creator, beta description, party promise, and Adventure / Exploration genre.',
};

export const officialBadgesSource: DataSource = {
  type: 'official_api',
  label: 'Roblox badges API',
  url: 'https://badges.roblox.com/v1/universes/7961333063/badges?limit=100&sortOrder=Asc',
  checkedAt,
  confidence: 'high',
  note: 'Confirms the 1,000 m, 5,000 m, 15,000 m, first-win, welcome, and early-player milestone names.',
};

export const officialGamePassSource: DataSource = {
  type: 'official_api',
  label: 'Roblox Game Pass API',
  url: 'https://apis.roblox.com/game-passes/v1/universes/7961333063/game-passes?passView=Full&pageSize=100',
  checkedAt,
  confidence: 'high',
  note: 'Confirms current optional passes for pockets, speed, starting cash, XP, and health. Prices remain volatile.',
};

export const officialMediaSource: DataSource = {
  type: 'official_api',
  label: 'Roblox experience media',
  url: 'https://games.roblox.com/v2/games/7961333063/media',
  checkedAt,
  confidence: 'high',
  note: 'Source for the local game icon and five experience media images.',
};

export const videos: Record<string, VideoSource> = {
  currentGameplay: {
    id: 'dUDgAsFEpow',
    title: 'I BARELY Survived Roblox DRIVE AND FIGHT...',
    channel: 'bwoo',
    url: 'https://www.youtube.com/watch?v=dUDgAsFEpow',
    thumbnailUrl: 'https://i.ytimg.com/vi/dUDgAsFEpow/hqdefault.jpg',
    publishedAt: '2026-07-29',
    viewCountLabel: '734 views when checked',
    checkedAt,
  },
  coopGameplay: {
    id: 'qKV9hcg0j7E',
    title: 'Playing Drive and fight with my subscriber!',
    channel: 'Mr.CicaBamboni',
    url: 'https://www.youtube.com/watch?v=qKV9hcg0j7E',
    thumbnailUrl: 'https://i.ytimg.com/vi/qKV9hcg0j7E/hqdefault.jpg',
    publishedAt: '2026-07-27',
    viewCountLabel: '807 views when checked',
    checkedAt,
  },
};

export const gameplayVideoSource: DataSource = {
  type: 'youtube',
  label: videos.currentGameplay.title,
  url: videos.currentGameplay.url,
  checkedAt,
  confidence: 'medium',
  note: 'Current exact-Place gameplay used to cross-check run flow, loot interaction, truck storage, objectives, and combat presentation.',
};

export const coopVideoSource: DataSource = {
  type: 'youtube',
  label: videos.coopGameplay.title,
  url: videos.coopGameplay.url,
  checkedAt,
  confidence: 'medium',
  note: 'Current exact-game co-op video used only for party workflow and role-planning context.',
};

export const sources = [
  officialExperienceSource,
  officialUniverseSource,
  officialGameApiSource,
  officialBadgesSource,
  officialGamePassSource,
  officialMediaSource,
  gameplayVideoSource,
  coopVideoSource,
];
