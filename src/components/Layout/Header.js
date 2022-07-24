import { Fragment } from 'react';
import CartButton from '../Cart/CartButton';
import backgroundImage from '../../assets/background.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy!</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={backgroundImage} />
      </div>
    </Fragment>
  );
};

export default Header;
