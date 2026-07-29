# Drive and Fight Wiki PRD and Implementation Plan

Checked: 2026-07-29

## 1. Product Summary

Build an English Roblox guide hub for the current **drive and fight** experience
published by **646 Studios**. The site should help a new player survive the first
run, understand the truck-and-trailer loop, use the current official code, make
safer loot and upgrade decisions, and distinguish verified current facts from
fast-changing beta details.

This is a thin, fast-rising launch rather than a mature game with a stable public
database. Search coverage is currently sparse, while the official experience has
meaningful live traffic and frequent updates. The launch should therefore use a
focused guide-first model with 8–15 high-intent English content routes instead of
fabricating a tier list or shipping dozens of thin pages.

## 2. Approved Identity

| Field | Value |
| --- | --- |
| Game | drive and fight |
| Site | Drive and Fight Wiki |
| Platform | Roblox |
| Project / GitHub / Worker | `driveandfight` |
| Canonical domain | `https://www.driveandfight.wiki` |
| Domain Property | `sc-domain:driveandfight.wiki` |
| Official experience | `https://www.roblox.com/games/97960402739248/drive-and-fight` |
| Place ID | `97960402739248` |
| Universe ID | `7961333063` |
| Creator | 646 Studios |
| Creator type / ID | Roblox Group / `3239513` |
| Creator page | `https://www.roblox.com/communities/3239513/646-Studios` |
| Independent official website | not yet verified |
| Target data namespace | `src/data/driveandfight/` |
| Target route group | `src/app/[locale]/(driveandfight)/` |

Identity boundary: every current fact must map back to Place `97960402739248`,
Universe `7961333063`, or 646 Studios. Do not merge facts from the unrelated old
experience named “BeamNG Drive [Drive and Fight],” Roblox DRIVE, A Dusty Trip,
Dead Rails, Mad Road, Fortnite islands, or other driving/combat games.

## 3. Current Official Fact Snapshot

The Roblox page and official APIs were checked on 2026-07-29.

- Current title: `🚚 drive and fight [AIR DROPS 📦]`
- Status: public Beta with frequent updates.
- Positioning: apocalyptic road survival centered on a truck.
- Party promise: travel with up to three other players.
- Core loop: loot weapons, armor, ammunition, healing supplies, and fuel; keep
  the truck moving; attach trailers; improve the mobile base; level up; learn
  skills; survive combat encounters.
- Current description-published code: `7500LIKE`.
- Current code milestone promise: another code at 15,000 likes.
- Roblox badge milestones: welcome, 1,000 meters in one run, 5,000 meters in one
  run, 15,000 meters in one run, and first win.
- Official Game Pass surfaces currently show Extra Pockets, Bigger Pockets,
  Speed Boost, x2 Start Cash, 2x XP, and Extra Health. Prices and exact benefits
  are volatile and should not lead public copy unless checked again.
- No independent official website or official Trello was verified.
- Roblox exposes social modules for the creator Group, but the public API did not
  return a verified Discord invite without authentication. Do not publish a
  copied community invite as official.

## 4. Search and Demand Assessment

### Discovery method

- Normal web search for the head term and seed modifiers.
- Google autocomplete for eight seed queries.
- YouTube search for exact-game gameplay, beginner, and code queries.
- Official Roblox description, game metadata, badges, media, and Game Pass APIs.
- Same-operator wiki patterns for route, internal-link, schema, and launch QA.

Serper was not available in the current environment. Google autocomplete returned
no stable suggestions for the new entity. This is evidence of an early search
market, not evidence that every possible modifier deserves a page.

### Keyword matrix

