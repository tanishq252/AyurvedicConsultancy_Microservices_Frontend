# Ayurvedic Consultants

This application is built using MERN stack, which consists of two types of users: doctor and patient. It consists of 3 services: authService, doctorService and userService. The whole motive of this application was to have microservices based architecture for studying purposes. These Node JS microservices are deployed using AWS ECS (Fargate), ECR and EC2 (application loadbalancer).

Explanation of deploying these services on AWS is available in the following link: https://www.youtube.com/watch?v=V--1RruxJpA

Code of Node JS microservices: https://github.com/tanishq252/AyurvedicConsultancy_Microservices

Blog on Monolithic vs Microservice Architecture: https://medium.com/@tanishq252002/an-overview-of-monolith-vs-microservices-applications-80b39b42c29b

## Description

This project aims to showcase the implementation of a microservices architecture using Node.js and AWS services. The microservices are designed to be decoupled, scalable, and independently deployable components. The AWS Load Balancer is used to distribute incoming traffic across multiple instances of these microservices, ensuring high availability and efficient utilization of resources. Following are the features of microservices architecture.

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/ebc2ed53-fd4f-4c9e-9b65-0d64c6efd202)

## Architecture

The architecture of this project consists of the following components:

- **Microservices:** The project includes multiple Node.js microservices, each responsible for a specific functionality or business logic. The microservices communicate  with each other through APIs and follow a loosely coupled architecture. Architecture which microservices are based on: 

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/0af8153d-b31e-488d-a36a-d27a3f5ac63d)

- **REST API:** Methods defined here are used by the client side application to send requests and receive responses from the Server as well interact with each other. The structure of API of all the three services is:

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/18b1a107-7b1b-407e-a37a-9b6cb872d641)

- **AWS Load Balancer:** To handle incoming traffic and distribute it evenly across the microservices, an AWS Load Balancer is utilized. The load balancer automatically scales the number of instances based on the demand, ensuring high availability and preventing any single point of failure. There are target groups which forward the requests to desired services which execute the tasks within them in which containers are functioning.

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/57d86a3a-fa7a-4386-af8d-4bd390596003)

- **Rules of the Load Balancer:**

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/71e487d0-da05-49bd-a002-15d01ff862a9)

## Functionalities of the application

- Basic Authentication has been used, I have used localstorage to keep the user logged in after successful login so that the user won't need to log in again, to verify the mail id OTP service has been used where Email JS has been used, a random OTP is generated and stored in local storage after successful signup and same OTP is sent to the mail for verification. Further after signing up the application directs to login and for first time verification OTP will be asked along with credentials, and it will match the entered otp with local storage otp which is same as the otp sent on the mail. This logic has a few loophole which will be owrked out in future
- Users can ask their queries to doctor and wait for their prescription, user will be able to see only his/her queries and prescriotions on the same, in next build user would be able to resolve query and respond to doctor with the progress.
- Doctors will be able to answer all the current queries, update and delete already answered queries, doctors will be provided an option to upload the hand written prescription if any.
- In next build, the queries will be further divided in multiple segments for eg. Vision related queries, Body pain related queries, Digestion related queries, etc.

## User Interface

- Home Page

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/d8f08cf3-9173-4fb3-8023-bccc98593150)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/33b188e1-2de9-4a63-a2e7-3494f937a665)

- Login 

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/e28abfa0-14e3-4f30-810a-8d0da2e21d04)

- Signup

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/0314497f-7a35-45f5-8c36-5bd8bf1666fd)

- Answer Queries (Doctor)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/81f644d7-3d47-4864-8959-b6e02ea7f753)

- Prescribe (Doctor)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/4f32dd31-29f7-43af-ad08-c4996130e6a1)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/ed403dbd-6553-4f4e-b699-0794aa3e55f7)

- Ask Query (User)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/c6c93755-a2c1-4d34-9c04-3c025a5b9625)

- View Prescriptions (User)

![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/a6c9509e-474a-4a82-a5c0-a60054e0c373)


## Tech Stack

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![image](https://github.com/tanishq252/AyurvedicConsultancy_Microservices_Frontend/assets/78098329/8e85316b-b8d3-4458-b46c-94299a058854)

