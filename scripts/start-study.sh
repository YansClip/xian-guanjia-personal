#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

DC="docker compose -f docker-compose.study.yml --env-file .env.study"

echo "==> 启动自用版学习环境（DEPLOYMENT_MODE=personal，独立端口，不影响正式部署）"
echo "    正式环境: http://localhost:9000/login"
echo "    自用环境: http://localhost:9100/login"
echo
echo "    保留: 账号/聊天/自动回复/卡券/订单/商品发布/通知/日志/定时任务"
echo "    移除: 分销/多用户注册/充值提现/广告/反馈/共享扫码（Goofish 路由仍可直接访问）"
echo "    未部署: promotion 返佣子系统"
echo

$DC up -d

echo
echo "==> 等待 backend-web 健康检查..."
for i in $(seq 1 60); do
  if curl -fsS "http://127.0.0.1:9189/health" >/dev/null 2>&1; then
    echo "    backend-web 已就绪"
    break
  fi
  if [ "$i" -eq 60 ]; then
    echo "    警告: backend-web 尚未就绪，请稍后手动检查"
  fi
  sleep 2
done

if [ ! -d frontend/node_modules ]; then
  echo
  echo "==> 安装前端依赖..."
  (cd frontend && npm install)
fi

echo
echo "==> 启动学习前端 (Vite 热更新, 端口 9100)..."
(cd frontend && npm run dev:study) &
FRONTEND_PID=$!
echo "$FRONTEND_PID" > .study-frontend.pid

sleep 3
open "http://localhost:9100/login" 2>/dev/null || true

echo
echo "自用版（Personal Edition）学习环境已启动:"
echo "  模式:        DEPLOYMENT_MODE=personal"
echo "  前端:        http://localhost:9100/login"
echo "  Backend-Web: http://localhost:9189"
echo "  WebSocket:   http://localhost:9190"
echo "  Scheduler:   http://localhost:9191"
echo "  默认账号:    admin / admin123"
echo "  隐藏路由示例: /goofish-compass（不进菜单，知道 URL 可访问）"
echo
echo "停止: bash scripts/stop-study.sh  或  bash scripts/stop-personal.sh"
