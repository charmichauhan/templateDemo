import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Demo