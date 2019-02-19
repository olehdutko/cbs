# -*- coding: utf-8 -*-


def write(string):
    file_cbs.write(string)

def transform(string):
    fields = string.split('	')
    if not fields[2] == '†':
        write(fields[2].strip('†')+'\n')



f = open('./parser/blue.tsv')
file_cbs = open('export/101.txt', 'w')


for line in f:
    transform(line)
f.close()
file_cbs.close()



