pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Shasmitha22/bluegreen-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t bluegreen-app .'
            }
        }
        stage('Test Application') {
            steps {
                bat 'npm test'
            }
        }
        stage('Push to DockerHub') {
            steps {
                bat 'docker push bluegreen-app'
            }
        }
    }
}
