import React from 'react'
import './index.scss'

function VideoStreamingService() {
  return (
    <div className="container projectstatic-page">
      <h1 className="page-title">Video Streaming Service</h1>
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
          I developed a comprehensive video streaming service using AWS services,
          including AWS S3, CloudFront, and React for the front-end. The process involved
          setting up an S3 bucket to store uploaded videos, configuring CloudFront for efficient
          content delivery, and creating a secure access control setting. The CloudFront distribution
          was created, and the S3 bucket policy was updated to ensure proper permissions.
          After uploading a video to the S3 bucket, I integrated the CloudFront domain name into
          the React front-end. Building the front-end from scratch using React customized the users
          interface with a header welcoming users to the video streaming site.
          </p>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>
              The first thing that has to be setup is the AWS S3 bucket which
              is one of the most important services that I use for this project.
              I use the AWS S3 bucket to store and place all the videos that I want
              to import and show on the site.
            </li>
            <li>
              Set up CloudFront to serve as a content delivery network (CDN) for 
              faster content distribution. Configured CloudFront to access the S3  
              bucket. Established access control settings for CloudFront (Origin Access)
              to ensure distribution. Created a CloudFront distribution to serve as the 
              endpoint for video content delivery.
            </li>
            <li>
              For CloudFront to get proper access to my S3 bucket I copied the permissions from 
              the CloudFront distribution pop-up and pasted the copied permissions into the S3 
              bucket policy JSON for proper access.
            </li>
            <li>
              Uploaded videos into the S3 bucket. To get video access through CloudFront I 
              copied the CloudFront domain name URL then Pasted the URL into the browser's 
              address bar, followed by the S3 bucket key URL Accessed and tested the video 
              playback on the website.
            </li>
            <li>
              Implemented video player controls in the React front-end, providing 
              functionalities such as fullscreen, volume adjustment, download option,
              playback speed control, picture-in-picture, and play/pause button.
            </li>
            <li>
              Tested the React app locally to ensure proper functionality.
              Deployed the React app to make it accessible to consumers.
            </li>
            <li>
            </li>
          </div>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>
    </div>
  )
}

export default VideoStreamingService
