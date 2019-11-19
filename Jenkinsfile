    pipeline {
            agent {
        docker { image 'circleci/php:7.3' }
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
