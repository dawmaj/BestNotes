FROM circleci/node:10
RUN sudo apt-get update
RUN sudo apt-get install libnss3-dev