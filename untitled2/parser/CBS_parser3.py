# -*- coding: utf-8 -*-


# ¤ - роздільник полів
# ¦ - роздільник підполів
# † - роздільник копій цілого поля
# ‹ - поле з екземплярами
# ‡ - роздільник різних екземплярів
# ¬ - роздільник підполів екземплярів

# '†' потрібно замінити на '$'

subfields_in_fields = []
line_number = 0
file ='/Users/ODutko/PycharmProjects/untitled2/parser/no_blue.tsv'
string = '2	$¦¦¦40.00¦грн$¦¦¦¦	$	$	$¦Симфония тьми. Рай обреченных¦¦Текст¦роман, повесть¦Ч. Абдулаев¦$¦¦¦¦¦¦	$¦¦¦¦	$¦Грампус Эйт¦¦¦¦Харьков¦¦¦¦¦¦1996¦¦¦¦¦$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$416¦с¦¦¦¦¦¦¦¦¦¦¦$¦¦¦¦¦¦¦¦¦¦¦¦	$¦¦Перехват¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$10$	$¦¦¦¦¦¦¦¦¦¦¦¦¦	$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$84(4Рос)¦¦¦¦¦¦¦¦¦$¦¦¦¦¦¦¦¦¦	$¦	$¦Абдуллаев¦Ч. А.¦Чингиз Акифович¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$a¦05¦¦¦¦¦¦¦¦¦$¦¦¦¦¦¦¦¦¦¦	$84(4Рос)/А13-315342$	$КТ¦20080311¦МЛБ$ПК¦20111107¦МТС$ПК¦20120301¦МТС$ПК¦20120515¦МТС$ПК¦20120515¦МЛБ$ПК¦20130212¦МЛБ$КТ¦20150417¦MLB$КТ¦20150508¦MTS$КТ¦20151005¦MTS$КТ¦20161122¦mts$¦¦	$А13$	$	$¦¦¦¦¦¦¦¦¦	$PAZK$	$¦¦¦¦$¦¦¦¦	$¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦	$17.82.31$'

positions = {0: "0",
1: "3,4",
2: "0",
3: "0",
4: "1,3,4",
5: "0",
6: "1,5,11",
7: "0,1,2,8,9",
8: "2",
9: "0,4,6,9,24",
10: "0",
11: "1,4,9",
12: "2,4",
13: "0",
14: "1",
15: "1,2,3",
16: "1,2",
17: "1,6,11",
18: "0,1,2",
19: "0",
20: "0,1,2",
21: "0",
22: "0",
23: "0,1,2",
24: "0",
25: "1,2",
26: "0,1,7,8,9",
27: "0"}


def split_to_fields(line, is_header=False):
    # fields = line.split("¤")
    fields = line.split('	')
    fieldN=0
    mystring = []
    for field in fields:
        split_field_to_subfields(field.strip('$'), fieldN, mystring)
        fieldN += 1
    # print mystring

    for item in mystring:
        print item


# тут вже обстріпане поле field
def split_field_to_subfields(field, fieldN, mystring):

    my_positions = positions[fieldN].split(',')
    for my_position in my_positions:
        # if fieldN == 6:
        value1 = ''

        fields = field.split('$');
        if len(fields) == 1:
            subfields = field.split("¦")
            value1 = subfields[int(my_position)]
        else:
            for inner_field in fields:
                subfields = inner_field.split("¦")
                value1 = value1 + subfields[int(my_position)] + '|'
        mystring.append(repr(value1))

    # if fieldN == 6:


split_to_fields(string)
