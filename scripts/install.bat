@echo off

echo "[SYSTEM] Running install.sh"
echo "[SYSTEM] Installing python dependencies..."
IF ! "command" "-v" "pip" (
  echo "-e" "[31m][ERROR] pip is not installed. Please install pip before running this script.[0m"
  exit "1"
)
pip "install" "-r" "requirements.txt"
pip "install" "-r" "dev-requirements.txt"
echo "-e" "[32m[SYSTEM] Python dependencies installed[0m"
echo "[SYSTEM] Installing node dependencies..."
cd "site"
IF ! "command" "-v" "npm" (
  echo "-e" "[31m[ERROR] npm is not installed. Please install npm before running this script.[0m"
  exit "1"
)
IF ! "command" "-v" "node" (
  echo "-e" "[31m[ERROR] node is not installed. Please install node before running this script.[0m"
  exit "1"
)
IF "-d" "%CD%\static\node_modules" (
  echo "[SYSTEM] Node modules directory installed. Manually checking for required modules... ."
  echo "[SYSTEM] Checking for tailwindcss..."
  IF "-d" "%CD%\static\node_modules\tailwindcss" (
    echo "-e" "[32m[SYSTEM] Tailwindcss is installed[0m"
  ) ELSE (
    echo "-e" "[31m[SYSTEM] Tailwindcss is not installed. Installing tailwindcss...[0m"
    npm "install" "tailwindcss" "--prefix" "%CD%\static"
    echo "-e" "[32m[SYSTEM] Tailwindcss installed[0m"
  )
  echo "[SYSTEM] Checking for flowbite..."
  IF "-d" "%CD%\static\node_modules\flowbite" (
    echo "-e" "[32m[SYSTEM] Flowbite is installed[0m"
  ) ELSE (
    echo "-e" "[31m[SYSTEM] Flowbite is not installed. Installing flowbite...[0m"
    npm "install" "flowbite" "--prefix" "%CD%\static"
    echo "-e" "[32m[SYSTEM] Flowbite installed[0m"
  )
  echo "-e" "[32m[SYSTEM] Node dependencies installed, installation complete [0m"
  exit "0"
) ELSE (
  npm "install"
  echo "-e" "[32m[SYSTEM] Node dependencies installed[0m"
)
echo "[SYSTEM] Moving node_modules to static folder"
echo "[SYSTEM] Running on a non-Windows system"
mv "%CD%\node_modules" "%CD%\static"
echo "-e" "[32m[SYSTEM] Installation complete[0m"