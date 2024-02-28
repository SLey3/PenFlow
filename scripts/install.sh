#!/bin/bash
echo "[SYSTEM] Running install.sh"

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    echo "[SYSTEM] Running on Windows"
    move ./node_modules ./static
else
    echo "[SYSTEM] Running on a non-Windows system"
    mv ./node_modules ./static
fi
