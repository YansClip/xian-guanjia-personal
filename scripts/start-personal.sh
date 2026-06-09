#!/usr/bin/env bash
# 自用版启动脚本（与学习/研究环境等价，DEPLOYMENT_MODE=personal）
exec "$(dirname "$0")/start-study.sh" "$@"
