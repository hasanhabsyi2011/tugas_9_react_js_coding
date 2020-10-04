import React from 'react';
import './css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import PageNavBar from './component/PageNavBar'
import PageBreadcrumb from './component/PageBreadcrumb'
import PageButton from './component/PageButton'
import PagePagination from './component/PagePagination'
import PageTable from './component/PageTable'
import PageTabs from './component/PageTabs'
import PageCollapse from './component/PageCollapse'
import PageSpinner from './component/PageSpinner'






class App extends React.Component{


render(){
  return (

    <>
      <PageNavBar />

      <PageBreadcrumb />
      <PageSpinner/>

      <PageTabs />
      <br/>
      <PageTable />
      <br/>

      <PagePagination/>
      <Container>
              <Row>
                <Col md={1}><PageButton/></Col>
                <Col md={2}><PageCollapse/></Col>
              </Row>
      </Container>
      <br/><br/>
    </>


  )
 }
}
export default App;
