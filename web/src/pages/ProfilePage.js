import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProfilePage.css'

export default function ProfilePage(props) {
  // Setting initial state
  const initialprofileState = {
    profile: {},
    loading: true,
  }

  // Getter and setter for profile state
  const [profile, setprofile] = useState(initialprofileState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getprofile = async () => {
      const { data } = await axios(
        'http://127.0.0.1:8000/profiles/6'
      )

      // Update state
      setprofile(data)
    }

    // Invoke the async function
    getprofile()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return profile.loading ? (
    <div>Loading...</div>
  ) : (


<div className= "container">
    
    
     <div className="box1">
     <h2>About Me</h2>    
          {profile.id}
          {profile.name}
          {profile.about_me}
          {profile.id}
          {profile.projects}
        </div>      
        
          
     <div className="box2" >
     <h3 className="left">Address & E-mail</h3>   
     <p class="right"><span> {profile.address}</span><br/>
      <span> {profile.email}</span><br/></p>
    <div>
     <h3 className="left2">Telephone & Birthdate</h3>
     <p className="right2"><span>{profile.telephone_number}</span><br/>
     <span> {profile.birthdate}</span><br/> </p>
     </div>

     <div>
     <h3 className="left3">Programming</h3>
     <p className="right3"><span>Python</span><br/>
                            <span> JavaScript, HTML/CSS</span><br/> 
                            <span> C/C++</span><br/>
                            <span> Matlab</span><br/>
                            <span> </span><br/></p>
     </div>

    <div>
     <h3 className="left4">Languages</h3>
     <p className="right4"><span><b>Fluent:</b></span><br/>
                            <span> English</span><br/> 
                            <span><b> Intermediate:</b></span><br/>
                            <span> Swedish</span><br/>
                            <span> </span><br/></p>
     </div>



        </div>

    
  <div className="box3">  
  <h2>Experience</h2>  
  <section id="cd-timeline" class="cd-container">
    
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
				<h2>Qopla</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
          
            DataScientist
          </span>
          <span class="timeline-content-info-date">
            <br></br>
            11/19 - Present
          </span>
        </div>
				<p>Software developer, estimating delivery times using Python and machine learning.</p>
        <ul class="content-skills">
        <li>Python</li>
        <li>Tensorflow</li>
        <li>jupyter</li>
        <li>visulation</li>
        
        </ul>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 

			<div class="cd-timeline-content">
				<h2>Uppsala University</h2>

        <span class="timeline-content-info-title">
          
          DataScientist
        </span>
        <span class="timeline-content-info-date">
        <br></br>
          03/19 - 08/19 
        </span>

				<p>Master thesis where I developed a machine learning model to predict future water demand in the city of Uppsala and visualized results in a interactive 
          map using Python.</p>
        <ul class="content-skills">
        <li>Python</li>
        <li>Tensorflow</li>
        <li>Spyder</li>
        <li>OpenstreetMap</li>
        </ul>
				
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div> 

			<div class="cd-timeline-content">
				<h2>Ericsson</h2>
				
        <span class="timeline-content-info-title">
          
          DataScientist
        </span>
        <span class="timeline-content-info-date">
        <br></br>
        09/18 - 02/19  
        </span>

				<p>Reinforcement Learning project in collaboration with Ericsson where we trained a robot called turtlebot2 to navigate and execute tasks autonomously 
            using Python, ROS (Robot-Os), Gazebo (Simulator).</p>
        <ul class="content-skills">
        <li>Python</li>
        <li>ROS</li>
        <li>Gazebo</li>
        </ul>


			</div> 
		</div> 

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 

			<div class="cd-timeline-content">
				<h2>Uppsala University</h2>

        <span class="timeline-content-info-title">
          
          DataScientist
        </span>
        <span class="timeline-content-info-date">
        <br></br>
          03/19 - 08/19 
        </span>

				<p>Master thesis where I developed a machine learning model to predict future water demand in the city of Uppsala and visualized results in a interactive 
          map using Python.</p>
        <ul class="content-skills">
        <li>Python</li>
        <li>Tensorflow</li>
        <li>Spyder</li>
        <li>OpenstreetMap</li>
        </ul>
				
			</div> 
		</div> 
{/*
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 5</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
				<span class="cd-date">Feb 18</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 

			<div class="cd-timeline-content">
				<h2>Final Section</h2>
				<p>This is the content of the last section</p>
				<span class="cd-date">Feb 26</span>
			</div> 
		</div> 

<!--  fgsdfgskjkhdf-->  */}
	</section>

      </div>
    
    <div className="box4">
    <h2>Education</h2>

    
					<h3>Uppsala University</h3>
					<p class="subDetails">Master's Degree in Computer Science  2017-2019</p>
					<p class="subDetails">Coursework: Functional Programming, Machine learning, Parallel programming, Advanced Software Design, Secure Computer Systems, Software Engineering and Project Management, Requirements in Agile Development, Intelligent Interactive Systems, Complex IT Systems in Large Organizations.</p>

          {/* <h3>Infrastructure University of Kuala Lumpur </h3> */}
          {/* <p class="subDetails">Bachelor's Degree in Software Engineering 2013-2016</p> */}
          {/* <p class="subDetails">Coursework: Programming, Object oriented programming, Data structures and algorithms, Operating systems, Computer architecture, Computer Networks, Artificial intelligence.</p> */}
    
       </div>

      
    


     
  </div> 
  



  )

  
}