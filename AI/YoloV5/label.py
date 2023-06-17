import numpy as np
from PIL import Image
import os

def labeling(path, img_name):

    im = Image.open(path+'/images/' + img_name)

    pix = np.array(im)
    print("dsadsadasd")
    
    imgWidth, imgHeight = im.size
    #print(imgWidth) 
    #print(imgHeight) 

    temp = np.where(pix==np.array([0, 0, 0]))
    first_row = temp[0][1]
    first_col = temp[0][2]

    #print(pix[imgHeight - first_row -1][first_col])

    qrHeight = (imgHeight - (first_row*2)) +1

    center_y = (qrHeight - first_row) / imgHeight
    center_x = (qrHeight - first_col) / imgWidth

    qrWidth = qrHeight / imgWidth
    qrHeight = qrHeight / imgHeight
    temp = img_name.split('.')[0]

    with open(path+'/labels/'+ temp +'.txt', "w") as f:
        f.write('1 {0} {1} {2} {3}'.format(center_x, center_y, qrWidth, qrHeight))


file_path = 'C:/coding/yolov5/data/archive/train'
file_names = os.listdir(file_path+'/images')


for name in file_names:
    labeling(file_path, name)

os.close