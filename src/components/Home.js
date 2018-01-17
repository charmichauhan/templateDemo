
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component{
    render(){
        return (
            <div className="container" style={{backgroundImage: 'url(../src/img/home-bg.jpg)'}}>
                <div>

                {/*<form>*/}
                    {/*Name: <input type="text" />*/}
                    {/*<br/>*/}
                    {/*Password: <input type="password"/>*/}
                {/*</form>*/}
                    {/*<Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>*/}
                        {/*<div>*/}
                            {/*<img src="../img/post-sample-image.jpg" />*/}
                            {/*/!*<p className="legend">Legend 2</p>*!/*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<img src="../img/post-bg.jpg" />*/}
                            {/*/!*<p className="legend">Legend 3</p>*!/*/}
                        {/*</div>*/}
                    {/*</Carousel>*/}

                </div>
            </div>
        );
    }
}

export default Home