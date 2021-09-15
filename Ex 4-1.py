from flask_bootstrap import Bootstrap
from flask-moment import Moment
from datetime import datetime
from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

moment = Moment(app)

@app.route('/')
def index():
    return '<h1>Hello World!</h1>'


@app.route('/user/<name>')
def user(name):
    return '<h1>Hello, %s!</h1>' % name


if __name__ == '__main__':
    app.run(debug=True)


    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404


    @app.errorhandler(500)
    def internal_server_error(e):
        return render_template('500.html'), 500

bootstrap = Bootstrap(app)
@app.route('/')
def index():
 return render_template('index.html',
 current_time=datetime.utcnow())