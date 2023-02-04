# import PyPDF2
from collections import Counter

# myFile = open('Ramayana.pdf','rb')  #read binary
# pdfReader = PyPDF2.PdfFileReader(myFile)
# # PyPDF2.PdfFileReader('Ramayana.pdf')
# numOfPages= pdfReader.numPages

# page1 = pdfReader.getPage(1)
# print(page1.extract_text())

# output_file = open("Ankit.txt", "w")

# for i in range(numOfPages):
#     page = pdfReader.getPage(i)
#     text = page.extractText()
#     output_file.write(text)
# output_file.close()
# myFile.close()

word = "real"
count = 0
with open("WordFrequency.txt", 'r') as f:
	for line in f:
		words = line.split()
		for i in words:
			if(i==word):
				count=count+1
print("Occurrences of the word", word, ":", count)
