import React from 'react';
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';
import Spinner from './Spinner';

class BanksDataTable extends React.Component
{ 
    render(){
      return(
          <div className="rema-cs-md wrapper-md" >
            <div className="col-md-12 mbsc no-padder">
              <div className="macs-content-body fade-in-up" >
                  <div className="panel panel-default m-b-none dt_hide">   
                    { 
                      this.props.loading ? 
                      <Spinner /> : 
                      <BootstrapTable headerStyle={ { borderTop: '#DDDDDD 0.1px solid' } } height='435' data={this.props.bankData}  search={true} pagination >

                           <TableHeaderColumn dataField='ifsc' width='150' dataAlign="center" dataSort={true}  isKey={ true }>IFSC Code</TableHeaderColumn>
                         <TableHeaderColumn dataField='bank_id'width='100' dataAlign="center" dataSort={true} >Bank ID</TableHeaderColumn>
                         <TableHeaderColumn dataField='branch' width='300' dataAlign="center" dataSort={true} >Branch Name</TableHeaderColumn>
                         <TableHeaderColumn dataField='address' width='550'  dataAlign="center" dataSort={true} >Address</TableHeaderColumn>
                         <TableHeaderColumn dataField='city' width='200' dataAlign="center" dataSort={true} >City</TableHeaderColumn>
                         <TableHeaderColumn dataField='district' width='200' dataAlign="center" dataSort={true} >District</TableHeaderColumn>
                         <TableHeaderColumn dataField='state' width='150' dataAlign="center" dataSort={true}>State</TableHeaderColumn>
                         <TableHeaderColumn dataField='bank_name' width='300' dataAlign="center" dataSort={true}>Bank Name</TableHeaderColumn>

                      </BootstrapTable>
                    //   <BootstrapTable  tableContainerClass='my-custom-class' tableStyle={ { background: '#E9ECEF' } } pagination  headerStyle={ { borderTop: '#DDDDDD 0.1px solid' } } data={ this.props.bankData }  search={true} >
                    //     <TableHeaderColumn dataField='ifsc' width='150' dataAlign="center" dataSort={true}  isKey={ true }>IFSC Code</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='bank_id'width='100' dataAlign="center" dataSort={true} >Bank ID</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='branch' width='300' dataAlign="center" dataSort={true} >Branch Name</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='address' width='550'  dataAlign="center" dataSort={true} >Address</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='city' width='200' dataAlign="center" dataSort={true} >City</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='district' width='200' dataAlign="center" dataSort={true} >District</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='state' width='150' dataAlign="center" dataSort={true}>State</TableHeaderColumn>
                    //     <TableHeaderColumn dataField='bank_name' width='300' dataAlign="center" dataSort={true}>Bank Name</TableHeaderColumn>
                    //   </BootstrapTable>
                    }                      
                  </div>
              </div>
            </div>
          </div>
        )}
}

export default BanksDataTable