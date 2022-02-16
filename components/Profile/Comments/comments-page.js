import axios from "axios"
import React, {Component} from "react";
import CommentAdd from "../../Video/comment/comment-add";
import CommentList from "../../Video/comment/comment-list";


class CommenstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {id: 1, body: "new Comment for Moition-web it company"},
                {
                    id: 2,
                    body: "news kyrgyzstan bishkek motionWeb Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos id molestiae porro? Consequatur ducimus ipsum quo quos. Consequuntur doloremque ea enim eos in itaque iure libero modi nobis qui? "
                },{
                    id: 2,
                    body: "news kyrgyzstan bishkek motionWeb Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos id molestiae porro? Consequatur ducimus ipsum quo quos. Consequuntur doloremque ea enim eos in itaque iure libero modi nobis qui? "
                },
            ]
        }
    }

    renderComments() {
        const {comments} = this.state;
        return comments.map(comment => {
            const {id, body} = comment
            return (
                <CommentList key={id} body={body}/>
            )
        })
    }

    render() {
        return (
            <div className="w-[100%] px-6 py-10 mb-5 bg-[#282B2E] rounded-[15px]">
                <div className="flex  items-center justify-between">
                    <h1 className="text-white text-[24px] font-bold">КОММЕНТАРИИ</h1>
                </div>
                <div className="   h-[70vh] overflow-scroll">
                    {this.renderComments()}
                </div>
                <div className="relative flex justify-end">
                    <button className="btn2 flex items-center">Удалить <i className="fas fa-trash-alt text-[#9099A3] ml-4"/></button>
                </div>
            </div>

        )
    }
}

export default CommenstPage;


