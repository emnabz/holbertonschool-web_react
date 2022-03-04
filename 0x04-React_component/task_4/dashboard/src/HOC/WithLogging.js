import React from 'react';

function WithLogging(WrappedComponent) {
    const name =
      WrappedComponent.displayName || WrappedComponent.name || "Component";

class HOC extends React.component {
    componentDidMount() {
        console.log("Component ${name} is mounted");
    }
    componentWillUnmount() {
        console.log("Component ${name} is unmounted");
    }
    render() {
        return (
            <WrappedComponent {...this.props} />;
        )
    }
    HOC.displayName = `WithLogging(${name})`;
    return HOC;
}

export default WithLogging;

