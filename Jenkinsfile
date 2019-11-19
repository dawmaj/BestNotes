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
