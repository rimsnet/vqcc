import React from 'react'
import MainLayout from '../../Layout/MainLayout';
import HubListLayout from '../../Layout/HubListLayout';

class Home extends React.Component {
    render() { return (<MainLayout dashboard={"Hubs"}><HubListLayout /></MainLayout>) }
}

export default Home