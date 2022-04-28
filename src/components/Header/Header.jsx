import './header.css'
import blog from './blog.jpg'


export const Header = () => {

  return (
  <div className='header'>
    <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">Blog</span>
    </div>
    <img className='headerImg'src={blog}alt='' />
  </div>
  )
};
