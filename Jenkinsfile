#!groovy
pipeline {
    agent any
    
        stage('Dependecies') {
            steps {
                sh 'npm i'
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
