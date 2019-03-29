import React from 'react';
import { Table } from 'reactstrap';
import Modal from "./Modal"
import Modal2 from "./Modal2"
import Buttones from "./Buttones"
import axios from "axios"



export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
      }
      componentWillMount(){
          axios.get(`http://159.89.143.117:3001/raccoon/feelings`)
          .then(res => {
              console.log(res)
              const post =res.data.feelings
              this.setState({posts:post})
          })
      }
    
     
      render() {
        return (
          <div>
           <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th> Me siento</th>
                <th>Acciones</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post =>
              <tr key={post.id}>
                <th scope="row">#</th>
                <td>{post.desc}</td>
                <td><Modal/></td>
                <td><Buttones/></td>
              </tr>
              )}
              
            </tbody>
          </Table>
        
          
        
          </div>
       
        );
    
      }
    
    }
        
    
    