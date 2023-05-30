# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними

import fastapi
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import pymysql
import uvicorn
from fastapi import Form

app = FastAPI()

class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()

    def __connect(self):
        self.connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='SQLServerPassword23',
            database='mydb',
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)


    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/")
async def root():
    return {"message": "Hello, world!"}


@app.get("/api/allusers")
async def get_users(request: Request):
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM user'))


@app.get('/api/user/{id}')
def get_user_by_id(request: Request, id: int):
    db = DataBase()
    result = db.execute(f'SELECT * FROM user WHERE idUSER={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.post('/api/adduser', status_code=201)
async def add_new_user(request: Request, username: str, email: str, password: str):
    with open('UserId.txt', 'r') as file:
        last_id = file.read()
        print(last_id)
        file.close()
    try:
        ID = str(int(last_id)+1)
        Request = 1
        with open('UserId.txt', 'w') as file:
            file.write(str(int(last_id)+1))
            file.close()
    except KeyError:
        raise fastapi.HTTPException(status_code=400)

    db = DataBase()
    db.execute(f"INSERT INTO `user`(idUSER, user_username, user_email, user_password, REQUEST_idREQUEST) "
               f"VALUES ('{ID}','{username}','{email}','{password}',{Request});")
    return {'message': 'New user added!'}


@app.put('/api/updateuser/{id}')
async def update_user(id: int, username: str = Form(None), email: str = Form(None), password: str = Form(None)):
    db = DataBase()
    if not db.execute(f'SELECT * FROM user WHERE idUSER={id}'):
        raise fastapi.HTTPException(status_code=404, detail='User not found')

    if username is None and email is None and password is None:
        raise fastapi.HTTPException(status_code=400, detail='At least one field must be provided')

    update_fields = []
    if username is not None:
        update_fields.append(f'user_username="{username}"')
    if email is not None:
        update_fields.append(f'user_email="{email}"')
    if password is not None:
        update_fields.append(f'user_password="{password}"')

    update_query = ", ".join(update_fields)
    db.execute(f'UPDATE user SET {update_query} WHERE idUSER={id}')
    return {"message": 'Updated!'}



@app.delete('/api/deleteuser/{id}')
def delete_user(request: Request, id: int):
    db = DataBase()
    result = db.execute(f'SELECT * FROM `user` WHERE idUSER={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    db.execute(f'DELETE FROM `user` WHERE idUSER={id}')
    return {'message': f'User with id={id} deleted'}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5049)

