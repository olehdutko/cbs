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
file ='/Users/ODutko/PycharmProjects/untitled2/parser/cbs.tsv'


def split_to_fields(line, is_header=False):
    # fields = line.split("¤")
    fields = line.split('	')
    for field in fields:
        # print field
        if is_header:
            split_field_to_subfields(field.strip('$'), is_header=True)
        else:
            split_field_to_subfields(field.strip('$'))


# тут вже обстріпане поле field
def split_field_to_subfields(field, is_header=False):
    fields= field.split('$');
    value = ''

    if len(fields) == 1:
        subfields = field.split("¦")
        if is_header:
            number_of_subfields = len(subfields)
            subfields_in_fields.append(number_of_subfields)

    else:
        for field in fields:
            subfields = field.split("¦")



f = open(file)
for line in iter(f):
    line_number += 1
    if line_number ==1:
        split_to_fields(line, is_header=True)
        pass
    else:
        split_to_fields(line)
f.close()


