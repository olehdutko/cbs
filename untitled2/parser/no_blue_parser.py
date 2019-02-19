# -*- coding: utf-8 -*-
from parser.settings import exclude_list, separator, positions_no_blue

positions = positions_no_blue


def write(string):
    file_cbs.write(string)


def transform(string):
    mystrings = []
    fields = string.split('	')
    filestring = ''

    for i in range(0, len(positions)):
        if i not in exclude_list:
            items = positions[i].split(',')
            for item in items:
                res_string=''
                field = fields[i].strip('†')
                if len(field.split('†')) > 1:
                    parts = field.split('†')
                    for part in parts:
                        subfields = part.split('¦')
                        if len(subfields[int(item)])>0:
                            r_string = res_string+subfields[int(item)].strip('†')+'_'
                            res_string = r_string

                else:
                    subfields = field.split('¦')
                    res_string = subfields[int(item)].strip('†')
                mystrings.append(res_string.strip('_'))

        else:
            mystrings.append(fields[i].strip('†'))

    for mystring in mystrings:
        filestring = filestring + mystring + separator
    # print filestring.strip(separator)
    write(filestring)



f = open('/Users/ODutko/PycharmProjects/untitled2/parser/no_blue.tsv')
file_cbs = open('cbs_ready_no_blue.txt', 'w')

for line in f:
    transform(line)
f.close()
file_cbs.close()



