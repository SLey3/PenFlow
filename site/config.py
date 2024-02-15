# imports
from flask import current_app
import os


# config func
def getconfig(option):
    """
    gets config from either:
    os.environ: If website is in production
    .env: from dotenv_values if website is in development
    """
    value = os.environ.get(option) # there should be a value if in production

    if not value:
        # development
        with current_app.app_context():
            value = current_app.config[option]
    return value

def setconfig(option, val):
    """
    sets the config option with a new value
    """
    if os.environ.get(option):
        # production
        os.environ[option] = val
    else:
        # development
        with current_app.app_context():
            current_app.config[option] = val