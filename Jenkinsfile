    pipeline {
        agent {
        docker { image 'circleci/node:10' }
        }

        stages {
            stage('Build') {
                steps {
                    sh "cd test"
					echo 'Building..'
                }
            }
            stage('Test') {
                steps {
                    sh "/usr/local/bin/npm install"
                    sh "/usr/local/bin/npm test"
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
