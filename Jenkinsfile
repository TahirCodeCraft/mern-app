pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mern-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/TahirCodeCraft/your-repository.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Run Application in Docker') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).run()
                }
            }
        }
    }
}
