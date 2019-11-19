    pipeline {
        agent {
        docker { image 'circleci/node:10' }
        }

        stages {
            stage('Build') {
                steps {
                    sh "npm install"
                }
            }
            stage('Test') {
                steps {
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
