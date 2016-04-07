import React from 'react';
import DocActions from '../../actions/DocumentActions';
import DocStore from '../../stores/DocumentStore';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';


class DocsList extends React.Component {
  constructor(props) {
    super(props);
    this.getUserDocs = this.getUserDocs.bind(this);
    this.state = {
      docs: []
    }
  }

  componentDidMount() {
    let token = window.localStorage.getItem('token');
    let userId = window.localStorage.getItem('userId');
    DocActions.getUserDocs(userId, token);
    DocStore.addChangeListener(this.getUserDocs);
  }

  getUserDocs() {
    let data = DocStore.getUserDocs();
    if (data) {
      this.setState({
        docs: data
      });
    }
  }

  render() {
    let renderDoc = function(doc) {
      return (
        <div key={doc._id}>
          <Card style={{margin: 15}}>
            <CardHeader
              title={doc.title}
              subtitle={"Created on "+ new Date(doc.dateCreated).toLocaleDateString()}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              {doc.content}
            </CardText>
            <CardActions expandable={true}>
              <FlatButton label="Edit"/>
              <FlatButton label="Delete"/>
            </CardActions>
          </Card>
        </div>
      );
    }
    return (
      <div>
        {this.state.docs.map(renderDoc)}
      </div>
    );
  }
}

export default DocsList;