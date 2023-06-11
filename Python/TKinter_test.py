import tkinter as tk

window = tk.Tk()
window.title("이름을 선택 하시오.")
window.geometry("920x640+50+50") # 지오메트리: 너비x높이+x좌표+y좌표
window.resizable(False, False)   # x축, y축 크기 조정 비활성화

text1 = tk.Label(window, text="test shit man?")
text1.pack()

btn1 = tk.Button(window, text="btn1")
btn1.pack()

inputt = tk.Entry(window, width=10)
inputt.pack()

from tkinter import ttk, scrolledtext

com = ttk.Combobox(window, width=20, state='readonly')
com['values'] = ['nako', 'nako', 'nako', 'nako', 'nako']
#com.current(0)
com.pack()

mul = scrolledtext.ScrolledText(window, width=30, height=5, wrap=tk.WORD)
mul.pack()

window.mainloop()