# Imports
from flask import Blueprint, render_template


# Routes Blueprint
routes = Blueprint(__name__, "routes", static_folder='static', template_folder='templates')


@routes.route("/", methods=['GET', 'POST'])
def index():
    # more should/will be added here as project progresses
    return render_template("index.html")

@routes.route("/tos", methods=['GET'])
def tos():
    return render_template("terms.html")

@routes.route("/signin", methods=['GET', 'POST'])
def signin():
    # more should/will be added here as project progresses
    return render_template("auth/signin.html")

@routes.route("/register", methods=['GET', 'POST'])
def register():
    # more should/will be added here as project progresses
    return render_template("auth/register.html")