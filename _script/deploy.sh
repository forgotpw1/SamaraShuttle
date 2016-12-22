#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'gh-pages' ] ; then
    eval `ssh-agent -s` #start shh agent 
    ssh-add ~/.ssh/travis_deploy
    # Initialize a new git repo in _site, and push it to our server.
    cd _site
    git init
    git remote add deploy "deploy@146.185.156.190:/home/deploy/SamaraShuttle"
    git config user.name "travis_deploy@samarashuttle.cr"
    git config user.email "travis_deploy@samarashuttle.cr"
    
    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't gh-pages."
fi
