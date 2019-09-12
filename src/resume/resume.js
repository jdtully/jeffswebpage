import React from "react";
import "./style.css";

function Resume() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="contact">
              <div id="myName">Jeffrey D. Tully</div>
              535 Silver Pine Trail
              <br />
              Roswell, GA 30076
              <br />
              <a href="tel: 678-923-5663"> 678-923-5663</a>
              <br />
              <a href="mailto:jefftully@gmail.com"> Jefftully@gmail.com</a>
              <br />
              <a href="http://www.linkedin.com/in/jeffreytully">LinkedIn</a>
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div id="summary">
              With extensive management experience, 30 years of being the go-to
              guy for technology and IT support, five years of direct customer
              service, order processing, and call center experience, I am
              currently adding coding and DevOps capabilities to my skillset. I
              would like to position myself to continue to grow in this
              direction, becoming an asset for the right company.
            </div>
          </div>
        </div>
      </div>

      <div className="mainBody">
        <div id="mainHeader">PROFESSIONAL EXPERIENCE</div>
        <div className="expHeader"> Software Bootcamp</div>
        <div className="locDate">May 2019</div>
        <div className="details">
          Started learning to code, and perform DevOps.
          <br />
          Ubuntu, HTML, CSS, Python, VM VirtualBox, Node, PostgreSQL, Vagrant,
          JavaScript, React
        </div>
        <div className="expHeader"> Business Cards Tomorrow</div>
        <div className="locDate">
          Norcross, GA <br />
          April 2014 – March 2018
        </div>
        <div className="title">Service Representative and Deskside Support</div>

        <ul className="details">
          <li>
            Remade the company’s image by consistently killing customers with
            kindness.
          </li>
          <li>Fielded and resolved customer phone calls and emails.</li>
          <li>
            Worked between clients and production to coordinate deadlines.
          </li>
          <li>
            Maintained, configured and built out the office computers and
            network infrastructure.
          </li>
          <li>
            Educated co-workers on how to perform tasks on the computer to
            resolve issues and remain productive.
          </li>
        </ul>

        <div className="expHeader">Itel Networks</div>
        <div className="locDate">
          Atlanta, GA
          <br /> January 2011 – April 2014
        </div>
        <div className="title">Network Installer and I.T. Consultant</div>
        <ul className="details">
          <li>
            Guided the growth of this initially small cabling company (installs
            Data and VoIP systems) to an enterprise-level player in the
            industry.
          </li>
          <li>
            Actively pursued sales opportunities, researched RFQs, and helped
            with bidding for jobs.
          </li>
          <li>
            Performed certification on networking components using various
            tools.
          </li>
          <li>
            Sourced materials and managed the installation of various project
            phases from initial cabling to final configuration of networking
            hardware and office equipment.
          </li>
          <li>Deployment of PCs and laptops to final users.</li>
        </ul>

        <div className="expHeader"> Cables PlusPC</div>
        <div className="locDate">
          Norcross, GA
          <br /> November 2009 – December 2010
        </div>
        <div className="title">Computer Technician</div>
        <ul className="details">
          <li>Scheduled and handled repairs.</li>
          <li>Handled customer phone calls as well as in person visits.</li>
          <li>Hardware and software diagnosis of customer computer systems.</li>
          <li>Built new systems to customer specifications.</li>
          <li>Built a repository of images for common laptops.</li>
        </ul>

        <div className="expHeader">FINE ART LTD</div>
        <div className="locDate">
          Norcross, GA <br />
          September 1987­ – October 2009
        </div>
        <div className="title">Vice President of Operations and IT</div>
        <ul className="details">
          <li>
            {" "}
            Contributed to the growth of the company from a garage-based
            business,
            <br /> to $8 million in sales per year in seven different markets.
          </li>
          <li>
            Managed various aspects of back office, marketing, warehousing and
            technology enablement, customer satisfaction and sales support,
            ensuring company productivity.
          </li>
          <li>
            Retained employees for an average of 10 to 12 years by promoting
            mutual respect and a collaborative environment by:
            <ol className="details">
              <li>Keeping them informed.</li>
              <li>Engaging them in the decision-making process.</li>
              <li>Being as transparent as possible in all interactions.</li>
              <li>
                Listening actively to problems and working towards positive
                outcomes.
              </li>
              <li>Always finding ways to be encouraging.</li>
              <li>
                Recognizing them both for the talents they brought to the table
                and occasions where
                <br />
                someone went above and beyond the job description.
              </li>
            </ol>
          </li>
          <li>
            Grew production levels by self-taught production management
            techniques (standardization, limiting the number of steps in a task,
            and using jigs) while maintaining the same level of staffing.
          </li>
          <li>
            Collaborated with clients and sales force to ensure full-cycle
            customer satisfaction.
          </li>
          <li>
            Created the standards for labeling construction and data layout now
            used by most of the
          </li>
          industry.
        </ul>
      </div>
    </div>
  );
}

export default Resume;
