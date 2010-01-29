TOP = .

HOST = emrg.ca
USER = emrghosting
PASS = $(shell cat passwd)

ROOT   ?= emrg.ca
GITDIR ?= $(ROOT)/.git/
DOCDIR ?= $(ROOT)/httpdocs/
DIR    ?= httpdocs

DATE ?= $(shell date +%Y%m%d)
SITE ?= emrg-site-$(DATE).tar.bz2
GIT  ?= emrg-git-$(DATE).tar.bz2

all :

pull :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -ev --ignore-time -x \.git$$'

push :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -Rev --ignore-time -x \.git$$'

site :
	@rm -f $(SITE)
	@pushd .. ; tar cvfj $(SITE) $(DOCDIR) ; popd
	@pushd .. ; mv $(SITE) $(ROOT) ; popd

git :
	@rm -f $(GIT)
	@pushd .. ; tar cvfj $(GIT) $(GITDIR) ; popd
	@pushd .. ; mv $(GIT) $(ROOT) ; popd

.PHONY : all pull push site git