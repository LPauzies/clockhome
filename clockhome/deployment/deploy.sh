#!/bin/bash

# Setup global variables
repository=clockhome
owner=LPauzies
sshURI=git@github.com:$owner/$repository.git
httpsURI=https://${owner,,}.github.io/$repository/
date=$(date +'[%d/%m/%Y %H:%M]')
email=lucas.pauzies@hotmail.fr

# Should be executed from clockhome/clockhome
ng deploy --base-href=$httpsURI --repo=$sshURI --message="$date CICD - Clockhome" --name=$owner --email=$email