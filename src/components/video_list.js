import React, {Component} from 'react';

{/*почему здесь класс а не функция?*/}
class VideoList extends Component{
    render() {
        return (
        <div>
            {
                this.props.videos.length
            }
        </div>
        )
    }
}

export default VideoList;