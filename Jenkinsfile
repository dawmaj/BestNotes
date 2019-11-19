    pipeline {
        agent any

        stages {
            stage('Build') {
                steps {
                    sh "cd test"
					echo 'Building..'
                }
            }
            stage('Test') {
                steps {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
