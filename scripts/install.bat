@echo off
setlocal enabledelayedexpansion

echo "[SYSTEM] Running install.bat"
echo "[SYSTEM] Installing python dependencies..."

@REM check if pip is installed
pip --version 2>NUL
IF errorlevel 1 (
  echo "ESC[31m Pip is not installed. Please install pip before running this script. ESC[0m"
  exit 1
)

pip install -r requirements.txt
pip install -r dev-requirements.txt

echo "ESC[32m[SYSTEM] Python dependencies installed ESC[0m"
echo "[SYSTEM] Installing node dependencies..."

cd /d "site"

@REM Check if npm is installed
call npm --version 2>NUL
IF errorlevel 1 (
  echo "ESC[31m[ERROR] npm is not installed. Please install npm before running this script. ESC[0m"
  exit 1
)

@REM Check if node is installed
call node --version 2>NUL
IF errorlevel 1 (
  echo "ESC[31m[ERROR] node is not installed. Please install node before running this script. ESC[0m"
  exit 1
)

@REM check for node_modules folder in static
IF exist "!CD!\static\node_modules" (
  echo "[SYSTEM] Node modules directory installed. Manually checking for required modules... ."
  echo "[SYSTEM] Checking for tailwindcss..."

  IF exist "!CD!\static\node_modules\tailwindcss" (
    echo "ESC[32m[SYSTEM] Tailwindcss is installed ESC[0m"
  ) ELSE (
    echo "ESC[31m[SYSTEM] Tailwindcss is not installed. Installing tailwindcss... ESC[0m"
    call npm install tailwindcss --prefix !CD!\static
    echo "ESC[32m[SYSTEM] Tailwindcss installed ESC[0m"
  )

  echo "[SYSTEM] Checking for flowbite..."

  IF exist "!CD!\static\node_modules\flowbite" (
    echo  "ESC[32m[SYSTEM] Flowbite is installed ESC[0m"
  ) ELSE (
    echo "ESC[31m[SYSTEM] Flowbite is not installed. Installing flowbite... ESC[0m"
    call npm install flowbite --prefix !CD!\static
    echo "ESC[32m[SYSTEM] Flowbite installed ESC[0m"
  )

  if exist "!CD!\static\package.json" (
    @REM cleans up installation by removing unecesssary package.json file
    del /f /q "!CD!\static\package.json"
  )

  echo "ESC[32m[SYSTEM] Node dependencies installed, installation complete ESC[0m"
  exit 0
) ELSE (
  call npm install
  echo "ESC[32m[SYSTEM] Node dependencies installed ESC[0m"
)

@REM move node_modules to static folder
echo "[SYSTEM] Moving node_modules to static folder"

move "!CD!\node_modules" "!CD!\static"
echo "ESC[32m[SYSTEM] Installation complete ESC[0m"
