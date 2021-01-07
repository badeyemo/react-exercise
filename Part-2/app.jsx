class Tweet extends React.Component {
    render() {
        return (
            <div className='tweet'>
                <h2>User Name: <span className='user'>{this.props.username}</span></h2>
                <h4>Name: <span className='user'>{this.props.name}</span></h4>
                <h4>Date: <span className='user'>{this.props.dateOfTweet}</span></h4>
                <p className='text'>{this.props.children}</p>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet username='Badeyemo' name='Victor' dateOfTweet='2/12/2020'>Congratulations for my First Tweet!</Tweet>
                <Tweet username='ThomasBrk' name='Brooks' dateOfTweet='10/12/2020'>This is my Second tweet in December 2020</Tweet>
                <Tweet username='Rdayode' name='Remigius' dateOfTweet='19/12/2020'>Coding is sweeter than Honey, but hard to learn.</Tweet>
                <Tweet username='DenmarkL' name='Davido' dateOfTweet='31/12/2020'>The close Tweet for the the month and year 2020.</Tweet>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));