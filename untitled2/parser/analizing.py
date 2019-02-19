f = open('/Users/ODutko/PycharmProjects/untitled2/parser/parsed/cbs_ready_blue.txt')

linenumber = 0
for line in f:
    linenumber += 1
    items = line.split('~')
    if len(items) is not 89:
        print linenumber
f.close()
