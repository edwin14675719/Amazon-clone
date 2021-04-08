import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


const Header = () => {


  const [ {basket},  ] = useStateValue();
    return ( <div className='header'>

           <img className='header-logo' src="" alt=""/>

                <div className="header_search">
                    <input type="text" className="header_searchInput"/>
                </div>
                <SearchIcon className='header_searchIcon' />

                <div className="header_nav">

                      < Link to ='/login' >
                        <div className="header_option">
                                <span className="header_optionlin1">
                                hello guest
                                </span>
                                <span className="header_optionline2">
                                sign in
                                </span>
                        </div>

                      </Link >
                        <div className="header_option">
                        <span className="header_optionlin1">
                                  returns  
                                </span>
                                <span className="header_optionline2">
                                &orders
                                </span>
                        </div>
                        <div className="header_option">
                        <span className="header_optionlin1">
                                 Your  
                            </span>
                            <span className="header_optionline2">
                              Prime
                            </span>
                        </div>
                           < Link to="/checkout">                      
                              <div className="header_optionBasket">

                                < ShoppingBasketIcon />
                            <span classsName='header_optionLine2 header_basketCount'>{basket?.length}</span>
                              </div>
                          </Link> 
                </div>

    </div> );
}
 
export default Header;