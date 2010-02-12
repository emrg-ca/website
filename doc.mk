all :

%.odt : %.doc
	@unoconv -f odt $^

%.odp : %.ppt
	@unoconv -f odp $^

%.pdf : %.odt
	@unoconv -f pdf $^

%.pdf : %.odp
	@unoconv -f pdf $^

%.doc : %.odt
	@unoconv -f doc $^

%.ppt : %.odp
	@unoconv -f ppt $^

# Word Template from OpenDocument Text Template
#%.dot : %.otd
#	@unoconv -f dot $^

# Powerpoint Template from OpenDocument Presentation Template
%.pot : %.otp
	@unoconv -f pot $^

clean :
	@rm __db.

.PRECIOUS : %.odt %.odp

.PHONY : all clean
