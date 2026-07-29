export const routeLabels: Record<string, string> = {
  '/': 'Wiki Home',
  '/codes': 'Codes',
  '/guides': 'All Guides',
  '/guides/beginner-guide': 'Beginner Route',
  '/guides/first-1000-meters': 'First 1,000 Meters',
  '/guides/how-to-win': 'How to Win',
  '/guides/multiplayer-guide': 'Co-op Roles',
  '/guides/controls-and-inventory': 'Controls & Inventory',
  '/guides/fuel-and-supply-checklist': 'Fuel & Supply Checklist',
  '/truck-upgrades': 'Truck Upgrades',
  '/trailers': 'Trailers & Mobile Base',
  '/weapons-and-armor': 'Weapons & Armor',
  '/skills': 'Skills & XP',
  '/air-drops': 'Air Drops',
  '/updates': 'Beta Updates',
  '/official-links': 'Official Links',
  '/disclaimer': 'Disclaimer',
  '/privacy': 'Privacy',
  '/terms': 'Terms',
  '/cookie': 'Cookie Policy',
};

export function getRouteLabel(route: string) {
  return (
    routeLabels[route] ?? route.replaceAll('-', ' ').replaceAll('/', ' ').trim()
  );
}
