#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ -f .study-frontend.pid ]; then
  PID="$(cat .study-frontend.pid)"
  if kill -0 "$PID" 2>/dev/null; then
    kill "$PID" 2>/dev/null || true
    echo "已停止学习前端 (pid=$PID)"
  fi
  rm -f .study-frontend.pid
fi

docker compose -f docker-compose.study.yml --env-file .env.study down
echo "学习环境 Docker 服务已停止"
