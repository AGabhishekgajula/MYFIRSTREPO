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
                        sh 'cat index.html'
                    } else {
                        echo "index.html file not found."
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
// Adjust to your report directory
                    reportFiles: 'myfirstrepo.html', // Main HTML file for the report
                    alwaysPublish: true // Always publish the report
                ])
            }
        }
    }
}
