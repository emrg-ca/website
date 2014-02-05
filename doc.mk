SHELL := /bin/bash

.PHONY : all
all :

.PRECIOUS : %.odt
%.odt : %.doc
	@libreoffice --headless --convert-to odt $^

.PRECIOUS : %.odp
%.odp : %.ppt
	@libreoffice --headless --convert-to odp $^

%.pdf : %.odt
	@libreoffice --headless --convert-to pdf $^

%.pdf : %.odp
	@libreoffice --headless --convert-to pdf $^

#%.doc : %.odt
#	@libreoffice --headless --convert-to doc $^

#%.ppt : %.odp
#	@libreoffice --headless --convert-to ppt $^

# Word Template from OpenDocument Text Template
#%.dot : %.otd
#	@libreoffice --headless --convert-to dot $^

# Powerpoint Template from OpenDocument Presentation Template
#%.pot : %.otp
#	@libreoffice --headless --convert-to pot $^

#.PHONY : clean
#clean :
#	@rm -f __db.
