from flask import Flask
from flask import render_template
from livereload import Server, shell

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.debug = True
    server = Server(app.wsgi_app)
    server.watch('templates/*')
    server.watch('static/*')
    server.serve()
