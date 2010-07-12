TOP = .
SHELL=/bin/bash

HOST = emrg.ca
USER = emrghosting
PASS = $(shell cat passwd)

ROOT   ?= emrg.ca
DIR    ?= httpdocs
GITDIR ?= $(ROOT)/.git/
DOCDIR ?= $(ROOT)/$(DIR)/

BASE ?= emrg
DATE ?= $(shell date +%Y%m%d)
GIT  ?= $(BASE)-git-$(DATE).tar.bz2
SITE ?= $(BASE)-site-$(DATE).tar.bz2

all :

pull :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -ev --ignore-time -x \.git$$'

push :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -Rev --ignore-time -x \.git$$'

git :
	@rm -f $(GIT)
	@pushd .. ; tar cvfj $(GIT) $(GITDIR) ; popd
	@pushd .. ; mv $(GIT) $(ROOT) ; popd

site :
	@rm -f $(SITE)
	@pushd .. ; tar cvfj $(SITE) $(DOCDIR) ; popd
	@pushd .. ; mv $(SITE) $(ROOT) ; popd

.PHONY : all pull push git site
