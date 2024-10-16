import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  return ( 
    <div className='topnav' id="header">
      <a href="/#">Movie Maker</a>
      <HashLink to='#addNewMovie' className='add-button'>Add Movie</HashLink>
    </div>
   );
}
 
export default Header;