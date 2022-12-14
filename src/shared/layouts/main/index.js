import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../features/SideBar/Sidebar';

const MainLayout = () => (
  <main>
    <aside>
      <Sidebar />
    </aside>
    <section className="mainCnt">
      <Outlet />
    </section>
  </main>
);

export default MainLayout;
