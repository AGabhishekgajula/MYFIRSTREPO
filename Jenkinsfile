pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/AGabhishekgajula/MYFIRSTREPO.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Your build commands here
                // Example: sh 'npm install' or any command to generate HTML files
            }
        }

        stage('Publish HTML') {
            steps {
                publishHTML(target: [
                    reportName: 'Registration Form Report',
                    reportDir: 'build/html', // Directory containing the HTML files
                    reportFiles: 'index.html' // The main HTML file
                ])
            }
        }
    }
}
