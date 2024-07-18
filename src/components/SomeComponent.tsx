import { Component } from 'react';

type MyProps = {
    message: string;
}

type MyState = {
    count: number;
}

class SomeComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = { count: 0 };
    }

    // state: MyState = {count: 0};

    render() {
        return <div>
            <h2>{this.props.message} {this.state.count}</h2>
            <button onClick={() => {
                this.setState((state) => {
                    return {
                        count: state.count + 1,
                    }
                })
            }}>inc</button>
        </div>;
    }
}

export default SomeComponent;