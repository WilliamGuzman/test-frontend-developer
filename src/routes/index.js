import Users from '../components/Users/Users';
import UserInfo from '../components/UserInfo/UserInfo';

const users = {
    url: "/",
    component: Users,
  };
  const userinfo = {
    url: "/user-info/:username",
    component: UserInfo,
  };
  
  const states = [users,userinfo];
  
  export default states;