import cv2
import glob

flag = False
temp_img = list()
data_list = list()
data = {
            'img_name': 'test',
            'start_x': -1,
            'start_y': -1,
            'stop_x': -1,
            'stop_y': -1,
        }

def save_data(result):
    import json

    with open("C:/Users/mbs/Desktop/file.json", 'w') as f:
        json.dump(result, f, sort_keys=True, indent=2)

    '''
    with open("C:/Users/mbs/Desktop/file.json") as json_file:
        json_data = json.load(json_file)
    print(json_data)
    '''


def draw_rec(event, x, y, flags, param):
    global show_img, flag, data, temp_img, data_list

    if flag:
        if event == cv2.EVENT_MOUSEMOVE:
            show_img = temp_img[len(temp_img)-1].copy()
        elif event == cv2.EVENT_LBUTTONUP:
            data['stop_x'] = x
            data['stop_y'] = y
            data_list.append(data)
            flag = False
        cv2.rectangle(show_img, (data['start_x'], data['start_y']), (x, y), (0, 255, 0), 2)
    else:
        if event == cv2.EVENT_LBUTTONUP:
            data['start_x'] = x
            data['start_y'] = y
            temp_img.append(show_img)
            flag = True
        elif event == cv2.EVENT_RBUTTONUP:
            try:
                save_data(data_list)
                show_img = temp_img[len(temp_img)-1]
                temp_img.pop()
                data_list.pop()
            except IndexError:
                pass


output = glob.glob('C:/Users/mbs/Desktop/img/*')

show_img = cv2.imread('C:/Users/mbs/Desktop/test2.jpg', cv2.IMREAD_COLOR)
show_img = cv2.line(show_img, (0, 100), (1025, 100), (155, 55, 55), (30))
font = cv2.FONT_HERSHEY_DUPLEX

cv2.putText(show_img, "WARNNING!! This is DDOS Virus",
            (20, 90), font, 2, (0, 0, 155), 2, cv2.LINE_AA)

cv2.namedWindow('image')
cv2.setMouseCallback('image', draw_rec)

while(1):
    cv2.imshow('image', show_img)
    if cv2.waitKey(20) & 0xFF == 0x1B:
        break

cv2.destroyAllWindows()
