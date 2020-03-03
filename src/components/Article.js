import React, {Component, PureComponent} from 'react'

class Article extends PureComponent{
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('---', 'will update')
    }


    render() {
            const {article, is0pen, onButtonClick} = this.props
            const body = is0pen && <selection className="card-text">{article.text}</selection>;
            return (
                <div className="card mx-auto"  style = {{width: '50%'}}>
                    <div className="card-header">
                        <h2 onClick={this.incrementCounter}>
                            {article.title}
                            clicked {this.state.count}
                            <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                                {is0pen ? 'close' : 'open'}
                            </button>
                        </h2>
                    </div>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">
                            creation date: {(new Date(article.date)).toDateString()}
                        </h6>
                        {body}
                    </div>
                </div>
            )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count +1
        })
    }

}

export default Article