| Keyword | Intent | Planned route | Priority | Status | Evidence / notes |
| --- | --- | --- | --- | --- | --- |
| drive and fight | Entity/head term | `/` | P0 | keep | Exact official Roblox title; current live demand. |
| drive and fight wiki | Reference hub | `/` | P0 | keep | No indexed same-game wiki currently dominates results. |
| drive and fight roblox | Identity/play | `/official-links` | P0 | keep | Needed to separate the current Place from unrelated same-name results. |
| drive and fight codes | Redeem rewards | `/codes` | P0 | keep | Official description publishes `7500LIKE` and promises a later milestone code. |
| drive and fight guide | Broad help | `/guides` | P0 | keep | Exact-game gameplay videos exist; indexed written coverage is sparse. |
| drive and fight beginner guide | First run | `/guides/beginner-guide` | P0 | keep | Strong player problem and current exact-game YouTube evidence. |
| drive and fight how to play | Onboarding | `/guides/beginner-guide` | P0 | keep | Official loop and current gameplay support an answer-first beginner route. |
| drive and fight truck upgrades | Progression | `/truck-upgrades` | P0 | keep | Official description explicitly names crafted truck upgrades. |
| drive and fight trailers | Mobile base | `/trailers` | P0 | keep | Official description explicitly names attachable trailers and a base on wheels. |
| drive and fight weapons | Loot/combat | `/weapons-and-armor` | P0 | keep | Official description and current gameplay show weapons, ammunition, and loot rarity. |
| drive and fight armor | Survival | `/weapons-and-armor` | P0 | keep | Official description explicitly names armor. |
| drive and fight skills | Progression | `/skills` | P0 | keep | Official description explicitly names leveling and learning skills. |
| drive and fight airdrops | Current update/event | `/air-drops` | P0 | keep | Current official title promotes Air Drops. |
| drive and fight how to win | Run completion | `/guides/how-to-win` | P0 | keep | Official badges confirm first-win and 15,000-meter outcomes. |
| drive and fight 1000 meters | Early milestone | `/guides/first-1000-meters` | P1 | keep | Official 1,000-meter badge gives a concrete early-run intent. |
| drive and fight multiplayer | Co-op roles | `/guides/multiplayer-guide` | P1 | keep | Official description promises up to three other players. |
| drive and fight controls | Controls/inventory | `/guides/controls-and-inventory` | P1 | keep | Reasonable early support intent; use only controls visible in current UI. |
| drive and fight weapon skins | Cosmetic/update | `/updates` | P1 | watch | Official description names skins, but public data is too thin for a standalone database. |
| drive and fight gamepasses | Purchase decision | `/skills` | P1 | watch | Official API confirms passes; demand is not yet established. Include a compact value framework only. |
| drive and fight updates | Patch/current state | `/updates` | P1 | keep | Beta description promises frequent updates; current title rotates features. |
| drive and fight discord | Community link | `/official-links` | P1 | watch | Community is mentioned, but no public invite was verified. Publish only verified Roblox-owned links. |
| drive and fight trello | External documentation | `/official-links` | P2 | ignore | No official Trello was verified and search results do not support one. |
| drive and fight tier list | Ranked entities | none | P2 | ignore | No stable ranked entity system or demand evidence. |
| drive and fight classes/heroes/spells | Template residue | none | P2 | ignore | Not supported by the target official description or gameplay evidence. |
| drive and fight scripts/mod apk | Unsafe shortcut | `/disclaimer` | P2 | ignore | No exploit instructions; route users back to official Roblox and account-safety guidance. |

### Launch breadth decision

Launch with:

- homepage hub
- guides category hub
- codes page
- five current system/status hubs
- five to six detailed guide articles
- official links/status page
- disclaimer and standard legal pages

This produces a focused English core without empty databases. Expand only after
GSC reveals stable query clusters or official updates publish structured data.

## 5. Competitor and SERP Benchmark

### Exact-game results

No established same-game guide site or wiki was found in the checked head-term,
codes, guide, truck, trailer, Discord, or Trello searches. The official Roblox
experience is the only consistent exact-entity result. This is the primary SEO
opportunity and also a source-quality warning: claims cannot be “confirmed” by
copying an adjacent game guide.

### Adjacent page references

| Reference | Useful pattern | Weakness to improve |
| --- | --- | --- |
| Official Roblox experience | Canonical identity, live title, creator, gameplay summary, current code | Not a searchable decision guide; fast-changing description. |
| Current exact-game YouTube videos | Real UI, loot, truck, combat, objectives, run flow | Entertainment-first; little query-specific structure; facts can age quickly. |
| AllRoblox “DRIVE” guide | Compact how-to, codes, controls, tips on one page | Covers a different game; cannot be used as target factual data. |
| `rolltodefend.net` | Dense homepage hub, verified snapshot, direct beginner framing | Different mechanic; only architecture and QA patterns are reusable. |
| Copied Roblox launch template | Strong sticky sidebar, mobile menu, schema, route labels, guide renderer | All source-game identity, systems, colors, routes, data, and assets must be replaced. |

