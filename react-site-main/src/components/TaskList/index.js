import React from 'react'
import './index.scss'

function tasklist() {
  return (
    <div className="container projectstatic-page">
      <h1 className="page-title">Task List</h1>
      <div className="content-container">
        <img
          src="/images/StaticWebArch.jpg"
          alt="AWS Architecture Visualization"
        />
      </div>
      <div className="text-containers-wrapper">
        <div className="text-container">
          <h2 className="container-title">Description</h2>
          <p className="container-text">
            Designed and developed a comprehensive task management application 
            that seamlessly integrates various AWS services and modern web 
            technologies. Leveraging DynamoDB for data storage, AWS Lambda for
            serverless functionality, Amplify for backend orchestration, and Express,
            React, and Node for the frontend, the project delivers an intuitive and 
            efficient solution for organizing and tracking tasks.
          </p>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>
            Defined a robust schema for DynamoDB to efficiently store and retrieve
            task-related data. Implemented tables to capture task details, deadlines,
            status, and user information.
            </li>
            <li>
              Lambda Functions for backend logic, Developed a series of AWS Lambda functions 
              to handle backend operations, including task creation, updates, and deletions.
              Utilized serverless architecture to ensure scalability, cost-effectiveness,
              and seamless integration with the frontend.
            </li>
            <li>
              Utilized AWS Amplify to simplify the backend development process 
              and seamlessly manage services. Configured Amplify to handle authentication, 
              data storage, and API operations, enabling a rapid development cycle.
            </li>
            <li>
              Established an Express.js server to manage server-side logic and
              serve as the interface between the frontend and serverless backend.
              Implemented RESTful API routes for CRUD operations, facilitating
              communication with Lambda functions.
            </li>
            <li>
              Crafted a dynamic and user-friendly React frontend to provide an intuitive
              task management interface. Implemented features such as task creation, 
              updates, status tracking, and deadline management. Enhanced the frontend with 
              responsive design and an intuitive user interface, prioritizing  a seamless task
              management experience. Integrated real-time updates to ensure users have instant  
              visibility into changes made by themselves or collaborators.
            </li>
            <li>
              Conducted comprehensive testing to ensure the reliability and responsiveness of the
              responsiveness of the application. Optimized Lambda functions, DynamoDB queries, and frontend 
              components for improved performance. Successfully deployed the application on AWS, utilizing 
              services like DynamoDB and Lambda for hosting and backend operations. Implemented monitoring 
              and scaling strategies to accommodate increased user activity and maintain application performance.
            </li>
            <li>
              Recognized for the successful implementation of a scalable and efficient task management 
              system that meets user needs. Received positive feedback from users for the application's 
              user-friendly design and seamless functionality. 
            </li>
          </div>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>
    </div>
  )
}

export default tasklist
