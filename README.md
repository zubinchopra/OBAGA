# OBAGA
A project focussing on making a google assistant application for OneBusAway.

## Instructions on how to get results
* Clone the repository and then switch to zubinchopra-server branch
* After cloning is complete, open terminal, go to project directory and run the command, 'npm install'. This will install all the dependencies for the project. NOTE: This will make a node_modules folder in the directory. Do not push it up on GitHub and leave it as untracked.
* After this is done, run the command, 'node server_custom', on terminal. This will start a localhost server on port 3000. If everything runs correctly, then you will see 'server is listening on 3000'.
* When this is done, go to your web browser and go the following URL: http://localhost:3000/
* This will lead to a page with very simple UI which includes one text box and one submit button.
* For testing purposes type in the stop ID, '1_35570' in the text box and CLICK ON THE SUBMIT BUTTON.
* The results from the call will be shown on the console when you inspect the element.
