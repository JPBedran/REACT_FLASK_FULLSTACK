
from flask_restful import Resource, reqparse, marshal
from flask_jwt_extended import (
  create_access_token,
  create_refresh_token,
  # jwt_refresh_token_required == @jwt_required(refresh=True)
  jwt_required,
  get_jwt_identity,
  # get_raw_jwt == get_jwt
  get_jwt,
)
from flask_bcrypt import check_password_hash, generate_password_hash
from ..models.user import UserModel
import logging

_user_parser = reqparse.RequestParser()
_user_parser.add_argument(
  "username", type=str, required=True, help="This field cannot be blank."
)
_user_parser.add_argument(
  "password", type=str, required=True, help="This field cannot be blank."
)

class UserAuth(Resource):
  def get(self):
    user = _user_parser.parse_args()
    find = UserModel().find({"username":user.username})
    check = check_password_hash(find['password'],user.password)
    if find and check:
      return True
    return False

class UserRegistration(Resource):

  def post(self):
    user = _user_parser.parse_args()
    user["password"] = generate_password_hash(user["password"], 12)
    new_user = UserModel().create(user)
    return str(new_user['_id'])

class User(Resource):

  def get(self):
    user = _user_parser.parse_args()
    find = UserModel().find({"username":user.username})
    check = check_password_hash(find['password'],user.password)
    return check

