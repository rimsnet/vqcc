import React from 'react';
import MainLayout from '../../Layout/MainLayout'
import QCPortalLayout from '../../Layout/QCPortalLayout';

export default class QCPortal extends React.Component { constructor(props) { super(props); } render() { return (<MainLayout dashboard={"QC-Portal"}><QCPortalLayout id={this.props.match.params.id} /></MainLayout>) } }

