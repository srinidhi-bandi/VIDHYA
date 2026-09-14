# Opening a file similar to opening a notebook where we can read or write, opens the file in read mode
file = open("sample.txt","r")
# reads the complete content of the file and stores them in the variable content
content = file.read()
print(content)
file.close()
