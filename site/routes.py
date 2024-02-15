# Imports
from flask import Blueprint, render_template


# Routes Blueprint
routes = Blueprint(__name__, "routes", static_folder='static', template_folder='templates')


@routes.route("/", methods=['GET', 'POST'])
def index():
    # more should/will be added here as project progresses
    return render_template("index.html")