욜로 https://ropiens.tistory.com/44 <br />
스펙 https://lv99.tistory.com/69 <br />
용어 https://ctkim.tistory.com/79 <br />
안드로이드 https://junyoung-jamong.github.io/machine/learning/2019/01/25/Android%EC%97%90%EC%84%9C-%EB%82%B4-YOLO%EB%AA%A8%EB%8D%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html <br />
다크넷 http://ngmsoftware.com/bbs/board.php?bo_table=study&wr_id=34&sca=%EB%94%A5%EB%9F%AC%EB%8B%9D <br />
JSON EDITOR https://jsoneditoronline.org/#right=local.sogeya  <br />
label https://supervise.ly/ <br />
python https://www.delftstack.com/ko/howto/python/ <br />
AI https://deview.kr/data/deview/2019/presentation/[115]%EC%96%B4%EB%94%94%EA%B9%8C%EC%A7%80+%EA%B9%8E%EC%95%84%EB%B4%A4%EB%8B%88_%EB%AA%A8%EB%B0%94%EC%9D%BC+%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC+%EC%9C%84%ED%95%9C+%EA%B0%80%EB%B2%BC%EC%9A%B4+%EC%9D%B4%EB%AF%B8%EC%A7%80+%EC%9D%B8%EC%8B%9D_%EA%B2%80%EC%B6%9C+%EB%94%A5%EB%9F%AC%EB%8B%9D+%EB%AA%A8%EB%8D%B8.pdf
파이토치 https://pytorch.org/get-started/locally/

<br />

# Happy_moon_year

- 1만개의 QR코드 이미지를 yolo v5로 학습시켜 QR코드 인식을 해보자.
- 학습되어 나오는 .pb파일을 안드로이드에 심어서 카메라로 QR코드 인식하게 만들거임.
<br />


### 1. 컴퓨터 세팅하기
- yolo v5 다운 받고, cuda 세팅을 한다.
- https://pytorch.org/get-started/locally/ 에서 알맞은 파이토치를 설치한다.

### 2. QR코드 이미지 1만개 다운받기
- https://www.kaggle.com/ 에서 이미지를 받아온다.
- 6 : 2 : 2로 train, test, validation로 분리한다.
- rename.py로 파일 이름을 변경한다. (ex. train1.jpg, train2.py...)

### 3. 이미지 1만개 라벨링하기
- 매우 귀찮고, 힘든 일에 봉착했음. 물론 나는 라벨링 안 할거임. 언제 다해.. 
- 이론상이지만 QR코드는 검정색과 흰색으로 이루어져있음. 따라서 파이썬 코드를 짜고, QR이미지의 픽셀 어레이를 불러와 bounding box를 떠볼 생각임.
- 아니면 그냥 해상도 그대도 라벨링해도 되지 않을까 생각이 듬.
- QR코드는 흰검으로만 이루어져 있어 학습이 왠만하면 잘 될 것 같아서 yolov5s 모델로 해보기로 했다.

#### 3-1 이미지 라벨링 파이썬 코드 짜기
- yolo v5 데이터 포맷은 (class_id center_x center_y width height)로 이루어져 있다. 
- https://stackoverflow.com/questions/69729085/how-can-i-convert-dataset-annaotations-to-fixedyolov5-format-without-hand-enco 에서 보면 이미지의 전체 해상도를 1, 1로 잡고, center_x center_y width height 값을 비로 잡은 것 같다. 이를 구현하려면 연산이 필요 할 것 같다.
- 픽셀 어레이에서 첫 번째로 RGB가 검정(0, 0, 0)일 때의 xy 값을 구하고 전체 해상도와 계산하여 QR코드 정사각형의 가로세로 길이와 중앙 xy값을 찾음.
- label.py로 1만개의 이미지 연산을 통해 라벨링을 완료하였다.
- combine.py로 이미지 경로를 텍스트로 만들었다.

### 4. 데이터 학습하기
- python train.py --data qr.yaml --cfg yolov5s.yaml --batch-size 4 로 데이터 학습 시작 컴퓨터 스펙이 조금 딸려서 배치 사이즈를 4로 함. 에폭은 300
- 17시간 정도 끝에 weights를 얻었다.

### 5. 데이터 확인하기
![test16](https://user-images.githubusercontent.com/60500325/148716836-3a7dd998-eeca-4bac-8aa1-b1a6c46185ec.jpg)
<br />
- python detect.py --source C:/coding/QR/images/test --weights C:/coding/yolov5/runs/train/exp20/weights/best.pt --conf 0.5 로 QR코드 인식을 해보자.
- 와 잘 된건지 안된건지 잘 모르겠다. 인식은 정말 잘 되지만 우려되는 것은 인식 범위를 qr코드의 전체가 아닌 오른쪽 아래로 잡는다 것이다.. 이것만으로 스캔이 잘 될지는 의문임.. 추후 확인이 필요할듯
- 왠지 다시 학습해야 될 것 같은 느낌이 스멀스멀 듬.. 컴퓨터에게 휴식을 주고 난 후에 진행해야 할듯

### 6. 데이터 다시 학습하기
- python train.py --data qr.yaml --cfg yolov5s.yaml --batch-size 4 --img 410 --epochs 50 으로 에폭과 이미지 사이즈를 변경하여 학습 시켜보자

#### 6-1 QR 부분만 라벨링하기
- batch 4, epochs 300 size 640 △
- batch 4, epochs 50 size 640 △
- batch 4, epochs 20 size 410 △
- batch 4, epochs 20 size 210 △
- 여전히 오른쪽 아래가 인식됨. 다음은 yolo의 다른 모델로 학습해야겠음.
- 에폭 수는 20 이상 되면 loss가 거의 비슷한것 같아서 다음은 계속 20 에폭으로 학습 시켜보려고함.

#### 6-2 yolov5 다른 모델 사용하기
- python train.py --data qr.yaml --cfg yolov5m.yaml --batch-size 4 --img 410 --epochs 20
- batch 4, epochs 20 size 410 △
- 아 역시 원하는 결과를 얻을 수가 없당. 다음은 이미지 전체를 라벨링해서 학습시켜야겠음.
- 문득 라벨링이 잘못되었나 생각이 듬. 한번 수정해볼 필요가 있음

#### 6-3 라벨링 다시 하기
![test20](https://user-images.githubusercontent.com/60500325/149289387-8968c624-4c88-496b-a389-fc46b0d4c1dc.jpg)
<br />
- batch 4, epochs 20 size 410 ○
- 오 6번만의 시도에서 완벽하게 원하는 결과를 얻었다!!!!

### 7. 안드로이드 프로그래밍하기
- MVVM 스타일로 코딩해보려고 한다. 했지만...못했음..ㅎ

<br />

<br />
