"""
Flask routing
"""
from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/resume")
def resume():
    return redirect(url_for('static', filename='files/resume.pdf'))

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
