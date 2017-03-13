website
=======

Workflow
--------

First time setup::

    $ git clone https://github.com/emrg-ca/website.git emrg-website
    $ pushd emrg-website
    emrg-website$ git remote add hub https://github.com/emrg-ca/website.git
    emrg-website$ git remote add lab https://gitlab.com/emrg-ca/website.git
    emrg-website$ git remote rm origin
    emrg-website$ echo 'aweirdpassword' > passwd

Make sure your local copy is up-to-date each time you start working on it::

    emrg-website$ git fetch --all && git fetch --prune  # fetch latest git
    emrg-website$ git reset --hard origin/master  # forget local changes
    emrg-website$ git checkout master  # switch to master branch
    emrg-website$ git add . && git commit -m 'Fetch latest from ftp'
    emrg-website$ git push  # push to git
    emrg-website$ make pull  # push to ftp

Upload your changes::

    emrg-website$ git checkout -b new-branch-for-changes
    # ...
    # Make a bunch of changes
    # ...
    emrg-website$ git add . && git commit -m 'I made changes to the website'
    emrg-website$ git push
    emrg-website$ make push

Tag your changes::

    emrg-website$ git tag -a -m 'Snapshot for $(date +%Y-%m-%d)' \
        $(date +%Y-%m-%d)
    emrg-website$ git push --tags
