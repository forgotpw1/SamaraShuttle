#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_977fcf01f74f_key -iv $encrypted_977fcf01f74f_iv -in travis_deploy.enc -out travis_deploy -d
rm travis_deploy.enc # Don't need it anymore
chmod 600 travis_deploy
mv travis_deploy ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa 
    
# Install zopfli
#git clone https://code.google.com/p/zopfli/
#cd zopfli
#make
#chmod +x zopfli
#cd ..
