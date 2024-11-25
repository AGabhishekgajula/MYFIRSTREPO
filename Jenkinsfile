pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git 'https://github.com/AGabhishekgajula/MYFIRSTREPO.git'
            }
        }
        stage('Display HTML') {
            steps {
                // Display the contents of index.html
                script {
                    if (fileExists('myfirstrepo.html')) {
                        echo "HTML File Contents:"
                        sh 'cat myfirstrepo.html'
                    } else {
                        echo "myfirstrepo.html file not found."
                    }
                }
            }
        }
        stage('Publish HTML Report') {
            steps {
                // Archive and publish HTML report (requires HTML Publisher Plugin)
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'myfirstrepo.html',
                    reportName: 'HTML Report'
                ])
            }
        }
    }
}
