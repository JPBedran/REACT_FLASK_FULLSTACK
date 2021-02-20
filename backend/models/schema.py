from marshmallow import Schema, fields

class CustomerSchema(Schema):
  id = fields.Int(required=True)
  name = fields.Str()
  email = fields.Str()
  password = fields.Str()