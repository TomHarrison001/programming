import tkinter as tk


def increase():
    count.set(count.get() + 1)


def press(letter):
    display.set(letter)


def show():
    print("starter", v1.get())
    print("main", v2.get())


def sub():
    print(v3.get())


def test():
    print(v4.get())


root = tk.Tk()
root.title("Title")
root.geometry("280x500")
root.configure(background="light blue")

f1 = tk.Frame(root)
f1.grid(row=0, column=0)

count = tk.IntVar()
count.set(0)
l1 = tk.Label(f1, textvariable=count, font="helvetica 20")
l1.grid(row=0, column=0, columnspan=2, sticky="e")
b1 = tk.Button(f1, text="press me", command=increase)
b1.grid(row=1, column=0)

display = tk.StringVar()
display.set("A")
l2 = tk.Label(root, textvariable=display, font="helvetica 32")
l2.grid(row=2, column=0)
b2 = tk.Button(root, text="A", command=lambda x="A": press(x))
b2.grid(row=3, column=0)
b3 = tk.Button(root, text="B", command=lambda x="B": press(x))
b3.grid(row=3, column=1)

v1 = tk.IntVar()
v2 = tk.IntVar()
cb1 = tk.Checkbutton(root, text="starter", variable=v1)
cb1.grid(row=4, column=0)
cb2 = tk.Checkbutton(root, text="main", variable=v2)
cb2.grid(row=5, column=0)
b4 = tk.Button(root, text="submit", command=show)
b4.grid(row=6, column=0)

v3 = tk.IntVar()
r1 = tk.Radiobutton(root, text="one", variable=v3, value=1)
r1.grid(row=7, column=0)
r2 = tk.Radiobutton(root, text="two", variable=v3, value=2)
r2.grid(row=8, column=0)
b5 = tk.Button(root, text="submit", command=sub)
b5.grid(row=9, column=0)

v4 = tk.StringVar()
v4.set("one")
m1 = tk.OptionMenu(root, v4, "one", "two", "three")
b1 = tk.Button(root, text="submit", command=test)
m1.grid(row=10)
b1.grid(row=11)

root.mainloop()
