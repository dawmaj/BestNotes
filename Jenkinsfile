    pipeline {
        agent {dockerfile true}
        environment {
            HOME = '.'
        }

        stages {
            stage('Build') {
                steps {
                    sh "npm install"
                    sh "npm install webdriverio"
                }
            }
            stage('Test') {
                steps {
                    sh "npm test"
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying the app to the production'
                }
            }
        }
    }
