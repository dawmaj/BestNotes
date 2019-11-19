    pipeline {
        agent {docker { image 'circleci/node:10' }}
        environment {
            HOME = '.'
        }

        stages {
            stage('Build') {
                steps {
                    sh "npm install"
                }
            }
            stage('Test') {
                steps {
                    sh "npm install webdriverio"
                    sh "npm test"
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
