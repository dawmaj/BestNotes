FROM circleci/node:10
RUN sudo apt-get update
RUN sudo apt-get install libnss3-dev
RUN sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo apt-get install ./google-chrome-stable_current_amd64.deb