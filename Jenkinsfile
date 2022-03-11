#!groovy

node('nodejs14') {
    def nodeHome = tool 'nodejs14'
   
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
