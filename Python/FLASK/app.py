from flask import Flask, request, jsonify, render_template, redirect, url_for
from model import compare_info, sign_info
app = Flask(__name__)
flag = True

@app.route('/')
def home():
   return render_template('main.html')

@app.route('/sign')
def sign():
   global flag
   if flag:
      return render_template('signIn.html')
   else:
      #나중에 수정혀
      flag = True
      return render_template('temp.html')

@app.route('/signUp')
def sign_up():
   return render_template('signUp.html')

@app.route('/signIn', methods=['POST'])
def sign_in():
   global flag
   rc_id = request.form['ID']
   rc_pw = request.form['PW']
   print(request)
   print("received id : "+ rc_id)
   print("received pw : "+ rc_pw)
   result = compare_info(rc_id, rc_pw)
   print(result)
   if result == 'success':
      flag = False
      return jsonify({'result':'success', 'data': render_template('main.html')})
   else:
      return jsonify({'result':result, 'msg': '정보가 틀렸음'}) 

@app.route('/createInfo', methods=['POST'])
def create_info():
   rc_id = request.form['ID']
   rc_pw = request.form['PW']
   print(request)
   print("received id : "+ rc_id)
   print("received pw : "+ rc_pw)
   result = compare_info(rc_id, rc_pw)

   if result == 'success':
      return jsonify({'result':'error', 'msg': '가입된 정보가 있음'})
   else:
      sign_info(rc_id, rc_pw)
      return jsonify({'result':'success', 'data': render_template('sign.html')})

@app.route('/ranking', methods=['GET'])
def show_movieRank():
   from soup import get_movieInfo

   movies = get_movieInfo()
   return render_template("movieInfo.html", result = movies, enumerate=enumerate)

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)