### Pages to match

- Official identity and play link
- Current code and exact entry string
- Beginner/onboarding route
- Truck, trailer, loot, skills, event, and update explanations
- Safe official-links page

### Ways to improve

- Put the “what do I do next?” answer before source notes.
- Separate stable official facts from beta-sensitive menu values.
- Connect every article to its prerequisite and next run decision.
- Use explicit short route labels so long guide titles never overflow the sidebar.
- Keep the homepage compact enough to expose the next section in the first viewport.
- Add WebSite, Organization, VideoGame, VideoObject, ItemList, Article, and
  BreadcrumbList structured data where appropriate.

## 6. Video Research and Content Policy

### Selected current references

1. `dUDgAsFEpow` — **I BARELY Survived Roblox DRIVE AND FIGHT...**
   - Channel: bwoo
   - Published: 2026-07-29
   - Duration: 24:35
   - About 734 views when checked
   - Description links the exact Place `97960402739248`
   - Use: homepage gameplay frame and beginner-guide cross-check
2. `qKV9hcg0j7E` — **Playing Drive and fight with my subscriber!**
   - Channel: Mr.CicaBamboni
   - Published: 2026-07-27
   - Duration: 21:39
   - About 807 views when checked
   - Use: secondary co-op/run-flow cross-check, not a universal guide source
3. `ujHvtxjgmAA` — **I Tried Surviving A Roblox Apocalypse In A Semi Truck**
   - Channel: notxeri_
   - Published: 2026-07-29
   - Duration: 33:27
   - Description links the exact Place
   - Use: low-traction secondary visual cross-check only

Search results for code-specific videos were polluted by Driving Empire and other
games. Those results are rejected. The codes page will use the official Roblox
description, not a near-name YouTube result.

### Writing rules

- Present advice directly to the player; never narrate “the video says.”
- Use videos as research/cross-checks, not transcripts.
- Prefer the selected video thumbnail only for the directly supported beginner
  guide. Use official Roblox media for other guides.
- Avoid exact locations, prices, damage values, or keybinds unless a current
  official or visible in-game source supports them.
- Each guide should explain an execution order, a stopping rule, and the next page.
- Detailed guides should normally render at 600+ English words.

## 7. Information Architecture

### Core routes

```text
/
/codes
/guides
/guides/beginner-guide
/guides/first-1000-meters
/guides/how-to-win
/guides/multiplayer-guide
/guides/controls-and-inventory
/truck-upgrades
/trailers
/weapons-and-armor
/skills
/air-drops
/updates
/official-links
/disclaimer
/privacy
/terms
/cookie
```

### Navigation groups

1. Start Here: home, codes, all guides, beginner guide, official links.
2. Build the Truck: truck upgrades, trailers, weapons and armor, skills.
3. Survive the Run: first 1,000 meters, air drops, multiplayer, how to win.
4. Current Status: updates, codes status, disclaimer.

Groups are collapsed by default on desktop, with the active group opened and the
active route highlighted. Mobile receives an expandable wiki menu.

### Related-route label map

Every route above gets an explicit short label. Guide buttons must use
`min-w-0`, `whitespace-normal`, `h-auto`, `text-left`, and `break-words`.

## 8. Homepage Requirements

- Compact split hero with official artwork behind the copy.
- H1: `Drive and Fight Wiki`.
- Positioning: Roblox apocalypse truck-survival guide hub.
- Primary CTA to the exact official Roblox experience.
- Secondary CTA to the beginner guide.
- Short quick links: `Codes`, `Beginner`, `Truck`, `Air Drops`.
- Embedded current exact-game gameplay video without an extra explanatory card.
- First viewport should show the beginning of the “Start the run” section.
- Compact modules for current code, identity, beta state, route milestones, and
  the strongest next decisions.
- Homepage keyword hub must link all high-value system and guide routes.
- FAQ should answer identity, code, first-run, co-op, and win questions.

Homepage description target:

`Drive and Fight Wiki for current codes, truck upgrades, trailers, loot, skills, air drops, and a safer first Roblox apocalypse run.`

