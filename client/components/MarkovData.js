import React, { Component } from 'react';
import DataVisVertical from './DataVisVertical.js';

class MarkovData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createNodes = this.createNodes.bind(this);
  }
  render() {
    

    // nodes and edges are arrays of objects
    let nodes = this.createNodes([this.props.text.split(' ')[0]], this.props.markovModel.wordAssociations);

    return (
      <div style={{ textAlign: 'center' }}>
        { this.props.markovModel ? 
          <DataVisVertical 
            width={1000}
            height={1000}
            rawData={nodes}
          />
        : <div>No data!</div>}
      </div>
    );
  }

  createNodes(firstWord, associationObj) {
    let added = {};
    let nodes = {};
    let depth = 6;
    const helper = (helperWord, howDeep) => {
      let word = String(helperWord);
      if(word && !added[word] && howDeep < depth) {
        added[word] = true;
        let thisNode = {
          name: word
        }
        let associations = associationObj[word]
        if (associations) {
          associations.forEach((assoc) => {
            let nextGen = helper(assoc, howDeep+1);
            if (nextGen) {
              if (thisNode.children) thisNode.children.push(nextGen);
              else thisNode.children = [nextGen];
            }
          })
        }
        return thisNode;
      }
    };
    nodes = helper(firstWord, 0);
    return nodes;
    // return nodes.filter((val) => !!val);
  }
}

export default MarkovData;
