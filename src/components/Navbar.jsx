import React, { useEffect } from 'react'
import { icons } from 'react-icons';
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';


export default function Navbar({navBackground}) {
  // const [{ token, name },dispatch] = useStateProvider();
  // useEffect(() => { 
  //       const getUserName = async () => {
  //           const response = await axios.get('https://api.spotify.com/v1/me',{
  //               headers: {
  //                   Authorization: "Bearer "+ token,
  //                   "Content-Type": "application/json"
  //               },
  //           });
  //           const items = response.data;
  //           // console.log(items);
            
  //           // dispatch({type:reducerCases.SET_USER, name})
  //           return items;
  //       }
  //       getUserName();
  //       console.log(name);
  //   },[token]);

  return (
    <Container navBackground = {navBackground}>
    <div className='search_bar'>
      <FaSearch />
      <input type="text" placeholder = "Artists, songs or podcasts" />
    </div>
    <div className='avatar'>
    <a href = "#">
      <CgProfile />
      <span>User</span>
    </a>
    </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: .3s ease-in-out;
  background-color: ${({navBackground})=>navBackground ? "rgba(0,0,0,0.7)": "none"};
  .search_bar{
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  input{
    border: none;
    height: 2rem;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem .4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    svg{
    font-size: 1.3rem;
    background-color: #282828;
    padding: .2rem;
    border-radius: 1rem;
    color: #c7c5c5;
  }
  }
  
`;