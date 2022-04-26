pipeline {
    agent any
    environment {
        APP_DIR='/data/app/www'
        SERVICE_NAME='pfc-react'
    }
    stages {
        stage('warm up') {
            steps {
                sh 'node --version'
				sh 'npm -v'
				sh 'yarn -v'
				sh 'whoami'
                sh 'pwd'
            }
        }
	
        stage('build') {
	    steps {
                sh 'yarn install'
                sh 'yarn build --outDir ${APP_DIR}/${SERVICE_NAME}/${GIT_BRANCH}'
            }
		}
        
        stage('deploy') {
            steps {
                echo 'END'
            }
        }
    }
}
