# -*- coding: utf-8 -*-
from parser.settings import exclude_list, separator, positions_blue

positions = positions_blue
fields = []


def write(string):
    file_cbs.write(string)





f=open('/Users/ODutko/PycharmProjects/untitled2/parser/parsed/heder copy.txt')
lines=f.readlines()
f = open('/Users/ODutko/PycharmProjects/untitled2/parser/sources/db_columns.txt')
file_cbs = open('editors.txt', 'w')

header_number=0
# for field in f:
#     myf = field.strip('\n')
#     file_cbs.write('{')
#     file_cbs.write('id: "{0}",\n'.format(myf.strip()))
#     file_cbs.write('xtype: "textfield",\n')
#     file_cbs.write('width: 500,\n')
#     file_cbs.write('fieldLabel: "{0}",\n'.format(lines[header_number].strip('~')))
#     file_cbs.write('labelWidth: 150\n')
#     file_cbs.write('},')
#     file_cbs.write('\n')
#     header_number += 1
#
# f.close()

for field in f:
    myf = field.strip('\n')
    fields.append(myf)
    file_cbs.write('var {0} = Ext.create(\'Ext.form.TextField\', {1} \n'.format(myf.strip(), "{"))
    file_cbs.write('    id: "{0}",\n'.format(myf.strip()))
    file_cbs.write('    name: "{0}",\n'.format(myf.strip()))
    file_cbs.write('    width: 500,\n')
    file_cbs.write('    fieldLabel: "{0}",\n'.format(lines[header_number].strip('~').strip('\n').strip('\r')))
    file_cbs.write('    labelWidth: 150\n')
    file_cbs.write('});')
    file_cbs.write('\n')
    header_number += 1
f.close()
file_cbs.write("************************************************\n")

for field in fields:
        str = 'str_{0} = Ext.getCmp("{0}").getValue();'.format(field.strip())
        file_cbs.write(str+'\n')

file_cbs.write("************************************************\n")

header_number = 0
for field in fields:
        file_cbs.write(field.strip()+', ')
        header_number += 1
        if header_number > 10:
            file_cbs.write("\n")
            header_number = 0

file_cbs.close()



