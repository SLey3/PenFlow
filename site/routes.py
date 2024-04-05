# Imports
from flask import (
    Blueprint, render_template, request, jsonify,
    url_for
)
from config import getconfig
from itsdangerous import URLSafeTimedSerializer
from itsdangerous.exc import SignatureExpired


# Routes Blueprint and initializations
routes = Blueprint("routes", __name__, template_folder='templates', static_folder='static')
api = Blueprint("api", __name__, template_folder='templates', static_folder='static', url_prefix='/api')
routes.register_blueprint(api)

# Blueprint records
@routes.record
def serializer(setup_state):
    app = setup_state.app
    with app.app_context():
        api.serializer = URLSafeTimedSerializer(getconfig("SECRET_KEY"), getconfig("SERIALIZER_SALT"))

# Public Routes
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


@routes.route("/editor/edit", methods=['GET', 'POST'])
def edit_editor():
    # more should/will be added here as project progresses
    return render_template("editor/editor.html", new=False)

@routes.route("/editor/new", methods=['GET', 'POST'])
def new_editor():
    # more should/will be added here as project progresses
    return render_template("editor/editor.html", new=True)

# api routes
@api.route("/forgotpwd", methods=['POST'])
def forgotpwd():

    data = request.get_json()
    res_type = "success"
    base_url = f"{url_for('routes.api.accountapimanager', type='forgot')}&s="
    
    # validation goes here
    email = data["email"]
    
    # generate token    
    try:
        token = api.serializer.dumps(email)
    except Exception:
        res_type = "error"
        token = None
        
    url = base_url + str(token)
    
    res = {
        "type" : res_type,
        "forgot_url": url
        }
    
    return jsonify(res)


@api.route("/accmanager", methods=['GET', 'POST'])
def accountapimanager():
    if request.args:
        args = request.args.to_dict()
        type = args.get("type") # checks for the required type parameter
        
        if type == 'forgot':
            token = args["s"]
            print("Serialized email: ", token)
            
            try:
                email = api.serializer.loads(token, max_age=60*3) # 60 * 3 will give 3 minutes in durations of seconds
            except SignatureExpired:
                # Will set a error message page here
                return render_template("accmanager/forgot/expired.html")
            print("Deserialized email: ", email)
            return "", 200
    return "", 403 # Access Forbidden


@api.route("/drawobj/<type>", methods=['POST'])
def drawobj(type):
    if request.args:
        return "", 200
    return "", 403