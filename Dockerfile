FROM circleci/node:10
RUN apt-get update && apt-get upgrade
run apt-get install libnss3-dev