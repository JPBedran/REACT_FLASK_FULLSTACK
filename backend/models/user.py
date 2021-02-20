from pymongo import MongoClient
import os


class UserModel(object):
  def __init__(self):
    db_url = os.environ.get('MONGO_URL')
    self.db = MongoClient(db_url)

  def create(self, data):
    return self.db.shop.users.insert_one(data)
  
  def find(self, data):
    return self.db.shop.users.find_one(data)
