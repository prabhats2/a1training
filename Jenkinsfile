pipeline{
 agent any
 
 stages{
	stage("Clone Code"){
	 steps{
	 echo "Cloning the codde"
	 git url:"https://github.com/prabhats2/a1training.git", branch: "main"
	 } 
	}
	 stage("build"){
	 steps{
	 echo "Building the image"
	 sh "docker build -t a1-training ."
	 }
	 }
	 stage("Push to Docker Hub"){
	 steps{
	 echo "Pushing the image to docker hub"
	 withCredentials([usernamePassword(credentialsId:"DockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")])
		{
		sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
		 sh "docker tag a1-training ${env.dockerHubUser}/a1-training:latest"
		 sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
		 sh "docker push ${env.dockerHubUser}/a1-training:latest"


		}
	 }
	 }
 
	 stage("Deploy"){
	 steps{
	 echo "Deploying"
	 //sh "docker run -itd -p 80:80 --name bcd my-vpc-training"
	 sh "docker-compose down && docker-compose up -d"
	 }
	 }
	}
	}

