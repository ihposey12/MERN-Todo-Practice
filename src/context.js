import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Check Emails',
                complete: false
            },
            {
                id: 2,
                title: 'Check Voicemails',
                complete: false
            },
            {
                id: 3,
                title: 'Check Report',
                complete: false
            }
        ]
    }
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer