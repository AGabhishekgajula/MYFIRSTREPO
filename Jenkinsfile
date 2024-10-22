pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Cloning the GitHub repository
                git branch: 'main', url: 'https://github.com/AGabhishekgajula/MYFIRSTREPO.git'
            }
        }

        stage('Build') {
            steps {
                // Placeholder for build commands
                echo 'Building the project...'
                // If you had a build step, e.g., npm install, you would put it here
                // sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Placeholder for running tests
                echo 'Running tests...'
                // Add commands to run tests, e.g., sh 'npm test' for JavaScript projects
            }
        }

        stage('Deploy') {
            steps {
                // Placeholder for deployment steps
                echo 'Deploying the project...'
                // This could be deployment to a server or cloud platform
            }
        }
    }
}
