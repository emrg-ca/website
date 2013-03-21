SHELL := /bin/bash

.PHONY : all
all :

%.pdf : %.odt
	@libreoffice --headless --convert-to pdf $^

%.pdf : %.odp
	@libreoffice --headless --convert-to pdf $^

%.odt : %.doc
	@libreoffice --headless --convert-to odt $^

%.odp : %.ppt
	@libreoffice --headless --convert-to odp $^

%.odt : %.docx
	@libreoffice --headless --convert-to odt $^

%.odp : %.pptx
	@libreoffice --headless --convert-to odp $^

# Word Template from OpenDocument Text Template
#%.dot : %.otd
#	@libreoffice --headless --convert-to dot $^

# Powerpoint Template from OpenDocument Presentation Template
#%.pot : %.otp
#	@libreoffice --headless --convert-to pot $^
