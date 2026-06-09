"""部署模式：区分平台版与自用版。"""
from __future__ import annotations

import os

PERSONAL_MODE = "personal"


def get_deployment_mode() -> str:
    return (os.getenv("DEPLOYMENT_MODE") or "platform").strip().lower()


def is_personal_edition() -> bool:
    return get_deployment_mode() == PERSONAL_MODE
