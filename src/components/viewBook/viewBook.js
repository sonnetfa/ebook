import React from "react";
import './viewBook.css';
import {Tab, Nav, NavLink, NavItem} from 'react-bootstrap';
import HTMLReactParser from "html-react-parser";
class viewBook extends React.Component {    
    
  constructor(props) {
    super(props);
    this.state = {
        pageText: '',
        pageIndex:0
    };
    this.selectTab = this.selectTab.bind(this);
    this.editClicked = this.editClicked.bind(this);
  }
  componentDidMount(){
    this.selectTab(0)
  }
  editClicked(){
     this.props.editClicked(this.state.pageIndex);
  }
  selectTab(index){
      for(let i in this.props.pageDetails){
          if(i===index+""){
              var pageText = this.props.pageDetails[i]['pageText']
              var pageTitle = this.props.pageDetails[i]['pageTitle']
              this.setState({pageText,pageTitle,pageIndex:i})
          }
      }
  }

    render() {
        return (
            <div className="view-book d-flex">
                <Tab.Container>
                <div className="col-sm-3 view-page-titles">
                <Nav onSelect={this.selectTab}>
                    {this.props.pageDetails.map(function (object, i) {
                        return <div   key={i}>
                        <NavItem >
                            <NavLink eventKey={i} >  {object.pageTitle}</NavLink>
                        </NavItem>
                       </div>;
                    })}
                    
                    </Nav>
                </div>
                <div className="col-sm-9 view-page-details">
                    <Tab.Content>
                         <div  key={this.state.pageIndex}>
                            <Tab.Pane eventKey={this.state.pageIndex}>
                                <div className="d-flex justify-content-center">
                                <span className="h4">{this.state.pageTitle}</span>
                                <span className="fa edit-icon" onClick={this.editClicked}></span>
                                </div>
                                <span>{HTMLReactParser(this.state.pageText)}</span></Tab.Pane>
                                </div>
                    
                    </Tab.Content>                    
                    <div className="d-flex">
                        <span onClick={this.props.addNew} className="add-new-btn">Add New Page +</span>
                    </div>
                    </div>
                    </Tab.Container>
            </div>
        )
    }
}
export default viewBook;