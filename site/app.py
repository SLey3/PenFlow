# Imports
from flask import Flask, render_template_string
import os

# -------
app = Flask(__name__)


print(os.environ.get("FLASK_APP"))

@app.route("/")
def test():
    return render_template_string("<b>hallo</b>")


if __name__ == '__main__':
    app.run()