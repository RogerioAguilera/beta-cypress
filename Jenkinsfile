
pipeline {
    agent any

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Tests') {
            steps {
                sh 'npm run cy:run'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
