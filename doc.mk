SHELL := /bin/bash

.PHONY : all
all :

%.pdf : %.odt
	@libreoffice --headless --convert-to pdf $^

%.pdf : %.odp
	@libreoffice --headless --convert-to pdf $^

.PRECIOUS : %.odt
%.odt : %.doc
	@libreoffice --headless --convert-to odt $^

%.odt : %.docx
	@libreoffice --headless --convert-to odt $^

.PRECIOUS : %.odp
%.odp : %.ppt
	@libreoffice --headless --convert-to odp $^

%.odp : %.pptx
	@libreoffice --headless --convert-to odp $^

# Word Template from OpenDocument Text Template
#%.dot : %.otd
#	@libreoffice --headless --convert-to dot $^

# Powerpoint Template from OpenDocument Presentation Template
#%.pot : %.otp
#	@libreoffice --headless --convert-to pot $^