## 9. Visual Direction

Use official Roblox icon and five official experience media images.

- Base: charcoal/black road and night-survival tones.
- Primary: hazard orange.
- Secondary: worn red.
- Accent: sand/amber.
- Text: warm off-white and muted gray-green.
- Cards: dense dark panels with thin borders; no oversized SaaS whitespace.
- Buttons: solid orange primary, red/amber outline secondary.
- Square wiki logo rendered at 34–36 px without an unnecessary decorative ring.

Do not retain the template’s cyan/purple anime palette or assets.

## 10. Data Layer

```text
src/data/driveandfight/
  types.ts
  sources.ts
  codes.ts
  guides.ts
  topics.ts
  route-labels.ts
```

Data requirements:

- `checkedAt`, source type, confidence, URL, and source notes.
- Code status supports `active`, `expired`, and `needs_check`.
- Guide source strategy and optional video metadata.
- No complete item/weapon/skill database until reliable current data exists.
- Keep volatile Game Pass values in internal sources rather than leading public copy.

## 11. SEO and Schema

- Homepage: WebSite, Organization, VideoGame, VideoObject.
- Guides hub: ItemList.
- Topic hubs: ItemList from related routes.
- Guide details: Article, BreadcrumbList, optional VideoObject.
- Exact canonical URLs and English hreflang/x-default through the existing locale system.
- Sitemap includes only implemented, useful content routes and legal pages.
- Robots allows public crawling and points to the canonical sitemap.
- Manifest, OG image, favicon, nav, footer, mail links, and metadata all use the
  `driveandfight` identity.

## 12. Template Migration QA

After mechanical migration:

- Remove the old PRD and old public asset namespace.
- Remove obsolete classes, dungeons, heroes, and spells routes.
- Search for old name, domain, IDs, creator, code strings, data namespace, route
  group, asset directory, analytics ID, and old email/domain references.
- Search for inherited third-party ad variables, routes, components, configs, and
  placements. Ordinary launch must contain no ad integration.
- Clear stale Next generated types before TypeScript validation.
- Confirm no raw long route slug is visible in related links.
- Inspect a long guide title in the 276 px desktop sidebar.

## 13. Validation Plan

1. Install dependencies with the existing lockfile.
2. Run `pnpm lint`.
3. Run `pnpm exec tsc --noEmit`.
4. Run `pnpm next:build`.
5. Run the Cloudflare build/deploy command when credentials are available.
6. Start a clean local dev server.
7. Inspect desktop and mobile homepage.
8. Inspect guides hub, codes page, one video guide, one non-video guide, sidebar,
   mobile menu, sitemap, robots, and manifest.
9. Confirm local/remote YouTube thumbnail rendering and official media paths.

## 14. Launch Automation

- Initialize a clean Git repository only after secret and residue scans pass.
- Default GitHub visibility to private if current comparable precedent does not
  unambiguously establish public.
- Create/push `driveandfight`, deploy Worker `driveandfight`, bind apex and `www`,
  and use `www` as canonical.
- Attempt Cloudflare GitHub automatic builds on `main`.
- Create or reuse a GA4 property/data stream for the canonical domain and register
  it in GA-GTM.
- Create/verify `sc-domain:driveandfight.wiki` with an apex Cloudflare DNS TXT,
  confirm `siteOwner`, and submit
  `https://www.driveandfight.wiki/sitemap.xml`.
- Do not remove any URL-prefix GSC property without explicit authorization.
- Register Shipmanager idempotently after validation/launch with priority `P0`.
- Core link 1: homepage, weight 10.
- Core link 2: `/guides` unless post-build evidence makes `/codes` clearly stronger;
  weight 6.

## 15. Definition of Done

- Target identity is complete and old template identity is absent.
- Every planned public route has useful, source-bounded English content.
- Homepage and navigation satisfy desktop/mobile density requirements.
- Metadata, schema, sitemap, robots, manifest, assets, and legal pages are synced.
- No inherited third-party ad code or environment declaration exists.
- Lint, TypeScript, Next build, Cloudflare build, and visual checks pass or every
  blocker is documented with exact evidence.
- GitHub, Cloudflare, GA4, GSC, and Shipmanager steps are completed where external
  authentication permits, with states re-read before reporting.
