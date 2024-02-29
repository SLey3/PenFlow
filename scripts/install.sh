#!/bin/bash
echo "[SYSTEM] Running install.sh"

# Install the dependencies
echo "[SYSTEM] Installing python dependencies..."


# check if pip is installed
if ! command -v pip &> /dev/null; then
    echo -e "\033[31m][ERROR] pip is not installed. Please install pip before running this script.\033[0m"
    exit 1
fi

pip install -r requirements.txt
pip install -r dev-requirements.txt


echo -e "\033[32m[SYSTEM] Python dependencies installed\033[0m"

echo "[SYSTEM] Installing node dependencies..."

cd site

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "\033[31m[ERROR] npm is not installed. Please install npm before running this script.\033[0m"
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo -e "\033[31m[ERROR] node is not installed. Please install node before running this script.\033[0m"
    exit 1
fi

# check for node_modules folder in static
if [ -d "./static/node_modules" ]; then
    echo "[SYSTEM] Node modules directory installed. Manually checking for required modules... ."

    echo "[SYSTEM] Checking for tailwindcss..."

    if [ -d "./static/node_modules/tailwindcss" ]; then
        echo -e "\033[32m[SYSTEM] Tailwindcss is installed\033[0m"
    else
        echo -e "\033[31m[SYSTEM] Tailwindcss is not installed. Installing tailwindcss...\033[0m"
        npm install tailwindcss --prefix ./static
        echo -e "\033[32m[SYSTEM] Tailwindcss installed\033[0m"
    fi

    echo "[SYSTEM] Checking for flowbite..."

    if [ -d "./static/node_modules/flowbite" ]; then
        echo -e "\033[32m[SYSTEM] Flowbite is installed\033[0m"
    else
        echo -e "\033[31m[SYSTEM] Flowbite is not installed. Installing flowbite...\033[0m"
        npm install flowbite --prefix ./static
        echo -e "\033[32m[SYSTEM] Flowbite installed\033[0m"
    fi

    if [ -f "./static/package.json" ]; then
        # cleans up installation by removing unecessary package json file
        rm -f ./static/package.json
    fi
    
    echo -e "\033[32m[SYSTEM] Node dependencies installed, installation complete \033[0m"
    exit 0
else
    npm install

    echo -e "\033[32m[SYSTEM] Node dependencies installed\033[0m"
fi

# move node_modules to static folder
echo "[SYSTEM] Moving node_modules to static folder"

mv ./node_modules ./static

echo -e "\033[32m[SYSTEM] Installation complete\033[0m"