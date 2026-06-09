export const PERSONAL_DEPLOYMENT_MODE = 'personal'

export function getDeploymentMode(): string {
  return (import.meta.env.VITE_DEPLOYMENT_MODE || 'platform').trim().toLowerCase()
}

export function isPersonalEdition(): boolean {
  return getDeploymentMode() === PERSONAL_DEPLOYMENT_MODE
}

/** personal 模式下从导航与路由中排除的菜单 key */
export const PERSONAL_HIDDEN_MENU_KEYS = new Set([
  'distribution',
  'admin-users',
  'admin-announcements',
  'admin-ad-manage',
  'admin-fund-flows',
])

/** personal 模式下应重定向到 dashboard 的路由前缀 */
export const PERSONAL_BLOCKED_ROUTE_PREFIXES = [
  '/distribution',
  '/admin/users',
  '/admin/announcements',
  '/admin/ad-manage',
  '/admin/fund-flows',
  '/feedback',
  '/ad-apply',
  '/accounts/shared-scan',
  '/shared-scan',
  '/shared-scan-page',
]

/** personal 模式下应重定向到 login 的公开路由 */
export const PERSONAL_AUTH_BLOCKED_ROUTES = new Set([
  '/register',
  '/get-activation',
  '/renew-activation',
  '/get-source-code',
  '/get-local-version',
])

export function isPersonalBlockedPath(path: string): boolean {
  if (PERSONAL_AUTH_BLOCKED_ROUTES.has(path)) {
    return true
  }
  return PERSONAL_BLOCKED_ROUTE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  )
}
