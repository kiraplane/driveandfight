# Drive and Fight Wiki 项目需求

基于当前项目的代码框架，开发 drive and fight 的英文 Roblox 攻略站。正式页面类型必须由确认后的当前长尾需求、游戏机制和可靠资料决定，不能因为源模板存在就机械保留。

## 项目身份

- 游戏名称：drive and fight
- 网站名称：Drive and Fight Wiki
- 游戏平台：Roblox
- 项目目录名：driveandfight
- GitHub 仓库名：driveandfight
- Cloudflare Worker 项目名：driveandfight
- 正式域名：www.driveandfight.wiki
- Canonical URL：https://www.driveandfight.wiki
- 计划 PRD 文件：docs/drive-and-fight-wiki-prd-and-implementation-plan.md
- 目标数据目录：src/data/driveandfight/
- 目标路由组：src/app/[locale]/(driveandfight)/

## 官方身份

- Roblox 官方游戏页：https://www.roblox.com/games/97960402739248/drive-and-fight
- Roblox Place ID：97960402739248
- Roblox Universe ID：7961333063
- Roblox 创作者：646 Studios（已验证为 Group 类型）
- Roblox Creator Group ID：3239513
- Roblox 创作者页面：https://www.roblox.com/communities/3239513/646-Studios
- 独立官方网站：not yet verified
- 官方状态快照：`🚚 drive and fight [AIR DROPS 📦]`，游戏说明标记为 Beta；Roblox 官方页面与 API 于 2026-07-29 核验

身份边界：本项目只描述由 646 Studios 发布、Place ID 为 `97960402739248` 的当前 Roblox Experience “drive and fight”。官方说明将其定义为末日公路生存游戏，核心循环包括与最多 3 名其他玩家同行、搜寻武器/护甲/补给、驾驶与升级卡车、连接拖车、打造移动基地、升级技能和解锁武器皮肤。后续研究必须排除名称相似的旧 Roblox 体验、BeamNG 内容和其他驾驶/战斗游戏；不得把源模板的创作者、IDs、代码、玩法、素材、路由或事实带入目标站，也不能暗示本站获得 Roblox 或 646 Studios 的官方背书。

## 核心种子关键词

- drive and fight
- drive and fight wiki
- drive and fight roblox
- drive and fight guide
- drive and fight codes
- drive and fight beginner guide
- drive and fight how to play
- drive and fight truck upgrades
- drive and fight trailers
- drive and fight weapons
- drive and fight armor
- drive and fight skills
- drive and fight weapon skins
- drive and fight airdrops
- drive and fight controls
- drive and fight discord
- drive and fight trello
- drive and fight updates

codes、truck upgrades、trailers、weapons、armor、skills、weapon skins、airdrops、controls、Discord、Trello、updates 等词当前只作为需求研究种子；必须在需求包确认后通过当前搜索需求、游戏机制与可靠资料核验，再标记 keep、ignore、watch 或 localize_later。实体名称必须以玩家实际搜索用词为准，不能直接沿用源模板的实体命名。

## 开发要求

1. 搜索并核验当前玩法、Beta 状态、更新状态和长尾搜索需求，建立 keep / ignore / watch / localize_later 关键词矩阵，再决定页面、导航、实体命名和内容规模。
2. 以当前 Roblox 官方游戏页、Roblox 官方 API、646 Studios Group 页面和当前可靠攻略来源交叉核验事实。不得把源模板或其他同名/近似名游戏的名称、域名、Place/Universe ID、创作者、玩法、代码、素材、广告配置、路由或站点配置带入目标站点。
3. 网站视觉应参考当前 drive and fight Roblox 图标、缩略图和末日卡车生存氛围，不沿用源模板的视觉、配色或素材。
4. 根据真实需求判断是否建设 guides、codes、truck upgrades、trailers、weapons、armor、skills、weapon skins、airdrops、controls、updates、Discord、Trello 或其他页面。没有可靠数据支持的页面不要伪造；可以使用高质量 YouTube 视频作为研究来源，写成独立、面向玩家决策的英文攻略，不能机械转录或改写视频。
5. 对 codes 页面执行双重核验：先确认搜索需求与当前游戏内兑换机制，再核验当前有效代码。不得从相似 Roblox 游戏导入代码；如果存在搜索需求但没有可靠有效代码，应建设清晰的 code-watch 页面。
6. 首页与导航应作为信息密集的 SEO hub，覆盖经核验的高价值次级关键词，并提供桌面端 sticky wiki sidebar 与移动端可展开 wiki menu。
7. 开发完成并验证后，在 GitHub 创建 `driveandfight` 仓库并推送项目。
8. 在 Cloudflare Workers 创建 `driveandfight` 项目，绑定 `driveandfight.wiki` 与 `www.driveandfight.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建。
9. 在 GA4 创建或复用与正式域名对应的媒体资源和 Web 数据流，授权方式与站点注册信息从 `/Users/he/Documents/AI/vibe coding/GA-GTM` 获取并同步。
10. 使用根 Domain Property `sc-domain:driveandfight.wiki` 完成 GSC 所有权验证，并提交完整 canonical sitemap URL。
11. 本地验证与上线步骤完成后，按 wiki-site-builder 规范将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为 codes 或其他模板栏目。
