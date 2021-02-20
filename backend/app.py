from flask import Flask, json, request
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
import logging

from .resources.users import UserRegistration, User


logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

CORS(app)
api = Api(app)
flask_bcrypt = Bcrypt(app)
jwt = JWTManager(app)

api.add_resource(UserRegistration, '/register')
api.add_resource(User, '/finduser')


if __name__=='__main__':
  app.run(debug=True)

