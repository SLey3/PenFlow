## Requirements
- Python 3.11.1+
- Node v20.11.0+

## Installation
1) To install requirements:
   ```
   # For mac
   chmod +x ./scripts/install.sh
   ./scripts/install.sh

   # For windows
   ./scripts/install.bat
   ```
2) Contact me (sley@willamette.edu) for the .env file especially if your going to be on the website for testing of features (.env file is important for the site during development mode)
3) Once .env file is recieved:
   1) place it in the **site** folder
4) To run website in development mode (meaning outside of the production url):
   1) On the terminal change directory to the **site** folder:
   ```
   cd site
   ```
   2) run the following command to "build" the sites styling sheet:
   ```
   npx tailwindcss -i ./static/src/global.css -o ./static/dist/css/source.min.css --minify
   ```
   3) _**NOTE:**_ Word of advice: If your going to need to do other commands within the terminal for your on goals, run the following command on a **seperate** terminal:
   ```
   # Comment: this is to run the website as is on development mode
   python app.py
   ```

### Important Information
Please read thru the [render](https://docs.render.com/) documentation so you could get a better grasp on how to work with it, especially if your going to need to use some of the functionality it provides (e.g. web services, database).

If your not going to need to work with the functionality, it would still be useful to read thru it just for general knowledge.

Otherwise, I strongly recommend reading thru the following:
* [troubleshoot deployments](https://docs.render.com/troubleshooting-deploys)
* [how deployment works](https://docs.render.com/deploys) (**must read**)
