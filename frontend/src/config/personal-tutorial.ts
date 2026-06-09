import type React from 'react'
import {
  AlertTriangle,
  Ban,
  BarChart3,
  Bell,
  BookOpen,
  Filter,
  Image,
  Info,
  Layers,
  LayoutDashboard,
  LineChart,
  MapPin,
  MessageCircle,
  MessageSquare,
  Package,
  ScrollText,
  Send,
  Settings,
  Shield,
  ShoppingCart,
  Store,
  Ticket,
  Timer,
  UserCog,
  Users,
} from 'lucide-react'

export interface TutorialSection {
  id: string
  icon?: React.ElementType
  title: string
  description: string
  important?: boolean
  children?: TutorialSection[]
}

/** 与侧边栏一级分类对齐的个人版教程 */
export const personalTutorialData: TutorialSection[] = [
  {
    id: 'cat-workspace',
    icon: LayoutDashboard,
    title: '工作台',
    description: '查看店铺运营概览与数据分析。',
    children: [
      {
        id: 'dashboard',
        icon: LayoutDashboard,
        title: '仪表盘',
        description: '系统首页，展示账号、关键词、订单与回复统计等核心指标。',
      },
      {
        id: 'data-overview',
        icon: LineChart,
        title: '数据总览',
        description: '查看订单金额趋势与经营数据汇总。',
      },
    ],
  },
  {
    id: 'cat-shop',
    icon: Store,
    title: '店铺运营',
    description: '管理闲鱼账号、商品、订单与卡券库存。',
    children: [
      {
        id: 'accounts',
        icon: Users,
        title: '账号管理',
        description: '添加与管理闲鱼账号，配置自动发货、AI 回复、代理等能力。',
        children: [
          { id: 'accounts-qrcode', title: '扫码登录', description: '使用闲鱼 APP 扫码添加账号。' },
          { id: 'accounts-password', title: '账号密码', description: '使用账号密码登录，可能需要人脸验证。' },
          { id: 'accounts-manual', title: '手动输入', description: '手动填写 Cookie 添加账号。' },
          { id: 'accounts-auto-confirm', title: '自动确认发货', description: '买家下单后自动确认发货并发送卡券，自动发货必须开启。', important: true },
        ],
      },
      {
        id: 'items',
        icon: Package,
        title: '商品管理',
        description: '同步商品并配置发货规则、默认回复与 AI 提示词。',
      },
      {
        id: 'orders',
        icon: ShoppingCart,
        title: '订单管理',
        description: '查看订单状态，支持手动发货与详情查看。',
      },
      {
        id: 'cards',
        icon: Ticket,
        title: '卡券管理',
        description: '维护卡密/虚拟商品库存，供自动发货调用。',
      },
    ],
  },
  {
    id: 'cat-service',
    icon: MessageSquare,
    title: '客服中心',
    description: '处理买家会话、自动回复与消息过滤。',
    children: [
      {
        id: 'online-chat',
        icon: MessageCircle,
        title: '在线聊天',
        description: '实时查看会话并手动回复买家消息。',
      },
      {
        id: 'keywords',
        icon: MessageSquare,
        title: '自动回复',
        description: '按关键词触发预设回复，可批量导入规则。',
      },
      {
        id: 'message-filters',
        icon: Filter,
        title: '消息过滤',
        description: '忽略符合规则的无关消息，减少误触发。',
      },
      {
        id: 'blacklist',
        icon: Ban,
        title: '黑名单管理',
        description: '屏蔽指定买家，不再自动回复其消息。',
      },
    ],
  },
  {
    id: 'cat-publish',
    icon: Store,
    title: '商品发布',
    description: '素材管理、单品/批量发布与发布日志。',
    children: [
      { id: 'product-publish-materials', icon: Image, title: '素材库', description: '管理发布用图片与文案素材。' },
      { id: 'product-publish-single', icon: Send, title: '单品发布', description: '发布单个商品到闲鱼。' },
      { id: 'product-publish-batch', icon: Layers, title: '批量发布', description: '按模板批量创建商品。' },
      { id: 'product-publish-addresses', icon: MapPin, title: '随机地址库', description: '维护发布时随机选用的地址池。' },
      { id: 'product-publish-logs', icon: ScrollText, title: '发布日志', description: '查看历史发布记录与结果。' },
    ],
  },
  {
    id: 'cat-notify',
    icon: Bell,
    title: '消息与日志',
    description: '配置通知渠道并查阅运行日志。',
    children: [
      { id: 'message-logs', icon: ScrollText, title: '消息日志', description: '查看自动回复与消息处理记录。' },
      { id: 'risk-logs', icon: Shield, title: '风控日志', description: '查看账号风控拦截记录。' },
      { id: 'notification-channels', icon: Bell, title: '通知渠道', description: '配置飞书、Webhook、企业微信等推送渠道。' },
      { id: 'message-notifications', icon: MessageCircle, title: '消息通知', description: '定义哪些事件需要推送通知。' },
    ],
  },
  {
    id: 'cat-profile',
    icon: UserCog,
    title: '个人',
    description: '账号级个人配置。',
    children: [
      {
        id: 'personal-settings',
        icon: UserCog,
        title: '个人设置',
        description: '修改密码、重发货触发关键字、联系方式等。',
        children: [
          { id: 'personal-password', title: '修改密码', description: '更新管理员登录密码。' },
          { id: 'personal-redelivery', title: '重发货关键字', description: '在聊天中发送关键字+订单号可触发补发货。' },
          { id: 'personal-contact', title: '联系方式', description: '保存微信/QQ 等备忘信息。' },
        ],
      },
    ],
  },
  {
    id: 'cat-admin',
    icon: Settings,
    title: '系统管理',
    description: '管理员专属：系统参数、定时任务与日志中心。',
    children: [
      {
        id: 'settings',
        icon: Settings,
        title: '系统设置',
        description: '主题、SMTP、免责声明等全局配置。',
      },
      {
        id: 'admin-scheduled-tasks',
        icon: Timer,
        title: '定时任务',
        description: '查看补发货、补评价、擦亮等定时任务状态，可手动触发。',
      },
      {
        id: 'admin-logs',
        icon: ScrollText,
        title: '日志中心',
        description: '系统日志、补发货/补评价/擦亮等各类批次日志。',
      },
    ],
  },
  {
    id: 'cat-help',
    icon: BookOpen,
    title: '帮助',
    description: '使用声明、教程与关于信息。',
    children: [
      {
        id: 'tutorial',
        icon: BookOpen,
        title: '使用教程',
        description: '按菜单分类查看功能说明（即本页）。',
      },
      {
        id: 'disclaimer',
        icon: AlertTriangle,
        title: '免责声明',
        description: '闲管家（个人版）本地部署使用声明与风险提示。',
      },
      {
        id: 'about',
        icon: Info,
        title: '关于',
        description: '版本信息、贡献者与项目仓库链接。',
      },
    ],
  },
  {
    id: 'cat-hidden-tools',
    icon: BarChart3,
    title: '隐藏工具（直达 URL）',
    description: '以下页面不在侧边栏展示，可在地址栏手动访问。',
    children: [
      { id: 'goofish-compass', title: '数据罗盘', description: '访问路径：/goofish-compass' },
      { id: 'goofish-scheduled-crawler', title: '定时采集', description: '访问路径：/goofish-scheduled-crawler' },
      { id: 'item-search', title: '商品搜索', description: '访问路径：/item-search' },
    ],
  },
]
