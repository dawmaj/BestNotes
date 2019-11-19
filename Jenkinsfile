    pipeline {
        agent any

        stages {
            stage('Build') {
                steps {
                    sh "cd tests"
					sh "npm install"
                }
            }
            stage('Test') {
                steps {
                    echo 'Testing..'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
