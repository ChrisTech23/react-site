import React from 'react'
import './index.scss'

function ProjectStatic() {
  return (
    <div className="container projectstatic-page">
      <h1 className="page-title">Project Static</h1>
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
            My website is hosted on an S3 Bucket, ensuring fast and dependable
            access to users. This static hosting is further optimized by
            CloudFront Distribution for efficient content delivery. When
            visitors access the site, a Lambda function interacts with a
            DynamoDB table to display the cumulative number of visitors.
            Additionally, the "Contact Me" feature utilizes another Lambda
            function coupled with SES to send notifications whenever someone
            reaches out. All domain management and routing is seamlessly handled
            by Route 53. Moreover, our site is always up-to-date thanks to our
            CI/CD pipeline integrated with GitHub, which automatically pushes
            changes to the live site.
          </p>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>
              The journey starts with the users accessing my website. They do
              this through the domain https://resume.christech.link/ which is
              managed by Route 53. It directs the user's request to the
              CloudFront Distribution.
            </li>
            <li>
              CloudFront fetches the requested content from the specified S3
              Bucket (if it's not already cached) and serves it to the users,
              ensuring a faster response time and reduced load times.
            </li>
            <li>
              The S3 Bucket is where the static files of the website are stored.
              It's continuously updated through a CI/CD (Continuous
              Integration/Continuous Deployment) pipeline.
            </li>
            <li>
              Github is where the website's codebase resides. When changes are
              made to the repository, they trigger the CI/CD pipeline. This
              automated pipeline picks up changes from the GitHub repository and
              deploys them to the S3 Bucket, ensuring the website is always
              up-to-date with the latest changes.
            </li>
            <li>
              Additionally, The website is associated with two Lambda fucntions.
              One Lambda function is integrated with DynamoDB and the other is
              associated with SES (Simple Email Service)
            </li>
            <li>
              When a user accesses my website,the function's integrated with
              DynamoDB increments a view counter in the DynamoDB table,
              effectively tracking the number of visitors to my website.
            </li>
            <li>
              Although im still working out the econfiguration, the idea is that
              as users navigate to the "Contact Me" section of my website and
              submit a form/message, the associated Lambda function is
              triggered. This Lambda function processes the input from the form
              and utilizes the Simple Email Service (SES) to send an email
              notification, informing me of the new message or inquiry.
            </li>
          </div>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>
    </div>
  )
}

export default ProjectStatic
