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
                // Your build commands here
                echo 'Building the project...'
                // Example: sh 'npm install' or any command to generate HTML files
            }
        }

        stage('Publish HTML') {
            steps {
                // Publish HTML reports
                publishHTML(target: [
                    reportName: 'Registration Form Report',
                    reportDir: 'build/html', // The directory containing the HTML files
                    reportFiles: 'index.html', // The main HTML file
                    alwaysLinkToLastBuild: true,
                    alwaysPublish: true
                ])
            }
        }
    }
}
