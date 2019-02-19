# -*- coding: utf-8 -*-
from parser.settings import exclude_list, separator, positions_blue

positions = positions_blue
insert_1 = 'INSERT INTO books (id, 10_A, 10_B, 10_D, 10_C, 101_A, 102_A, 200_A, 200_B, 200_E, 200_F, 200_G, 205_A, 205_B,' \
           ' 210_C, 210_A, 210_X, 210_Y, 210_D, 215_A, 215_1, 215_C, 215_D, 215_3, 225_A, 461_C, 461_2, 461_E, 461_F, ' \
           '461_G, 461_D, 461_H, 461_Z, 461_V, 461_T, 461_I, 461_A, 461_X, 60_A, 600_A, 600_G, 600_B, 600_1, 600_C, ' \
           '600_D, 600_F, 600_R, 606_A, 606_C, 606_O, 606_1, 621_1, 629_B, 700_A, 700_B, 700_G, 700_C, 700_F, 701_A, ' \
           '701_B, 702_4, 702_A, 702_B, 702_C, 900_T, 900_B, 900_C, 900_9, 903_A, 907_C, 907_A, 907_B, 908_A, 912_A, 919_A, ' \
           '919_K, 919_N, 920_A, 923_H, 923_I, 961_Z, 961_U, 961_A, 961_B, 961_G, 964_A)'


def write(string):
    file_cbs.write(string)


def transform(string):
    mystrings = []
    fields = string.split('	')
    filestring = insert_1+' VALUES('
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
            # mystrings.append(fields[i].strip('†'))
            pass
    for mystring in mystrings:
        filestring = filestring + '"{0}",'.format(mystring.strip('\n').strip('\r'))
    write(filestring.strip(',')+');\n')



f = open('/Users/ODutko/PycharmProjects/untitled2/parser/sources/blue.tsv')
file_cbs = open('parsed/inserts_temp.txt', 'w')

for line in f:
    transform(line)
f.close()
file_cbs.close()



