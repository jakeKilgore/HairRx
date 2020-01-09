from flask import Flask
from flask import render_template
from livereload import Server, shell

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('base.html', title='Home')


if __name__ == '__main__':
    app.debug = True
    app.config['DEBUG'] = True
    server = Server(app.wsgi_app)
    server.watch('templates/*')
    server.watch('static/*')
    server.serve(debug=True)
