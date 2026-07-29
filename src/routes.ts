import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',

  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Codes = '/codes',
  Guides = '/guides',
  TruckUpgrades = '/truck-upgrades',
  Trailers = '/trailers',
  WeaponsAndArmor = '/weapons-and-armor',
  Skills = '/skills',
  AirDrops = '/air-drops',
  Updates = '/updates',
  OfficialLinks = '/official-links',
  BeginnerGuide = '/guides/beginner-guide',
  First1000Meters = '/guides/first-1000-meters',
  HowToWin = '/guides/how-to-win',
  MultiplayerGuide = '/guides/multiplayer-guide',
  ControlsGuide = '/guides/controls-and-inventory',
  SupplyChecklist = '/guides/fuel-and-supply-checklist',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
