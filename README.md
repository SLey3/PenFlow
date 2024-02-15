## Requirements
- Python 3.11.1+
- Node v20.11.0

## Installations
Both steps must be completed:
1) To Install Python Requirements:
```
pip install -r requirements.txt
```

2) To Install Node Requirements:
```
cd site
npm install
```
3) Contact me (sley@willamette.edu) for the .env file especially if your going to be on the website for testing of features (.env file is important for the site during development mode)
4) Once .env file is recieved:
   1) place it in the **site** folder
5) To run website in development mode (meaning outside of the production url):
   1) On the terminal change directory to the **site** folder:
   2) run the following command to "build" the sites styling sheet:
   ```
   npx tailwindcss -i ./static/src/input.css -o ./static/dist/css/output.css
   ```
   3) _**NOTE:**_ Word of advice: If your going to need to do other commands within the terminal for your on goals, run the following command on a **seperate** terminal:
   ```
   # Comment: this is to run the website as is on development mode
   python -m app.py
   ```