import { videos } from './sources';
import type { Guide } from './types';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Drive and Fight Beginner Guide: Your First Complete Run',
    seoTitle: 'Drive and Fight Beginner Guide - First Roblox Run',
    seoDescription:
      'Start Drive and Fight with a clear truck, fuel, loot, combat, trailer, and milestone plan for your first Roblox apocalypse run.',
    summary:
      'Your first run is about keeping the truck movable, carrying only supported loot, and reaching the next safe decision with enough fuel, healing, and ammunition to continue.',
    category: 'Start Here',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'drive and fight roblox beginner guide',
      '"drive and fight" roblox gameplay',
      '"drive and fight" roblox',
    ],
    sourceNotes:
      'Official game description, badges, current Roblox APIs, and exact-Place gameplay rechecked August 1, 2026. Volatile objective order and prices remain tied to the live game.',
    coverImageUrl: videos.currentGameplay.thumbnailUrl,
    video: videos.currentGameplay,
    tags: ['beginner', 'first run', 'truck', 'survival'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Start with the correct game and one simple objective',
        paragraphs: [
          'Open the 646 Studios experience at Place ID 97960402739248. The name is generic enough that search results can lead to unrelated driving games, so matching the creator and Place is the safest first step. Once inside, read the current objective and on-screen interaction prompts before moving supplies. Drive and Fight is in Beta, and the exact opening flow can change after an update.',
          'Use one target for the first serious run: reach the official 1,000-meter milestone with the truck still supplied. Do not try to collect every rare item, master every skill, and complete every event at once. The first kilometer teaches the rhythm of movement, stops, combat, and recovery. A controlled goal makes every pickup easier to judge.',
        ],
        bullets: [
          'Verify creator 646 Studios and Place ID 97960402739248.',
          'Redeem the current official code before spending normal run resources.',
          'Read the live objective and platform-specific prompts.',
          'Treat 1,000 meters as the first repeatable run benchmark.',
        ],
      },
      {
        heading: 'Make the truck movable before making it impressive',
        paragraphs: [
          'The truck is the run. It carries the party, protects the supply plan, and becomes the base that later trailers expand. Before leaving a safe stop, confirm that movement is possible, fuel is loaded or reserved, and the departure path is not blocked by loose items. A weapon upgrade cannot rescue a run that has no way to move.',
          'Keep the early vehicle plan boring and reliable. Repair or fuel the part identified by the current objective, then leave enough cash or value for the next essential purchase. Avoid using every resource on a cosmetic or extra-capacity decision before the truck has survived a normal road segment. The best early upgrade is the one that removes a failure you have already seen.',
        ],
      },
      {
        heading: 'Loot in the order that protects the next kilometer',
        paragraphs: [
          'Use a survival order when entering a building or supply stop: fuel, healing, ammunition for equipped weapons, then replacement gear and optional value. This does not mean fuel is always the rarest item; it means the truck must leave the stop before any other loot can matter. A valuable item that forces you to abandon fuel or healing is often a downgrade for the run.',
          'Read item cards before swapping. Current gameplay exposes rarity, value, and interaction choices, but those labels solve different problems. Rarity can identify an unusual find, value can support a later purchase, and usability depends on ammunition, range, inventory space, and the next fight. Keep a stable weapon until the replacement has matching supplies and a clear purpose.',
        ],
        bullets: [
          'Fuel keeps every other item relevant.',
          'Healing converts one mistake into a recoverable situation.',
          'Matching ammunition matters more than random ammunition volume.',
          'Replacement gear must improve the current loadout, not just look rarer.',
        ],
      },
      {
        heading: 'Stop cleanly and return to the road',
        paragraphs: [
          'Most early runs lose time at stops rather than on the road. Park so the truck can leave without reversing through clutter, decide which player watches the vehicle, and search only the area that can be cleared safely. When the current objective changes or enemies pressure the stop, finish the essential action and regroup instead of opening more containers.',
          'Use a simple departure call: fuel loaded, healing present, weapons supported, route clear. If one category is missing, announce it once and decide whether the stop can solve it. The party should not wait for a low-value item after the truck is ready. Every extra minute increases the chance that a clean supply stop turns into an expensive fight.',
        ],
      },
      {
        heading: 'Fight for progress, not for every possible elimination',
        paragraphs: [
          'Combat is part of the XP and loot loop, but the party does not need to chase every enemy. Use the truck and terrain to limit how many threats can reach the group, reload before pushing into another room, and keep a retreat path visible. If ammunition or health falls below the amount needed to leave, the fight has already become too expensive.',
          'Events such as Air Drops can be useful, but they are optional compared with keeping the first run alive. Enter an event only when the truck has fuel to exit, at least one inventory slot is open, and the team has a clear departure direction. A beginner win is a longer stable run, not the largest pile of abandoned loot.',
        ],
      },
      {
        heading: 'Use the first ending as your upgrade report',
        paragraphs: [
          'When the run ends, name the first cause rather than the final animation. Did the truck stall, did the party run out of healing, did ammunition mismatch the weapons, or did everyone leave the vehicle during a stop? That diagnosis determines whether the next investment belongs in truck movement, storage, protection, skills, or a better route.',
          'Repeat the opening with one meaningful change. Reaching 1,000 meters more consistently is stronger evidence than a single lucky drop. Once the first kilometer feels controlled, move the target to 5,000 meters and begin planning the full completion route without changing every system at once.',
        ],
        links: [
          {
            label: 'Plan the first 1,000 meters',
            href: '/guides/first-1000-meters',
          },
          {
            label: 'Set the supply reserve',
            href: '/guides/fuel-and-supply-checklist',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Drive and Fight?',
        answer:
          'Verify the current 646 Studios Place, read the live objective, make the truck movable, and build a small fuel, healing, and matching-ammunition reserve.',
      },
      {
        question: 'What should I keep when inventory is full?',
        answer:
          'Keep fuel, healing, ammunition for equipped weapons, and a replacement that clearly improves the loadout. Leave low-purpose duplicates.',
      },
      {
        question: 'Should beginners chase Air Drops?',
        answer:
          'Only when the truck can leave, the party has healing and ammunition, and at least one slot is open. The first kilometer is the safer early target.',
      },
      {
        question: 'What is a good first milestone?',
        answer:
          'Roblox has an official badge for traveling 1,000 meters in one run, making it a useful first benchmark.',
      },
    ],
    relatedRoutes: [
      '/guides/first-1000-meters',
      '/guides/fuel-and-supply-checklist',
      '/truck-upgrades',
      '/codes',
    ],
  },
  {
    slug: 'first-1000-meters',
    title: 'Drive and Fight First 1,000 Meters Route',
    seoTitle: 'Drive and Fight 1,000 Meters Guide - Early Route',
    seoDescription:
      'Reach 1,000 meters in one Drive and Fight run with a safer departure, supply-stop rhythm, combat budget, and truck recovery plan.',
    summary:
      'The first kilometer is a systems test. Leave with a movable truck, spend each stop on one missing reserve, and refuse optional fights that consume the supplies needed for the next segment.',
    category: 'Survival',
    sourceStrategy: 'official',
    sourceNotes:
      'The 1,000-meter single-run target is confirmed by the current official Roblox badge list. Route advice avoids fixed encounter order because Beta objectives can change.',
    coverImageUrl: '/driveandfight/media/road.png',
    tags: ['1000 meters', 'route', 'milestone', 'survival'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Treat 1,000 meters as a consistency test',
        paragraphs: [
          'Roblox awards an official badge for traveling 1,000 meters in one run. That makes the distance a useful early objective: it is long enough to expose weak fuel, loot, combat, and departure habits, but short enough to repeat without building a perfect late-game setup. Your result should answer whether the opening plan is stable.',
          'Do not measure success only by the badge popup. Record what remained when you crossed the distance: fuel, healing, usable ammunition, truck condition, and open storage. Reaching the line completely empty can be a learning win, but it is not yet a repeatable route toward 5,000 or 15,000 meters.',
        ],
      },
      {
        heading: 'Leave the first safe area with four answers',
        paragraphs: [
          'Before the truck moves, answer four questions: can it travel, can the driver leave the current position cleanly, can the party recover from one mistake, and can every equipped weapon be fired through one encounter? If any answer is no, solve that problem before carrying optional value.',
          'Keep the hotbar readable. Put one emergency item where it can be selected without searching and avoid filling every slot with different low-purpose objects. If the current objective requires a repair or interaction, complete it before reorganizing the entire truck. Movement creates access to the next supply opportunity.',
        ],
        bullets: [
          'Truck movement confirmed.',
          'Departure path clear.',
          'At least one healing option assigned.',
          'Equipped weapons have matching ammunition.',
        ],
      },
      {
        heading: 'Use short stops with one shopping list',
        paragraphs: [
          'At each stop, identify the reserve furthest below target. If fuel is low, search fuel locations and leave after restoring the route. If healing is low, do not let an interesting weapon turn the stop into a full-building clear. One shopping list keeps the party from splitting and reduces the time the parked truck is exposed.',
          'Set a departure trigger before the search begins: the missing reserve is restored, the current objective is complete, or resistance costs more than the stop can replace. This prevents sunk-cost thinking. Loot already collected is valuable only if the truck returns to the road.',
        ],
      },
      {
        heading: 'Budget combat by the exit cost',
        paragraphs: [
          'A fight is affordable when the party can finish it and still leave with healing, ammunition, and truck access. It is unaffordable when every player empties magazines into distant enemies, abandons the vehicle, or uses the last recovery item for optional loot. Protect the exit before chasing the final target.',
          'Use range and cover to reduce incoming damage, reload while the route is calm, and avoid stacking every player in the same exposed doorway. In solo play, retreat earlier because no teammate can cover a reload or recover supplies. In co-op, one defender can watch the truck while the looter completes the planned action.',
        ],
      },
      {
        heading: 'Recover from the first warning instead of the final failure',
        paragraphs: [
          'The first warning might be an empty fuel slot, a weapon without matching ammunition, low health with no visible healing, or a truck parked where it cannot turn. Respond immediately. Waiting for a complete failure usually costs more supplies than fixing the warning at the previous safe stop.',
          'If the truck is damaged or the party is disorganized, shorten the next objective. Restore movement, group the key supplies, and skip an optional event. A controlled slow segment is better than entering an Air Drop or compound defense without a usable exit.',
        ],
      },
      {
        heading: 'Turn the badge run into the next plan',
        paragraphs: [
          'After crossing 1,000 meters, keep driving only while the reserve plan still works. The goal is to learn how far the current setup can go before one category collapses. When the run ends, note the earliest resource or decision that became unstable.',
          'For the next attempt, change one lever: a truck upgrade, a different storage layout, a clearer role assignment, or a higher reserve for the first resource that ran out. Repeat until the first kilometer feels routine. That is the moment to begin a serious 5,000-meter and completion attempt.',
        ],
        links: [
          {
            label: 'Build a full win plan',
            href: '/guides/how-to-win',
          },
          {
            label: 'Choose the next truck upgrade',
            href: '/truck-upgrades',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a badge for 1,000 meters?',
        answer:
          'Yes. Roblox lists an official badge for traveling 1,000 meters in one run.',
      },
      {
        question: 'What should I prioritize before leaving?',
        answer:
          'Confirm truck movement, a clear exit, healing, and ammunition that matches equipped weapons.',
      },
      {
        question: 'How long should I stay at a supply stop?',
        answer:
          'Leave when the missing reserve is restored, the objective is complete, or resistance costs more than the stop can replace.',
      },
    ],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/how-to-win',
      '/guides/fuel-and-supply-checklist',
      '/truck-upgrades',
    ],
  },
  {
    slug: 'how-to-win',
    title: 'How to Win in Drive and Fight',
    seoTitle: 'How to Win Drive and Fight - 15,000 Meter Run Plan',
    seoDescription:
      'Build a Drive and Fight win route around the official 15,000-meter milestone, reserve floors, truck recovery, and optional-event stop rules.',
    summary:
      'A winning run protects movement and reserve floors through three phases: establish the truck, preserve the middle, and enter the final distance without turning optional loot into a fatal delay.',
    category: 'Survival',
    sourceStrategy: 'official',
    sourceNotes:
      'Roblox badges confirm 5,000-meter, 15,000-meter, and first-win outcomes. The live objective remains the source for current completion details.',
    coverImageUrl: '/driveandfight/media/experience.png',
    tags: ['win', '15000 meters', 'completion', 'route'],
    difficulty: 'Intermediate',
    body: [
      {
        heading: 'Use the official milestones as run phases',
        paragraphs: [
          'Roblox currently lists single-run badges at 1,000, 5,000, and 15,000 meters, plus a first-win badge. Those milestones provide a practical structure even when Beta encounter order changes. The opening establishes the truck, the middle tests whether reserves are sustainable, and the final phase rewards discipline more than novelty.',
          'The live objective is still the final authority for completion. A distance badge confirms that the route recognizes progress; it does not guarantee that every update uses the same event sequence. Read the current objective at each transition and keep the plan flexible.',
        ],
      },
      {
        heading: 'Phase one: establish a surplus before 1,000 meters',
        paragraphs: [
          'The opening should produce more than bare movement. Build a small reserve of fuel, healing, and matching ammunition while keeping the truck easy to leave. Avoid spending every early resource on capacity or damage. A full-completion attempt needs the ability to recover from one poor stop.',
          'Choose the party roles and storage layout early. Reassigning every item and argument during a dangerous middle segment wastes the advantage created by the opening. The driver calls departure, the defender protects the truck, the looter follows the shopping list, and the supply lead tracks the reserve floor.',
        ],
        bullets: [
          'Reach 1,000 meters with supplies remaining, not merely with the truck moving.',
          'Keep one recovery option unspent for an unexpected encounter.',
          'Give each trailer area and party member a clear job.',
          'Skip optional value that delays a clean departure.',
        ],
      },
      {
        heading: 'Phase two: protect the reserve floor through 5,000 meters',
        paragraphs: [
          'The middle is where good openings often disappear. A reserve floor is the amount you refuse to spend on optional activity: enough fuel to leave, healing for a serious mistake, and ammunition for the next required fight. If a category reaches the floor, the next stop serves that category before anything else.',
          'Use replacement rules. Swap a weapon only when its ammunition is supported, take an event reward only when it fits available space, and buy an upgrade only when it fixes a repeated run failure. These rules reduce time spent comparing every item while the truck is exposed.',
        ],
      },
      {
        heading: 'Do not let Air Drops rewrite the entire route',
        paragraphs: [
          'Air Drops are part of the current live update, but they remain optional unless the current objective makes one required. Before approaching, confirm open storage, a defended truck, a departure direction, and enough supplies to leave after the fight. Enter for one useful improvement rather than for a complete inventory rebuild.',
          'Abandon the event when healing or ammunition reaches the reserve floor, the truck becomes difficult to reach, or the useful reward is already secured. The full-run target is more valuable than a second uncertain item. Optional content should strengthen completion instead of becoming the reason completion ends.',
        ],
      },
      {
        heading: 'Phase three: reduce decisions before 15,000 meters',
        paragraphs: [
          'Late in the run, use fewer experiments. Keep the weapon and role setup that has survived the middle, replace only clearly depleted supplies, and shorten stops. A rare item is not automatically worth changing a stable loadout when the route is already working.',
          'Protect the truck during every objective. Park for the exit, keep one player aware of the vehicle, and regroup before the departure call. Most late failures begin as small coordination problems: an item left behind, a player searching alone, or the driver moving without a reserve check.',
        ],
      },
      {
        heading: 'Convert a failed completion into one precise change',
        paragraphs: [
          'If the run ends before the win, find the first phase where the reserve plan broke. A final combat defeat may have started with overspending at an earlier event or carrying the wrong ammunition for several stops. Fix the first unstable decision, not only the final damage source.',
          'Repeat the route with one change and compare where the warning appears. A better truck upgrade, tighter trailer layout, or clearer departure call can extend the run more reliably than searching for a single overpowered item. Completion becomes repeatable when the plan survives ordinary bad luck.',
        ],
        links: [
          {
            label: 'Set the reserve checklist',
            href: '/guides/fuel-and-supply-checklist',
          },
          {
            label: 'Prepare for Air Drops',
            href: '/air-drops',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'How far do you travel to win Drive and Fight?',
        answer:
          'Roblox lists a 15,000-meter single-run badge and a separate first-win badge. Follow the live objective for the exact current completion step.',
      },
      {
        question: 'What is a reserve floor?',
        answer:
          'It is the fuel, healing, and usable ammunition you refuse to spend on optional activity because the next required segment needs it.',
      },
      {
        question: 'Should I stop for every Air Drop?',
        answer:
          'No. Stop only when the truck can exit, supplies are above the reserve floor, and the event can improve the run without delaying completion.',
      },
    ],
    relatedRoutes: [
      '/guides/first-1000-meters',
      '/guides/fuel-and-supply-checklist',
      '/air-drops',
      '/truck-upgrades',
    ],
  },
  {
    slug: 'multiplayer-guide',
    title: 'Drive and Fight Multiplayer Guide: Four Useful Roles',
    seoTitle: 'Drive and Fight Multiplayer Guide - Co-op Roles',
    seoDescription:
      'Assign Drive and Fight co-op roles for driving, truck defense, looting, supplies, stops, and clean departures with up to four players.',
    summary:
      'A four-player party becomes stronger when the truck always has a driver, defender, focused looter, and supply lead. Roles can overlap, but ownership must stay clear.',
    category: 'Co-op',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      '"drive and fight" roblox multiplayer',
      '"drive and fight" roblox co-op',
      '"drive and fight" subscriber',
    ],
    sourceNotes:
      'Official description confirms up to three other players. Current co-op gameplay is used only to cross-check party flow, not to claim fixed mechanics.',
    coverImageUrl: videos.coopGameplay.thumbnailUrl,
    video: videos.coopGameplay,
    tags: ['multiplayer', 'co-op', 'roles', 'party'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Assign ownership before the truck moves',
        paragraphs: [
          'The official description supports travel with up to three other players, creating a four-person party. More players do not automatically create better runs. Without ownership, everyone can leave the truck for the same item, consume the same ammunition, or assume someone else counted fuel.',
          'Choose a primary job for each player before departure. A role is not a permanent class; it is the person who makes sure one necessary task is never forgotten. Players can help each other after the primary task is safe.',
        ],
      },
      {
        heading: 'Driver and route lead',
        paragraphs: [
          'The driver keeps the truck movable, parks for departure, and makes the final leave call. At a stop, the driver checks fuel, truck condition, and the space needed to turn. The role should not be abandoned for a low-value pickup while the party is exposed.',
          'The route lead also reads the current objective and announces the next destination or condition. In a small party, this is usually the same person. Good calls are short: what is missing, how long the stop lasts, and which direction the truck leaves.',
        ],
        bullets: [
          'Park for the exit, not the shortest walk to loot.',
          'Track movement, fuel, and the live objective.',
          'Give one departure warning, then confirm the party is aboard.',
          'Do not move while the supply lead is loading a critical item.',
        ],
      },
      {
        heading: 'Defender and truck anchor',
        paragraphs: [
          'The defender protects the vehicle, watches the party’s retreat path, and prevents every player from disappearing into the same building. The best defender is not the person chasing the most eliminations; it is the person who keeps the exit usable.',
          'Use a weapon with supported ammunition and a range that complements the looter. Announce pressure early so the party can shorten the search. When the stop becomes too expensive, cover the regroup instead of extending the fight for one final enemy.',
        ],
      },
      {
        heading: 'Looter and objective runner',
        paragraphs: [
          'The looter follows a short shopping list based on the weakest reserve. Enter with open inventory space, read item cards quickly, and return after finding the planned supply or completing the objective. Bringing back random value while fuel is missing does not solve the stop.',
          'Avoid deep solo searches when the party cannot see the return path. If an item requires a long comparison, announce it and let the supply lead decide whether the trailer has room. The looter’s value is speed and focus, not total pickup count.',
        ],
      },
      {
        heading: 'Quartermaster and flexible support',
        paragraphs: [
          'The supply lead organizes fuel, healing, and ammunition, tracks the reserve floor, and makes sure a new weapon has matching supplies. During combat, this player supports the defender or driver, but after the fight the first job is restoring a readable mobile base.',
          'Use broad storage categories instead of a fragile perfect layout. The quartermaster should be able to answer whether the party can leave and which category needs the next stop. In a three-player party, combine this role with the looter; in a two-player party, combine driver with quartermaster and defender with looter.',
        ],
      },
      {
        heading: 'Use communication that survives pressure',
        paragraphs: [
          'Keep calls factual and short: fuel found, healing low, truck threatened, objective complete, leaving now. Do not make the party wait through a full item debate during an event. Move the item to the flexible slot and compare it at the next safe stop.',
          'After a failed run, each role names one warning that appeared early. The party changes one process and repeats. A consistent departure call or reserve count often improves the route more than assigning blame for the final fight.',
        ],
        links: [
          {
            label: 'Organize the mobile base',
            href: '/trailers',
          },
          {
            label: 'Build the full win route',
            href: '/guides/how-to-win',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'How many players can play Drive and Fight together?',
        answer:
          'The official description says you can travel with up to three other players, for a party of four.',
      },
      {
        question: 'What are the best co-op roles?',
        answer:
          'Use a driver/route lead, defender, focused looter, and quartermaster. Combine roles in smaller parties.',
      },
      {
        question: 'Who should make the departure call?',
        answer:
          'The driver or route lead should make the final call after fuel, critical supplies, objective status, and party position are confirmed.',
      },
    ],
    relatedRoutes: [
      '/trailers',
      '/guides/how-to-win',
      '/guides/fuel-and-supply-checklist',
      '/skills',
    ],
  },
  {
    slug: 'controls-and-inventory',
    title: 'Drive and Fight Controls and Inventory Guide',
    seoTitle: 'Drive and Fight Controls & Inventory Guide',
    seoDescription:
      'Read Drive and Fight interaction prompts, organize the hotbar, compare item cards, and keep emergency supplies usable across PC, mobile, and console.',
    summary:
      'Use the prompt shown by the live client instead of memorizing one platform’s keys. Build a hotbar that puts movement, healing, and supported weapons ahead of random value.',
    category: 'Loot',
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Current exact-game footage cross-checks the hotbar and contextual item prompts. The article avoids a fixed key list because platform mappings and Beta UI can change.',
    coverImageUrl: '/driveandfight/media/loot.png',
    tags: ['controls', 'inventory', 'hotbar', 'items'],
    difficulty: 'Beginner',
    body: [
      {
        heading: 'Follow the live prompt for your platform',
        paragraphs: [
          'Drive and Fight displays contextual prompts beside items and objectives. Use the prompt currently shown on PC, mobile, or console rather than relying on a copied keyboard list. The interaction can change with the object: purchasing, swapping, taking, repairing, and other actions do not always deserve the same assumption.',
          'Pause long enough to read the item card before pressing the action. Confirm whether the object is entering the hotbar, replacing an equipped item, being purchased, or changing the truck. A one-second check prevents an accidental swap from turning a stocked loadout into a supply problem.',
        ],
      },
      {
        heading: 'Give every hotbar slot a purpose',
        paragraphs: [
          'A readable hotbar is faster than a full hotbar. Keep one supported weapon, the matching ammunition plan, one emergency recovery option, and the tools or supplies needed for the current objective. Extra pockets are useful only when the player can still find the emergency item under pressure.',
          'Place the most time-sensitive item in a consistent position across runs. Muscle memory should help with healing or a critical tool, not with selecting random loot. Move optional value to trailer storage or the least important slot rather than changing the whole layout at every stop.',
        ],
        bullets: [
          'Primary supported weapon.',
          'Emergency healing in a consistent slot.',
          'Current objective or truck supply.',
          'Flexible slot for one temporary upgrade or valuable item.',
        ],
      },
      {
        heading: 'Read rarity, value, and use as separate signals',
        paragraphs: [
          'Item cards can show rarity and value, but neither confirms that the item belongs in the current loadout. Rarity tells you the find is unusual. Value may support a future purchase. Use depends on ammunition, range, healing need, truck state, and the next objective.',
          'Compare the replacement before committing. If the new weapon has no matching ammunition or the valuable item consumes the last fuel slot, leave it or place it in flexible storage. The complete run is the goal; inventory value is only one tool.',
        ],
      },
      {
        heading: 'Separate carried items from mobile-base reserves',
        paragraphs: [
          'Carry what must be used away from the truck. Store bulk fuel, reserve healing, spare ammunition, and later-purpose value on an organized trailer. This keeps the player responsive while preserving the supplies needed for a longer route.',
          'Do not hide every emergency item on the trailer. If a fight separates the player from the vehicle, at least one healing option and a usable weapon should remain available. The carried loadout and mobile base protect different moments.',
        ],
        links: [
          {
            label: 'Set up trailer storage',
            href: '/trailers',
          },
          {
            label: 'Compare weapons and armor',
            href: '/weapons-and-armor',
          },
        ],
      },
      {
        heading: 'Reset the layout after a difficult stop',
        paragraphs: [
          'After combat or an event, stop at the next safe moment and rebuild the known layout. Combine matching supplies, remove empty or unsupported items, and restore the emergency slot. Waiting until the next fight to discover a missing heal is too late.',
          'If controls or item behavior changed after an update, trust the current prompt and re-learn the interaction in a safe area. Do not force an old keybind guide onto a new Beta interface.',
        ],
      },
      {
        heading: 'Use mistakes as a control checklist',
        paragraphs: [
          'If the wrong item was selected, decide whether the slot position or category was unclear. If an accidental swap occurred, slow down at item cards. If supplies were abandoned, create one flexible slot before the next search. Each mistake should produce a small layout change.',
          'A clean inventory makes every other guide easier. The driver can leave faster, the looter can follow one shopping list, and the party can see the reserve floor without counting a pile of unrelated objects.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the Drive and Fight controls?',
        answer:
          'Use the contextual prompt shown by the current client for your platform. Key mappings can differ across PC, mobile, and console and may change during Beta.',
      },
      {
        question: 'What should be in the hotbar?',
        answer:
          'Keep a supported weapon, a consistent emergency-healing slot, the current objective supply, and one flexible slot.',
      },
      {
        question: 'Does rare always mean better?',
        answer:
          'No. Check ammunition, use, range, inventory cost, and the next encounter before replacing a reliable item.',
      },
    ],
    relatedRoutes: [
      '/weapons-and-armor',
      '/trailers',
      '/guides/fuel-and-supply-checklist',
      '/guides/beginner-guide',
    ],
  },
  {
    slug: 'fuel-and-supply-checklist',
    title: 'Drive and Fight Fuel and Supply Checklist',
    seoTitle: 'Drive and Fight Fuel & Supply Checklist',
    seoDescription:
      'Use a repeatable Drive and Fight departure checklist for fuel, healing, ammunition, storage, truck access, and the next objective.',
    summary:
      'A supply plan is a set of floors and triggers, not a perfect item count. Leave each stop with enough movement, recovery, and usable ammunition for the next required segment.',
    category: 'Truck',
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Official description confirms supplies, weapons, armor, truck upgrades, and trailers. Current exact-game footage cross-checks fuel cans, ammunition, bandages, item cards, and truck storage.',
    coverImageUrl: '/driveandfight/media/airdrop.png',
    tags: ['fuel', 'supplies', 'checklist', 'trailer'],
    difficulty: 'Beginner',
    body: [
      {
        heading:
          'Use floors instead of pretending one number fits every update',
        paragraphs: [
          'A reserve floor is the minimum supply you protect for the next required segment. Exact counts depend on the current Beta balance, party size, weapons, and route. The durable rule is to leave with enough fuel to reach another opportunity, healing to recover from a serious mistake, and ammunition that matches the weapons being carried.',
          'Do not count random ammunition or high-value items as survival reserve. A full trailer can still be empty of useful options. Group supplies by job so the driver or quartermaster can answer whether the party is ready without inspecting every object.',
        ],
      },
      {
        heading: 'Departure check: movement',
        paragraphs: [
          'Confirm the truck can move, the current repair or objective interaction is complete, fuel is loaded or reserved, and the departure path is clear. Parked vehicles, loose items, and an attached trailer can turn a simple exit into a dangerous delay if the route was not considered before looting.',
          'Keep more than the exact amount you expect to consume when the next stop is uncertain. The reserve is insurance for a missed turn, an event, or a longer fight. If the route is familiar and supply access is stable, the buffer can be smaller; if the update is new, protect more flexibility.',
        ],
        bullets: [
          'Truck movement confirmed.',
          'Fuel loaded plus a reasonable buffer.',
          'Trailer attached and not blocking the turn.',
          'Driver knows the next direction before departure.',
        ],
      },
      {
        heading: 'Departure check: recovery and combat',
        paragraphs: [
          'Assign at least one healing option to a reachable player slot and keep additional recovery where the party can find it quickly. A healing item buried under value loot is not a usable reserve. In co-op, announce who carries the emergency option so two players do not both assume the other has it.',
          'Count ammunition by equipped weapon. If a new weapon cannot be supported through one serious encounter, keep the reliable old option or store the new item until matching supplies appear. Avoid giving every player the same ammunition dependency unless the reserve is large enough to support it.',
        ],
      },
      {
        heading: 'Supply-stop check: search one missing category',
        paragraphs: [
          'Before leaving the truck, name the category furthest below floor. The looter searches that category, the defender watches the route, and the driver keeps the vehicle ready. This produces shorter stops and prevents the party from clearing a whole area while the original problem remains unsolved.',
          'If the missing category is not available, leave before optional fighting consumes the remaining reserve. Carrying valuable loot into a stranded or unwinnable segment is not progress. Use the next stop or route choice to solve the shortage.',
        ],
      },
      {
        heading: 'Post-event check: restore the run before admiring the reward',
        paragraphs: [
          'After an Air Drop or compound defense, count what the event cost. Replace healing and matching ammunition, check truck access, and make room for the reward without burying fuel. Compare the new item at a safe stop rather than reorganizing the full trailer in the event area.',
          'If supplies fell below floor, the next action is recovery, not another event. A strong reward does not eliminate the need to travel, heal, and fight through the rest of the run.',
        ],
        links: [
          {
            label: 'Prepare the Air Drop approach',
            href: '/air-drops',
          },
          {
            label: 'Organize trailer categories',
            href: '/trailers',
          },
        ],
      },
      {
        heading: 'End-of-run check: change the first unstable floor',
        paragraphs: [
          'When the run ends, identify which protected category failed first. If fuel became uncertain long before the final fight, raising the healing reserve will not fix the route. Change the first unstable floor or the stop process that failed to restore it.',
          'Repeat with one adjustment and track whether the warning appears later. The checklist becomes useful when it reflects the party’s actual consumption, not an arbitrary perfect loadout copied from another game.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much fuel should I carry?',
        answer:
          'Carry enough to reach another supply opportunity plus a buffer for uncertainty. Exact counts can change with route and Beta balance.',
      },
      {
        question: 'What supplies matter most?',
        answer:
          'Fuel, reachable healing, and ammunition that matches equipped weapons protect the next required segment.',
      },
      {
        question: 'What should I search for at a stop?',
        answer:
          'Search first for the reserve category furthest below its floor, then leave when it is restored or the stop becomes too expensive.',
      },
    ],
    relatedRoutes: [
      '/trailers',
      '/truck-upgrades',
      '/air-drops',
      '/guides/how-to-win',
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
