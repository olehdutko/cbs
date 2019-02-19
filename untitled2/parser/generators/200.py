# -*- coding: utf-8 -*-
from parser.settings import positions, exclude_list, separator


def write(string):
    file_cbs.write(string)

def transform(string):
    mystrings = []
    fields = string.split('	')
    filestring = ''

    i=4
    field = fields[i].strip('†')
    parts = field.split('¦')
    if not parts[3] == '':
        write(parts[3].strip('†') + '\n')
        write(parts[4].strip('†') + '\n')


f = open('/Users/ODutko/PycharmProjects/untitled2/parser/blue.tsv')
file_cbs = open('export/200.txt', 'w')

for line in f:
    transform(line)
f.close()
file_cbs.close()



