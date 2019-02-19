# -*- coding: utf-8 -*-
# словник зі значеннями key/value

from parser.settings import positions, exclude_list, separator


def write(string):
    file_cbs.write(string)

def transform(string):
    mystrings = []
    fields = string.split('	')
    filestring = ''

    i=10
    field = fields[i].strip('†')
    parts = field.split('¦')
    if not parts[6] == '':
        write(parts[6].strip('†') + '\n')


f = open('/Users/ODutko/PycharmProjects/untitled2/parser/blue.tsv')
file_cbs = open('export/461_g.txt', 'w')

for line in f:
    transform(line)
f.close()
file_cbs.close()



