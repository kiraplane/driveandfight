import { officialGameFacts } from './sources';
import type { TopicPage } from './types';

export const topics: Record<string, TopicPage> = {
  'truck-upgrades': {
    route: '/truck-upgrades',
    label: 'Truck Upgrades',
    eyebrow: 'Keep the run moving',
    title: 'Drive and Fight Truck Upgrades Guide',
    description:
      'Prioritize Drive and Fight truck upgrades by mobility, survival, storage, and the failure that actually ends your current Roblox run.',
    summary:
      'Upgrade the truck to remove the next run-ending weakness. Reliable movement and survivability usually create more progress than a flashy purchase that does not solve fuel, damage, or storage pressure.',
    sections: [
      {
        heading: 'Name the failure before buying an upgrade',
        paragraphs: [
          'The truck is transport, cover, storage, and the center of the mobile base. That makes every upgrade look valuable, but the right purchase depends on why the previous run stopped. A truck that runs out of fuel needs a different answer from one that becomes impossible to defend.',
          'Write down the first repeatable failure: stalled movement, incoming damage, not enough safe storage, or a fight that takes too long. Spend against that problem and keep a reserve for fuel, ammunition, and healing. A purchase is successful when the next run gets past the same wall with less risk.',
        ],
      },
      {
        heading: 'Use a durable priority order',
        paragraphs: [
          'Start with the upgrade that protects movement. A mobile truck lets the party disengage, reach the next supply stop, and avoid wasting a stocked run. After movement is stable, improve the part of the truck that absorbs the most punishment or protects the supplies needed to continue.',
          'Capacity becomes more valuable after the team can reliably fill it. Buying space before you can protect or fuel the truck simply creates a larger pile to lose. Damage-oriented improvements should come after the route is stable enough to reach the encounters where that damage matters.',
        ],
        bullets: [
          'Movement first when the truck repeatedly stalls or cannot escape pressure.',
          'Durability next when damage ends stocked runs before supplies run out.',
          'Storage next when useful items are being abandoned for lack of safe slots.',
          'Combat improvements after the truck can consistently reach later encounters.',
        ],
      },
      {
        heading: 'Test one change across one repeated route',
        paragraphs: [
          'Do not change the truck, weapons, party roles, and route at the same time. Repeat a familiar early segment after one meaningful upgrade and compare fuel left, damage taken, stop time, and inventory pressure. A controlled test shows whether the upgrade solved the intended problem.',
          'If the same failure returns at nearly the same point, stop investing in that branch and audit the real cause. Poor supply discipline, an overloaded trailer, or every player leaving the truck during a stop can look like an upgrade problem when it is actually a route problem.',
        ],
        links: [
          { label: 'Plan trailer storage', href: '/trailers' },
          {
            label: 'Use the fuel and supply checklist',
            href: '/guides/fuel-and-supply-checklist',
          },
        ],
      },
      {
        heading: 'Keep beta values out of permanent plans',
        paragraphs: [
          'Drive and Fight is in Beta and the official description warns about frequent updates. Costs, upgrade names, and balance can change after a shutdown. Use the live upgrade screen for the current number and this guide for the decision order.',
          'Keep some cash and supplies uncommitted when an update is active. A flexible truck can respond to a changed route or event; a fully spent run has no room to recover from a new requirement.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I upgrade first in Drive and Fight?',
        answer:
          'Upgrade the part that caused the last run to fail. Movement and survival are usually safer early priorities than extra capacity or damage.',
      },
      {
        question: 'Should I buy more storage immediately?',
        answer:
          'Only when you can already reach enough loot to fill it and can protect the truck. Empty or unprotected capacity does not improve the run.',
      },
      {
        question: 'Are upgrade prices stable?',
        answer:
          'No price should be treated as permanent during Beta. Check the live menu before spending.',
      },
    ],
    relatedRoutes: [
      '/trailers',
      '/guides/fuel-and-supply-checklist',
      '/guides/first-1000-meters',
      '/weapons-and-armor',
    ],
  },
  trailers: {
    route: '/trailers',
    label: 'Trailers & Mobile Base',
    eyebrow: 'Build a usable base on wheels',
    title: 'Drive and Fight Trailers and Mobile Base Guide',
    description:
      'Use Drive and Fight trailers as organized mobile-base space for fuel, healing, ammunition, and run-critical loot without slowing every stop.',
    summary:
      'A trailer is useful when every player knows what belongs on it and can reload the truck quickly. Treat it as a shared system, not a dumping ground for every item found.',
    sections: [
      {
        heading: 'Give each trailer area one job',
        paragraphs: [
          'The official game description makes attachable trailers and a base on wheels part of the core loop. Organization is what turns that extra space into progress. Reserve predictable positions for fuel, healing, ammunition, and flexible loot so a player can find an emergency item without searching every slot.',
          'Keep the most important supply visible and reachable from the side the party normally uses. Decorative placement and perfect symmetry matter less than a fast response when the truck is damaged or a fight consumes more ammunition than expected.',
        ],
        bullets: [
          'Fuel: protected and easy to count before departure.',
          'Healing: reachable without unloading unrelated items.',
          'Ammunition: grouped by the weapons the party is actually carrying.',
          'Flexible slot: mission loot, event rewards, or a temporary replacement item.',
        ],
      },
      {
        heading: 'Load for the next segment, not the whole fantasy',
        paragraphs: [
          'More loot creates more sorting time and a larger loss if the run ends. Before leaving a stop, ask whether each item helps the next road segment, replaces a weaker item, or fills a known reserve target. If it does none of those, it should not delay departure.',
          'Avoid building a trailer that requires every object to stay perfect. Frequent combat, quick exits, and other players will disrupt the layout. Use broad categories that remain readable after the run becomes messy.',
        ],
      },
      {
        heading: 'Protect the attachment and the exit plan',
        paragraphs: [
          'A trailer only helps while the truck can keep moving. Watch the space needed to turn, reverse, and leave a crowded stop. Do not park so tightly around loot that the vehicle cannot exit when an encounter begins.',
          'Choose one player to make the departure call. The rest of the party can announce one missing critical supply, but the team should not remain exposed for a low-value item after the truck is ready. A good mobile base reduces stop time instead of extending it.',
        ],
        links: [
          {
            label: 'Assign co-op roles',
            href: '/guides/multiplayer-guide',
          },
          {
            label: 'Audit the truck upgrade order',
            href: '/truck-upgrades',
          },
        ],
      },
      {
        heading: 'Audit the trailer at every safe stop',
        paragraphs: [
          'Count fuel, healing, and the ammunition that matches equipped weapons. Remove duplicates that are consuming space without serving the plan. Replace used emergency supplies before chasing optional event loot.',
          'If the same category always runs out first, change the reserve target before buying more general space. The trailer should reveal the party’s bottleneck and make the next decision faster.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are trailers for in Drive and Fight?',
        answer:
          'They expand the truck into a mobile base and give the party organized space for fuel, healing, ammunition, and valuable loot.',
      },
      {
        question: 'What should go on the trailer first?',
        answer:
          'Prioritize the supplies that keep the run alive: fuel, healing, and ammunition for equipped weapons.',
      },
      {
        question: 'Should I keep every item?',
        answer:
          'No. Keep items that solve the next segment, replace a weaker option, or restore a planned reserve.',
      },
    ],
    relatedRoutes: [
      '/truck-upgrades',
      '/guides/fuel-and-supply-checklist',
      '/guides/multiplayer-guide',
      '/weapons-and-armor',
    ],
  },
  'weapons-and-armor': {
    route: '/weapons-and-armor',
    label: 'Weapons & Armor',
    eyebrow: 'Loot for a complete run',
    title: 'Drive and Fight Weapons, Armor, and Loot Guide',
    description:
      'Compare Drive and Fight weapons and armor by ammunition, range, reliability, survival value, and the next encounter instead of a fabricated tier list.',
    summary:
      'A usable weapon with matching ammunition and a survivable position is better than a rare item the party cannot support. Upgrade the complete loadout, not the color of one drop.',
    sections: [
      {
        heading: 'A weapon includes its ammunition plan',
        paragraphs: [
          'Current gameplay presents weapons, ammunition, healing, and other supplies as separate loot decisions. Picking up a stronger weapon without enough matching ammunition can weaken the run. Before swapping, count what the party can actually fire through the next encounter.',
          'Keep roles complementary in co-op. If every player consumes the same ammunition and fights from the same range, one shortage can disable the whole party. A mixed loadout makes more of the loot pool useful.',
        ],
      },
      {
        heading: 'Compare reliability before rarity',
        paragraphs: [
          'Use the value and rarity labels as discovery signals, not automatic commands. Test how easily the weapon lands shots, how exposed the user becomes while reloading, and whether it handles the enemies that are ending the run.',
          'A reliable common option can remain valuable while the party learns the route. Replace it when another weapon improves clear time or safety without creating a new ammunition problem. Keep the old weapon until the replacement has proved itself.',
        ],
      },
      {
        heading: 'Armor buys decision time',
        paragraphs: [
          'Armor is most valuable when it changes a lethal mistake into a recoverable one. If a player survives long enough to heal, return to the truck, or finish defending an objective, the armor has created a real advantage.',
          'Do not let extra protection justify unnecessary exposure. Fighting in the open, separating from the truck, or searching during an active event can consume any armor advantage. Use durability to improve consistency, not to ignore the route plan.',
        ],
        links: [
          {
            label: 'Plan event looting',
            href: '/air-drops',
          },
          {
            label: 'Set the full supply reserve',
            href: '/guides/fuel-and-supply-checklist',
          },
        ],
      },
      {
        heading: 'Sell or leave loot with a rule',
        paragraphs: [
          'Keep an item when it replaces a weaker equipped option, fills a planned reserve, or has a clear value purpose that does not crowd out survival supplies. Leave it when carrying it delays departure or forces the party to abandon fuel, healing, or usable ammunition.',
          'Beta balance changes quickly, so this launch page does not pretend to be a complete weapon database or tier list. Recheck the live item card and build a repeatable comparison before committing the run to one rare find.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best weapon in Drive and Fight?',
        answer:
          'There is not enough complete current data for a universal ranking. Prefer a reliable weapon with matching ammunition that solves the encounter blocking your run.',
      },
      {
        question: 'Should I always take the rarest loot?',
        answer:
          'No. Rarity does not replace ammunition, safe range, storage space, or the supplies needed to keep the truck moving.',
      },
      {
        question: 'When is armor worth prioritizing?',
        answer:
          'Prioritize armor when incoming damage repeatedly ends the run before you can heal, retreat, or complete an objective.',
      },
    ],
    relatedRoutes: [
      '/guides/fuel-and-supply-checklist',
      '/air-drops',
      '/skills',
      '/trailers',
    ],
  },
  skills: {
    route: '/skills',
    label: 'Skills & XP',
    eyebrow: 'Spend after a clear diagnosis',
    title: 'Drive and Fight Skills, XP, and Game Pass Guide',
    description:
      'Plan Drive and Fight skills and XP around combat, loot, survival, and the bottleneck ending your run; understand optional passes without pay-to-win claims.',
    summary:
      'Leveling creates choices, but a skill is valuable only when it improves the job you repeatedly perform. Build around the next failure and treat paid passes as optional convenience.',
    sections: [
      {
        heading: 'XP follows active survival play',
        paragraphs: [
          'The official 2x XP Game Pass description names killing enemies, finding loot, and surviving the wastelands as XP sources. That means progression rewards a complete run rather than one isolated activity. Moving safely, fighting when necessary, and bringing useful loot back into the route all matter.',
          'Do not turn every encounter into an XP farm if it consumes the supplies needed to finish. A longer stable run can create more opportunities than an early fight that leaves the truck without healing or ammunition.',
        ],
      },
      {
        heading: 'Choose a skill for the role you actually play',
        paragraphs: [
          'Name the repeated job before spending: driver, forward looter, defender, supply organizer, or flexible support. Select a benefit that makes that job safer or faster. Avoid spreading early points across unrelated ideas if none becomes strong enough to change the run.',
          'In solo play, flexible survival is more important because one player must move, loot, fight, and maintain supplies. In co-op, specialization becomes useful after the team has agreed who covers each job.',
        ],
      },
      {
        heading: 'Re-test after every meaningful unlock',
        paragraphs: [
          'Repeat the same early route and compare the moment that used to cause trouble. If the unlock reduces stop time, prevents a death, or preserves resources, it is working. If the failure is unchanged, the real bottleneck may be the truck, route, or inventory plan.',
          'Keep exact skill names and values tied to the live game. Drive and Fight is in Beta, so a numerical build copied from an older update can be less useful than a clear role-based test.',
        ],
        links: [
          {
            label: 'Choose party roles',
            href: '/guides/multiplayer-guide',
          },
          {
            label: 'Test the first kilometer',
            href: '/guides/first-1000-meters',
          },
        ],
      },
      {
        heading: 'Game Passes are optional convenience',
        paragraphs: [
          'Roblox currently lists optional passes for pockets, movement speed, starting cash, XP, and health. Their presence does not make them required for the guide route. Learn the normal inventory and survival loop before deciding whether convenience is worth Robux.',
          'Do not buy a pass to fix a problem caused by organization. Extra pockets do not help if the hotbar is full of low-value items, and extra health does not make an unsafe event approach reliable. Recheck the current Roblox purchase screen before any transaction because availability and price can change.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do you earn XP in Drive and Fight?',
        answer:
          'The official XP pass description names killing enemies, finding loot, and surviving the wastelands as XP sources.',
      },
      {
        question: 'What skill should I choose first?',
        answer:
          'Choose a skill that improves the role you repeatedly perform or removes the exact failure ending your current run.',
      },
      {
        question: 'Do I need a Game Pass?',
        answer:
          'No pass is required for this guide route. Treat current passes as optional convenience and verify every purchase on Roblox.',
      },
    ],
    relatedRoutes: [
      '/guides/first-1000-meters',
      '/guides/multiplayer-guide',
      '/truck-upgrades',
      '/weapons-and-armor',
    ],
  },
  'air-drops': {
    route: '/air-drops',
    label: 'Air Drops',
    eyebrow: 'Previous beta event route',
    title: 'Drive and Fight Air Drops Guide',
    description:
      'Prepare for Drive and Fight Air Drops with inventory space, ammunition, healing, a protected truck, and a clear leave condition.',
    summary:
      'Air Drops were previously promoted in the official title, but the live title no longer names an event. Use this preparation route only when the objective is visible in the current server.',
    sections: [
      {
        heading: 'Treat the title as event confirmation, not a loot table',
        paragraphs: [
          'Roblox previously promoted Air Drops in the experience title. The live title has since moved through Blossom to New Biome, so use this page for the durable Air Drop preparation loop rather than assuming every event value is still unchanged.',
          'Use the live objective and item cards for the current event details. This page focuses on the preparation decisions that remain useful if the exact reward pool changes after a Beta shutdown.',
        ],
      },
      {
        heading: 'Prepare before following the event',
        paragraphs: [
          'Create at least one open inventory or trailer slot before committing. Carry healing and usable ammunition, then confirm the truck has enough fuel to leave the event area and reach another safe stop. An event reward is not a win if the party becomes stranded immediately afterward.',
          'Approach with the truck positioned for departure rather than maximum closeness. Avoid blocking the turning path with loose loot or every player’s movement. One person should keep track of the vehicle while the rest clear and collect.',
        ],
        bullets: [
          'Open space for one genuinely useful reward.',
          'Healing for the fight and the exit.',
          'Matching ammunition, not random ammo types.',
          'Fuel reserve beyond the event location.',
          'A departure direction agreed before looting begins.',
        ],
      },
      {
        heading: 'Secure, sort, and leave',
        paragraphs: [
          'Finish the active threat before the whole party opens item cards. Assign one player to watch the truck and route while another checks the highest-value drop. Compare a reward against the equipped loadout and the next segment; do not reorganize the entire trailer in an exposed area.',
          'Leave when the party has the useful reward, supplies fall below the planned reserve, or the truck becomes vulnerable. The correct stop rule prevents one optional item from consuming a run that was already on pace for a distance milestone.',
        ],
        links: [
          {
            label: 'Compare loot safely',
            href: '/weapons-and-armor',
          },
          {
            label: 'Organize the trailer',
            href: '/trailers',
          },
        ],
      },
      {
        heading: 'Recheck after each update',
        paragraphs: [
          'The official title can rotate from gun skins to Air Drops or another feature. Recheck the Roblox page and the live objective after a shutdown. Do not assume a video recorded on a previous title has the current reward table.',
          'Future verified event details can be added here, but partial community lists will remain separate until the exact current Place supports them.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Air Drops live in Drive and Fight?',
        answer:
          'Air Drops were promoted in the official title before Blossom and the August 3 New Biome update. Recheck the live objective because event availability can rotate during Beta.',
      },
      {
        question: 'What can Air Drops contain?',
        answer:
          'The official title does not publish a stable complete loot table. Check the live item cards and keep only rewards that improve the current run.',
      },
      {
        question: 'When should I leave an Air Drop?',
        answer:
          'Leave after securing the useful reward, when supplies fall below the planned reserve, or when the truck and exit become unsafe.',
      },
    ],
    relatedRoutes: [
      '/weapons-and-armor',
      '/trailers',
      '/guides/multiplayer-guide',
      '/updates',
    ],
  },
  updates: {
    route: '/updates',
    label: 'Beta Updates',
    eyebrow: 'Checked August 4, 2026',
    title: 'Drive and Fight Beta and Update Status',
    description:
      'Track the current Drive and Fight Roblox title, Beta identity, Air Drops feature, official code milestone, and facts to recheck after updates.',
    summary:
      'The current 646 Studios experience is public and active in Beta. Stable identity facts are separated from rotating title features, code milestones, prices, and balance values.',
    sections: [
      {
        heading: 'The current experience is a live Beta',
        paragraphs: [
          'Roblox maps Place ID 97960402739248 to Universe ID 7961333063 and lists 646 Studios as the Group creator. The description explicitly warns players to expect bugs, glitches, and frequent updates.',
          'The live title returned to plain drive and fight on August 4. The August 3 New Biome label and earlier Blossom, Air Drops, and gun-skins labels are historical snapshots, confirming that promoted features can rotate quickly while the Place and Universe remain stable.',
        ],
        bullets: [
          'Place ID: 97960402739248',
          'Universe ID: 7961333063',
          'Creator Group: 646 Studios (3239513)',
          'Current title: drive and fight',
        ],
      },
      {
        heading: 'The official code milestone is visible now',
        paragraphs: [
          'The current description tells players to use code 25KLIKES and promises a new code at 50,000 likes. The unreleased milestone string is not published, so it should not be guessed.',
          'The codes page keeps the official entry separate from expired or unverified strings. Recheck the description after a title update because milestone codes can change faster than the rest of the guide.',
        ],
        links: [{ label: 'Open the current codes page', href: '/codes' }],
      },
      {
        heading: 'Distance and win milestones are official',
        paragraphs: [
          'Roblox badges confirm single-run milestones at 1,000 meters, 5,000 meters, and 15,000 meters, plus a first-win badge. These names provide a durable route for beginner and completion guidance without inventing an unofficial level list.',
          'A badge confirms the outcome, not every current step required to reach it. Objectives, encounter order, and event tuning should be read from the live run.',
        ],
      },
      {
        heading: 'What to recheck after a shutdown',
        paragraphs: [
          'Check the title feature, official description code, item cards, upgrade costs, skill values, Game Pass availability, and objective text. Keep the Place and creator match visible before trusting a guide or copied link.',
          'This site will add databases or split new pages only after the live game and search demand provide enough complete evidence. Beta novelty is not a reason to publish a fake tier list.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Drive and Fight released?',
        answer:
          'The experience is publicly playable and the official description labels it Beta.',
      },
      {
        question: 'Who makes Drive and Fight?',
        answer:
          'The current Roblox experience is published by the 646 Studios Group.',
      },
      {
        question: 'What is the latest feature?',
        answer:
          'The live title is plain drive and fight as of August 4, 2026. New Biome, Blossom, and Air Drops remain previous promoted-feature snapshots.',
      },
    ],
    relatedRoutes: [
      '/air-drops',
      '/codes',
      '/guides/how-to-win',
      '/official-links',
    ],
  },
  'official-links': {
    route: '/official-links',
    label: 'Official Links',
    eyebrow: 'Verified Roblox-owned destinations',
    title: 'Drive and Fight Official Links',
    description:
      'Open the current Drive and Fight Roblox experience and 646 Studios Group; check Discord and Trello status without trusting copied invites.',
    summary:
      'Match Place ID 97960402739248 and creator 646 Studios before playing. No independent official website, public Discord invite, or official Trello was verified during this check.',
    sections: [
      {
        heading: 'Current Roblox experience and creator',
        paragraphs: [
          'Use the current experience at Place ID 97960402739248. Roblox maps it to Universe ID 7961333063 and names 646 Studios as the Group creator. Matching both fields avoids unrelated old experiences and similarly named driving games.',
          'Use Roblox-owned pages for play and purchases. This guide site never asks for a Roblox password, cookie, recovery code, or external installer.',
        ],
        links: [
          {
            label: 'Play drive and fight on Roblox',
            href: officialGameFacts.robloxUrl,
          },
          {
            label: 'Open the 646 Studios Roblox Group',
            href: officialGameFacts.creatorGroupUrl,
          },
        ],
      },
      {
        heading: 'Discord status',
        paragraphs: [
          'The game description invites players to join the community, and the creator Group has social modules, but the public Roblox API did not expose a verifiable Discord invite during this check. A copied invite from a video channel or link directory is not automatically the developer server.',
          'If a community link becomes visible on the current Roblox experience or 646 Studios Group while signed in, confirm the Place and creator before using it. Never enter Roblox credentials into a Discord verification form outside Roblox.',
        ],
      },
      {
        heading: 'Trello and independent website status',
        paragraphs: [
          'No official Trello or independent 646 Studios website for Drive and Fight was verified. Search results for these modifiers did not provide a developer-owned destination.',
          'A future board should be labeled official only after the current Roblox experience or creator Group links it directly. Until then, rely on the live item cards, objectives, badges, and official description.',
        ],
      },
      {
        heading: 'Reject unsafe shortcuts',
        paragraphs: [
          'Do not install scripts, executors, modified Roblox clients, “free Robux” tools, or external APKs to play Drive and Fight. The current experience runs through the official Roblox client.',
          'Codes are plain strings entered through the game’s current interface. A code site never needs your password, cookie, or verification token.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Drive and Fight Roblox game?',
        answer:
          'Use Place ID 97960402739248, Universe ID 7961333063, published by 646 Studios.',
      },
      {
        question: 'What is the official Drive and Fight Discord?',
        answer:
          'No public invite was verified during the July 29 check. Use only a link shown by the current Roblox experience or 646 Studios Group.',
      },
      {
        question: 'Does Drive and Fight have a Trello?',
        answer: 'No official developer-linked Trello was verified.',
      },
    ],
    relatedRoutes: [
      '/updates',
      '/codes',
      '/guides/beginner-guide',
      '/disclaimer',
    ],
  },
};

export function getTopic(slug: string) {
  return topics[slug];
}
