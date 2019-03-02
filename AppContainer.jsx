'use strict'

import React, {Component} from 'react';
import Users from './Users';
import AddUser from './AddUser';

export default class AppContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            users:[{
                id: Date.now(),
                name :'John'
            }

            ]
        }
    }

    addUser(user){
        this.setState(state => ({
            users :state.users.concat({id: Date.now(), name: user.name})
        }))
    }

// question 5
    // render() {
    //     return <div>
    //         <h2>Hello world</h2>
    //     </div>
    // }


    render(){
        const {users} = this.props;
        return<div>
            <table>
                <thread>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thread>
                <tbody>
                {
                    users.map(user => {
                        return <User key={user.id} user={user}/>
                    })
                }
                </tbody>
            </table>
        </div>;
    }

    render(){
            return <div>
                <h2>Users App</h2>
                <AddUser addUser = {user => this.addUser(user)} />
                <Users users  ={this.state.users}/>

            </div>;
    }
}