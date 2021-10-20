import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.onLoadCallback = function(){
            window.gapi.auth2.init({
                client_id: '691913737276-hr26tteg9it5kd8ulrja1feqk9hg02j1.apps.googleusercontent.com',
                scope: 'email',
              });
          }
    }
    
    render() {
        return (
            <div>
                GoogleAuth
            </div>
        );
    }
}

export default GoogleAuth;