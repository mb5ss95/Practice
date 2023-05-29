from pymongo import MongoClient 

def compare_info(id, pw):
    client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
    db = client.user                      # 'dbsparta'라는 이름의 db를 만듭니다.

    # MongoDB에서 데이터 모두 보기
    all_users = list(db.users.find({}))

    for user in all_users:      # 반복문을 돌며 모든 결과값을 보기
        if(user['id'] == id and user['pw'] == pw):
            return 'success'
 
    return 'error'

def sign_info(id, pw):
    # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
    client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
    db = client.user                      # 'dbsparta'라는 이름의 db를 만듭니다.

    # MongoDB에 insert 하기

    # 'users'라는 collection에 {'name':'bobby','age':21}를 넣습니다.
    db.users.insert_one({'id':id,'pw':pw})

    return 'success'