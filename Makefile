SHELL = /bin/bash
TOP   = .

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

.PHONY : all
all :

OPTS ?= --ignore-time

.PHONY : pull
pull :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -ev $(OPTS) -x \.git$$'

.PHONY : push
push :
	@lftp -c 'open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -Rev $(OPTS) -x \.git$$'

.PHONY : git
git :
	@rm -f $(GIT)
	@pushd .. ; tar cvfj $(GIT) $(GITDIR) ; popd
	@pushd .. ; mv $(GIT) $(ROOT) ; popd

.PHONY : site
site :
	@rm -f $(SITE)
	@pushd .. ; tar cvfj $(SITE) $(DOCDIR) ; popd
	@pushd .. ; mv $(SITE) $(ROOT) ; popd
