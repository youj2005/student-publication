import React from 'react';
import Navbar from '../components/Navbar'

const MainLayout = ({ children }) => {
    const topics = [
        {
          id:1,
          text: 'Stories',
        },
        {
          id:2,
          text: 'Opinions',
        },
        {
          id:3,
          text: 'Investigations',
        },
        {
          id:4,
          text: 'Mission Statement'
        }
    ]
    
    return (
        <div>
            <Navbar topics={topics}></Navbar>
            <div>{children}</div>
        </div>
    )
};

export default MainLayout;
