import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import HubDetailsLayout from '../../Layout/HubDetailsLayout'

export default class Hub extends React.Component { constructor(props) { super(props) } render() { return (<MainLayout dashboard={"Hub"}><HubDetailsLayout id={this.props.match.params.id} /></MainLayout>) } }
