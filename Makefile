SHELL = /bin/bash
TOP   = .

HOST = emrg.ca
USER = emrg.ca
PASS = $(shell cat passwd)

ROOT   = emrg.ca
DIR    = public
GITDIR = $(ROOT)/.git/
DOCDIR = $(ROOT)/$(DIR)/

BASE ?= emrg
DATE ?= $(shell date +%Y-%m-%d)
GIT  ?= $(BASE)-git-$(DATE).tar.bz2
SITE ?= $(BASE)-site-$(DATE).tar.bz2

.PHONY: all
all:

# Set OPTS="" to force everything to get reuploaded.
OPTS ?= ""

.PHONY: pull
pull:
	@lftp -c 'set ftp:ssl-allow no ; set ftp:ssl-protect-list no ;\
open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -ev $(OPTS) -x \.git$$'

.PHONY: push
push:
	@lftp -c 'set ftp:ssl-allow no ; set ftp:ssl-protect-list no ;\
open $(HOST) ; user $(USER) $(PASS) ; cd $(DIR) ; lcd $(DIR) ;\
mirror -Rev $(OPTS) -x \.git$$'

.PHONY: git
git:
	@rm -f $(GIT)
	@pushd .. ; tar cvfj $(GIT) $(GITDIR) ; popd
	@pushd .. ; mv $(GIT) $(ROOT) ; popd

.PHONY: site
site:
	@rm -f $(SITE)
	@pushd .. ; tar cvfj $(SITE) $(DOCDIR) ; popd
	@pushd .. ; mv $(SITE) $(ROOT) ; popd
