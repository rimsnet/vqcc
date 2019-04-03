import React from 'react'
import MainLayout from '../../Layout/MainLayout';
import HomeLayout from '../../Layout/home/HomeLayout';

export default class Home extends React.Component { constructor(props) { super(props) } render() { return (<MainLayout dashboard={"Dashboard"}><HomeLayout {...this.props} /></MainLayout>) } }
