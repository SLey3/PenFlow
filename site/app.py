# Imports
from flask import Flask
from dotenv import dotenv_values
from routes import routes
import os

# App initialization
app = Flask(__name__, static_folder='static', template_folder='templates')

# App Config initialization
if os.environ.get("TESTING"): # tests whether site is in production or development, os.environ.get("TESTING") -> None = development
    app.config.from_mapping(os.environ)
else:
    app.config.from_mapping(dotenv_values(".env"))
    app.config["TESTING"] = True
    app.config["DEBUG"] = True

# Blueprint registrations
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run()