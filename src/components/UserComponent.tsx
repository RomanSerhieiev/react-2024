import { Component } from 'react';

interface IUser {
    id: number,
    name: string,
}

type MyState = {
    users: IUser[];
}

class UserComponent extends Component<{}, MyState> {
    state: MyState = {
        users: []
    };

    componentDidMount() {
        console.log('did mount');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({
                    ...this.state,
                    users: users
                });
            });
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<MyState>, snapshot?: any) {
        console.log('did update');
        console.log(prevProps);
    }

    render() {
        return (
            <ul>
                {this.state.users.map((user, i) => (<li key={i}>{user.name}</li>))}
            </ul>
        );
    }
}

export default UserComponent;