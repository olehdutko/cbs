# -*- coding: utf-8 -*-

from parser.settings import positions, exclude_list, separator

def write(string):
    file_cbs.write(string)

def transform(string):
    mystrings = []
    fields = string.split('	')
    filestring = ''

    i=6
    item=5
    res_string=''
    field = fields[i].strip('†')
    parts = field.split('¦')
    write(parts[5].strip('†') + '\n')

f = open('/Users/ODutko/PycharmProjects/untitled2/parser/blue.tsv')
file_cbs = open('export/210.txt', 'w')


for line in f:
    transform(line)
f.close()
file_cbs.close()



