db.auth('administrator', 'administrator')
db = db.getSiblingDB('admin')

db.createUser({
  user: "money",
  pwd: "money",
  roles: ["root"]
})
