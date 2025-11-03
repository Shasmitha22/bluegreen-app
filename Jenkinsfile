pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shasmitha22/bluegreen-app"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Shasmitha22/bluegreen-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:latest .'
                }
            }
        }

        stage('Test Application') {
            steps {
                script {
                    sh 'echo "Running sample tests..."'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKERHUB_PASS')]) {
                    script {
                        sh 'echo $DOCKERHUB_PASS | docker login -u shasmitha22 --password-stdin'
                        sh 'docker push $DOCKER_IMAGE:latest'
                    }
                }
            }
        }

        stage('Deploy Blue-Green') {
            steps {
                script {
                    sh 'echo "Deploying Blue-Green version..."'
                }
            }
        }
    }
}
