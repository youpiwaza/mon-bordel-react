import GuestGreeting  from './GuestGreeting';
import UserGreeting   from './UserGreeting';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  // sinon
  return <GuestGreeting />;
}

export default Greeting;