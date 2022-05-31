import React from 'react';


const styles = {
    paperContainer: {
        height: 800,
   
        backgroundImage: `url(${"https://images.unsplash.com/photo-1635693206507-1d749cb30ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"})`
    }
};

export default class Home extends React.Component {
    render() {
        return (
            <div style={styles.paperContainer}>
            </div>
        )
    }
}
