#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
rm travis_deploy.enc # Don't need it anymore
chmod 600 travis_deploy
echo "Host samarashuttle.cr" >> ~/.ssh/config
echo "  IdentityFile ~/.ssh/travis_deploy" >> ~/.ssh/config
mv travis_deploy ~/.ssh/travis_deploy
ssh-keygen -y -f ~/.ssh/travis_deploy > ~/.ssh/travis_deploy.pub    
ls ~/.ssh
# Install zopfli
#git clone https://code.google.com/p/zopfli/
#cd zopfli
#make
#chmod +x zopfli
#cd ..
