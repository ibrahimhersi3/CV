import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        'http://127.0.0.1:8000/profiles/3'
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
    <div className="container">
      <h1>{profile.id}</h1>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>birthdate</th>
            <th>about_me</th>
            <th>telephone_number</th>
      
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{profile.name}</td>
            <td>{profile.email}</td>
            <td>{profile.address}</td>
            <td>{profile.birthdate}</td>
            <td>{profile.about_me}</td>
            <td>{profile.telephone_number}</td>
            <td>{profile.id}</td>
            <td>{profile.projects}</td>
            
            
            <td>
              <a href={profile.blog}>{profile.blog}</a>
            </td>
            <td>{profile.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}