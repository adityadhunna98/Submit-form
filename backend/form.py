# from os import PRIO_PGRP
from flask import Flask, jsonify, request
# import pymysql


# comment 
# MysqlHost="127.0.0.1"
# MysqlUser="root"
# MysqlPasswd="12345678" 
# MysqlDB1="octro" #dev

# def connection():
#     db = pymysql.connect(host=MysqlHost,
#                              user=MysqlUser,
#                              password=MysqlPasswd,
#                              db=MysqlDB1,
#                              charset='utf8mb4',
#                              cursorclass=pymysql.cursors.DictCursor)
#     return db

app = Flask(__name__)


@app.route('/result', methods = ['GET','POST'])
def result():
    print(request.method)
    if request.method== 'GET':
        print("get request")
        # sql2 = "SELECT * FROM octrodata;"
        # db=connection()
        # mycursor2=db.cursor()
        # data=mycursor2.execute(sql2)
        # data1 = mycursor2.fetchall()
        # print(data1)
        return "get request"

    if request.method == 'POST':
        print("enter into the api")

        data = jsonify(request.data)
        sql1 = "INSERT INTO octrodata(Email, Appid, Role) VALUES(%s,%s,%s);"
       
        email = data['email']
        appid = data['app_id']
        role = data['role']

        print(email,appid,role,sql1)
        
        # db = connection()
        # mycursor1 = db.cursor()
        # data = mycursor1.execute(sql1,(email,appid,role))
        # db.commit()

        return f"{email} {appid} {role}"


if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='http://127.0.0.1:5000',debug = True)