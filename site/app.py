# Imports
from flask import Flask
try:
    from dotenv import dotenv_values, load_dotenv
    dotenv_exists = True
except:
    # error only raised if project is in production
    dotenv_exists = False
from routes import routes
import os

# App initialization
app = Flask(__name__, static_folder='static', template_folder='templates')

# App Config initialization
if dotenv_exists:
    load_dotenv(".env")
    app.config.from_mapping(dotenv_values())
    app.config["TESTING"] = True
    app.config["DEBUG"] = True
else:
    app.config.from_mapping(os.environ)

# Blueprint registrations
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run()