SHELL := /bin/bash

.PHONY : all
all :

%.odt : %.doc
	@libreoffice --convert-to odt $^
.PRECIOUS : %.odt

%.odp : %.ppt
	@libreoffice --convert-to odp $^
.PRECIOUS : %.odp

%.pdf : %.odt
	@libreoffice --convert-to pdf $^

%.pdf : %.odp
	@libreoffice --convert-to pdf $^

%.doc : %.odt
	@libreoffice --convert-to doc $^

%.ppt : %.odp
	@libreoffice --convert-to ppt $^

# Word Template from OpenDocument Text Template
#%.dot : %.otd
#	@libreoffice --convert-to dot $^

# Powerpoint Template from OpenDocument Presentation Template
#%.pot : %.otp
#	@libreoffice --convert-to pot $^

.PHONY : clean
clean :
	@rm -f __db.
