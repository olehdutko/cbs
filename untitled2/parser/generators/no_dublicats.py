# -*- coding: utf-8 -*-

id = '621'
f = open('/Users/ODutko/PycharmProjects/untitled2/parser/generators/export/'+id+'.txt')
no_dublicats = open('/Users/ODutko/PycharmProjects/untitled2/parser/generators/export/'+id+'_no_dublicats.txt', 'w')
values = []
for line in f:
    values.append(line.replace("\"", "\'").replace("†",",").replace("�","р"))
f.close()

set = list(set(values))
no_dublicats.write("CREATE TABLE `"+id+"` (`id` int(4) NOT NULL,`field` varchar(100) COLLATE utf8_unicode_ci NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n")
no_dublicats.write('\n')
no_dublicats.write("ALTER TABLE `"+id+"`\n")
no_dublicats.write("ADD PRIMARY KEY (`id`);\n")
no_dublicats.write("ALTER TABLE `"+id+"`\n")
no_dublicats.write("  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;\n")


for value in set:
    no_dublicats.write('INSERT INTO `'+id+'` (`field`) VALUES("'+value.strip('\n')+'");\n')






no_dublicats.close()