import React from 'react'

class Error extends React.Component{
    render(){
        return(
            <div className="error">
            <p className="error-text">{this.props.message}</p>
          </div>
        )
    }
}

export default Error