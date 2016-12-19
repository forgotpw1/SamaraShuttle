#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'gh-pages' ] ; then
    eval `ssh-agent -s` #start shh agent 
    ssh-add ~/.ssh/id_rsa
    # Initialize a new git repo in _site, and push it to our server.
    cd _site
    git init
        
    git remote add deploy "deploy@samarashuttle.cr:/home/deploy/SamaraShuttle"
    git config user.name "Travis CI"
    git config user.email "reserve+travisCI@samarashuttle.cr"
    
    git add .
    git commit -m "Deploy"
    git push --force deploy gh-pages
else
    echo "Not deploying, since this branch isn't gh-pages."
fi
