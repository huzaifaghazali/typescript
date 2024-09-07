import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return <>
    <header>Header</header>
    <nav>navbar</nav>
    <Outlet />
  </>;
}

export default HomeLayout;
