import React from "react";
import './addBook.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
class addBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle:this.props.currentPage!=='-1'?this.props.pageDetails[this.props.currentPage]['pageTitle']: '',
            pageText:this.props.currentPage!=='-1'?this.props.pageDetails[this.props.currentPage]['pageText']: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.savePage = this.savePage.bind(this);
    }
    handleChange(e) {
        e.target.name ==='pageTitle'?this.setState({ pageTitle: e.target.value }):this.setState({ pageText:  e.target.value }) ;        
      }
      savePage(){
          let page_details = {
              'pageTitle':this.state.pageTitle,
              'pageText':this.state.pageText
          }
          this.props.savePage(page_details,this.props.currentPage);
      }
    render() {
        return (
            <div className="px-4 py-2 add-book">
                <span className="d-flex py-2 h6 my-0">Page Title</span>
                <input className="w-100 py-1" name='pageTitle' onChange={this.handleChange} value={this.state.pageTitle} placeholder="Page Title" ></input>
                {/* <textarea className="w-100 my-2" name="pageText" value={this.state.pageText} onChange={this.handleChange} /> */}
                <div className="editor my-3">
                    <CKEditor editor={ClassicEditor} data={this.state.pageText} 
                    onChange={(event,editor)=>{
                        const data=editor.getData()
                        this.setState({pageText:data})
                    }}/>
                </div>
                <div className="d-flex">
                    <div className="btn-container">
                    <span onClick={this.savePage} className="py-2 px-3 my-2 mx-2 save-page-btn">SAVE PAGE</span>
                    <span onClick={this.props.clickBack} className="py-2 px-3 my-2 mx-2 back-to-book-btn">BACK TO BOOK</span>
                    </div>
                </div>
            </div>
        )
    } 
}
export default addBook;