#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
openssl aes-256-cbc -K ${ENCRYPTED_KEY_VAR} -iv ${ENCRYPTED_IV_VAR} -in travis_deploy.enc -out travis_deploy -d
rm travis_deploy.enc # Don't need it anymore
chmod 600 travis_deploy
echo "Host samarashuttle.cr" >> ~/.ssh/config
echo "  IdentityFile ~/.ssh/travis_deploy" >> ~/.ssh/config
mv travis_deploy ~/.ssh/travis_deploy
#ssh-keygen -y -f ~/.ssh/travis_deploy > ~/.ssh/travis_deploy.pub    
ls ~/.ssh
# Install zopfli
#git clone https://code.google.com/p/zopfli/
#cd zopfli
#make
#chmod +x zopfli
#cd ..
