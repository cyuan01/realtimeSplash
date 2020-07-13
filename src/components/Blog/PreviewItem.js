import React from 'react';
// import '../../App.css';
import './Blog.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// -- 
import { FaRegKeyboard } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
class PreviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <button
                className="blogButton"
                style={{
                    width: "90%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    border: "solid",
                    borderColor: "#f0f0f0",
                    marginTop: 20,
                    marginBottom: 20,
                    padding: 10,
                    borderRadius: 5
                }}
                onClick={() => this.props.handleClick(this.props.blogID)}
            >

                <div style={{
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    // border:"solid",
                    // borderRightWidth: 2,
                    // borderLeftWidth: 0,
                    // borderTopWidth: 0,
                    // borderBottomWidth: 0,
                    borderColor: "#525252",
                    alignSelf: "stretch",
                    justifyContent: "center"
                }}>
                    {/* <h1><FaRegKeyboard /></h1> */}
                    <img
                            // className="screenimg"
                            src={this.props.content.img.pic}
                            width='100%'
                            height='auto'
                            alt="blog img"
                        />
                </div>
                <div style={{
                    display: "flex",
                    flex: 2,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingLeft: 10,
                    paddingRight: 10

                }}>
                    <h2 className="blogTitle">{this.props.title}</h2>
                    <p className="blogSm">
                            <FaRegCalendarAlt /> {this.props.content.date}
                    </p>
                    <p className="blogPrev">{this.props.content.post.slice(0, 100)} ...</p>
                </div>
            </button>
        )
    }
}

export default PreviewItem