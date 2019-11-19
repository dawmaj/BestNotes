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
                    sh ''./node_modules/.bin/wdio run ./test/config/base.conf.js'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
