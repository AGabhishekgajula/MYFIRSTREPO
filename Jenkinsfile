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
                // Example command to build the project and generate HTML reports
                sh 'npm install' // Modify as needed
                sh 'npm run build' // This should generate the reports
            }
        }

        stage('Publish HTML Report') {
            steps {
                // Publish the HTML reports
                publishHTML(target: [
                    reportName: 'Registration Form Report',
                    reportDir: 'path/to/html/reports', // Adjust to your report directory
                    reportFiles: 'index.html', // Main HTML file for the report
                    alwaysPublish: true // Always publish the report
                ])
            }
        }
    }
}
