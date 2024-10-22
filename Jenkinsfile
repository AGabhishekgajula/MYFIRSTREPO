pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Cloning the repository
                git branch: 'main', url: 'https://github.com/AGabhishekgajula/MYFIRSTREPO.git'
            }
        }
        stage('Build') {
            steps {
                // Assuming you have a build step (for example, npm install or Maven build)
                echo 'Building the project...'
                // Uncomment this if you use a build tool, e.g., npm or maven
                // sh 'npm install' or sh 'mvn package'
            }
        }
        stage('Test') {
            steps {
                // Run unit tests
                echo 'Running tests...'
                // Uncomment this if you have tests configured
                // sh 'npm test' or sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                // Deployment step, can be any deploy script or server
                echo 'Deploying the project...'
                // For example, copying files to a web server
                // sh 'scp -r ./* user@yourserver:/var/www/html/'
            }
        }
    }
}
