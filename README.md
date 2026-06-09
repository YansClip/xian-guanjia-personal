# 闲管家（个人版）

面向**单用户、本机或私有服务器**部署的闲鱼店铺自动化工具。帮你把账号登录、买家消息、自动回复、卡券发货、订单跟进和商品发布收拢到一套本地 Web 界面里，不做多租户，也不带分销、充值提现等商业化模块。

> 维护者：[YansClip](https://github.com/YansClip)

---

## 你能用它做什么

| 能力 | 说明 |
|------|------|
| 多账号管理 | 扫码 / 密码 / Cookie 等方式接入闲鱼账号，支持启用禁用、续期与基础风控 |
| 在线聊天 | 查看会话、手动回复买家 |
| 自动回复 | 关键词规则、默认回复，可配合 AI 处理复杂咨询 |
| 卡券与发货 | 卡密库存、自动确认发货、补发货与发货日志 |
| 商品与订单 | 同步商品、配置发货规则，查看与处理订单 |
| 商品发布 | 素材库、单品 / 批量发布、随机地址库、发布日志 |
| 通知 | 飞书、Webhook、企业微信等渠道推送新消息 / 新订单 |
| 数据与日志 | 仪表盘、数据总览、消息日志、风控日志及管理员日志中心 |

个人版**不包含**：用户注册、分销货源、资金流水、广告系统、共享扫码登录、`promotion` 返佣子系统。

---

## 界面菜单结构

侧边栏按一级分类组织，路径与功能保持不变：

```
工作台          → 仪表盘、数据总览
店铺运营        → 账号、商品、订单、卡券
客服中心        → 在线聊天、自动回复、消息过滤、黑名单
商品发布        → 素材库、单品、批量、地址库、发布日志
消息与日志      → 消息日志、风控日志、通知渠道、消息通知
个人            → 个人设置
管理员          → 系统设置、定时任务、日志中心
帮助            → 使用教程、免责声明、关于
```

以下页面**不在菜单中**，需要时可在浏览器地址栏直接打开：

- `/goofish-compass` — 数据罗盘  
- `/goofish-scheduled-crawler` — 定时采集  
- `/item-search` — 商品搜索  

---

## 快速开始

### 环境要求

- Docker 与 Docker Compose  
- Node.js 18+（本地前端热更新）  
- 建议 2 核 CPU / 4GB 内存及以上  

### 1. 克隆仓库

```bash
git clone https://github.com/YansClip/xian-guanjia-personal.git
cd xian-guanjia-personal
```

### 2. 配置学习环境

复制并编辑环境文件（勿提交到 Git）：

```bash
cp .env.study.example .env.study
cp frontend/.env.study.example frontend/.env.study
```

关键变量：

```bash
# .env.study
DEPLOYMENT_MODE=personal
COMPOSE_PROJECT_NAME=xianyu-study

# frontend/.env.study
VITE_DEPLOYMENT_MODE=personal
VITE_DEV_PORT=9100
VITE_BACKEND_PORT=9189
```

### 3. 启动

```bash
bash scripts/start-personal.sh
# 等价于 scripts/start-study.sh
```

浏览器访问：**http://localhost:9100/login**

默认管理员：`admin` / `admin123`（首次登录后请尽快修改密码）

### 4. 停止

```bash
bash scripts/stop-personal.sh
```

---

## 默认端口（个人版学习环境）

| 服务 | 端口 |
|------|------|
| 前端 (Vite) | 9100 |
| Backend-Web | 9189 |
| WebSocket | 9190 |
| Scheduler | 9191 |

与「平台完整版」默认端口（9000 / 8089 等）相互独立，可在同一台机器并存，只要 `.env` 不混用即可。

---

## 部署模式说明

通过环境变量 `DEPLOYMENT_MODE=personal` 启用个人版行为：

- 前端：`VITE_DEPLOYMENT_MODE=personal`  
- 后端：`DEPLOYMENT_MODE=personal`（`docker-compose.study.yml` 已注入）  

效果包括：关闭开放注册、默认关闭登录极验、隐藏分销与商业化菜单、跳过账号数量额度校验等。详见仓库内 `common/core/deployment.py` 与 `frontend/src/config/deployment.ts`。

---

## 技术构成（简述）

- **后端**：FastAPI、SQLAlchemy、MySQL、Redis  
- **实时与任务**：WebSocket 服务、Scheduler 定时任务  
- **自动化**：Playwright（登录、Cookie、发布等）  
- **前端**：React 18、TypeScript、Vite、TailwindCSS  

```
xian-guanjia-personal/
├── backend-web/       # HTTP API
├── websocket/         # 闲鱼连接与消息
├── scheduler/         # 定时任务
├── common/            # 共享模块
├── frontend/          # Web 界面
├── scripts/           # 启动 / 停止脚本
└── docker-compose.study.yml
```

---

## 使用与风险

- 本工具会本地保存账号 Cookie、订单、卡券等数据，请自行做好备份与访问控制。  
- 请遵守闲鱼平台规则及当地法律法规，违规使用后果自负。  
- 个人版设计为**私有部署**，不建议在未加固的情况下直接暴露到公网。  

完整说明见应用内「免责声明」与「使用教程」。

---

## 反馈与贡献

问题与改进建议请通过 [GitHub Issues](https://github.com/YansClip/xian-guanjia-personal/issues) 提交。

---

## 许可证

请查阅仓库中的 LICENSE 文件（如有）。使用第三方开源组件时，亦请遵守各自许可协议。
