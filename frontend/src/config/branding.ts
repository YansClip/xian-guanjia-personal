import type { DisclaimerSettings } from '@/types'

export const PERSONAL_APP_NAME = '先闲管家（个人版）'

export const PERSONAL_APP_TAGLINE = '本机部署的闲鱼店铺自动化管家，专注账号、客服、发货与商品发布'

/** 个人版 GitHub 仓库地址 */
export const PERSONAL_GITHUB_REPO_URL = 'https://github.com/YansClip/xian-guanjia-personal'

export const PERSONAL_DISCLAIMER_SETTINGS: DisclaimerSettings = {
  'disclaimer.title': '先闲管家（个人版）使用声明',
  'disclaimer.content': [
    '产品说明',
    '1. 先闲管家（个人版）面向单用户本机或私有服务器部署，不提供多租户注册、分销、充值提现等商业化能力。',
    '2. 菜单按「工作台 / 店铺运营 / 客服中心 / 商品发布 / 消息与日志 / 个人」分类，功能路径保持不变。',
    '',
    '数据存储说明',
    '1. 为保障自动回复、发货、订单同步等功能，系统会在本地存储账号 Cookie、商品、卡券、订单等业务数据。',
    '2. 数据仅用于本机自动化处理，不会主动上传至第三方商业化平台。',
    '3. 请妥善保管服务器、数据库备份与管理员密码。',
    '',
    '用户须知',
    '1. 请确保使用行为符合闲鱼平台规则及相关法律法规。',
    '2. 因账号共享、密码泄露、违规操作或本机环境不安全导致的损失，由使用者自行承担。',
    '3. 系统依赖第三方接口与网络环境，无法保证服务始终无中断。',
    '',
    '隐私与风险提示',
    '1. 建议仅在充分评估风险后接入真实店铺账号。',
    '2. 继续使用即表示您已阅读并理解上述说明。',
  ].join('\n'),
  'disclaimer.checkbox_text': '我已阅读并同意以上使用声明',
  'disclaimer.agree_button_text': '同意并继续',
  'disclaimer.disagree_button_text': '不同意',
}
