FROM circleci/node:10
RUN sudo apt-get update
RUN sudo apt-get install libnss3-dev

RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /chrome.deb
RUN dpkg -i /chrome.deb || apt-get install -yf
RUN rm /chrome.deb