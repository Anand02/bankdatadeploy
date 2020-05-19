import React from 'react';
import { Badge } from 'reactstrap';
import BanksDataTable from './BanksDataTable';
import DropDown from './DropDown';
import '../components/DataTable.css'


const options = [
  { value: 'BANGALORE', label: 'BANGALORE' },
  { value: 'PUNE', label: 'PUNE' },
  { value: 'MUMBAI', label: 'MUMBAI' },
  { value: 'DELHI', label: 'DELHI' },
  { value: 'KOLKATA', label: 'KOLKATA' },
  
];

const fields = [
  { value: 'ifsc', label: 'IFSC' },
  { value: 'bank_name', label: 'BANK NAME' },
  { value: 'branch', label: 'BRANCH' },
];

class BankDetails extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: false,
        arr:[],
        bankData:[],
        filedvalue:''  
      }
      this.bankNameChange = this.bankNameChange.bind(this)
      this.fieldNameChange = this.fieldNameChange.bind(this)
    }

    //Field Selection
    fieldNameChange(fValue){
        let filedvalue = fValue.value
        const filteredData = this.state.bankData.filter(element => {
          console.log("element",element.bank_name)
          console.log("filedvalue",filedvalue)
          return element.bank_name.includes(filedvalue);
        });
        this.setState({
            filedvalue:filedvalue
        })
    }

    //Bank Selection
    bankNameChange(bankValue){  
      this.setState({ loading: true }, () => {
        let cityName = bankValue.value
        let curl = "https://vast-shore-74260.herokuapp.com/banks?city="+cityName;
        fetch(curl)
        .then(res => res.json())
        .then(json => {
          if(json)
          {
            var arr=[]
            json.map( bank => { arr.push(bank)})
            this.setState({
                bankData:arr,
                loading: false,
            })
          } 
        });
      })
    }

    render() {
      const { loading, bankData } = this.state
      return (
              <div>
                <div className="macs-content">
                  <div className="macs-content-body fade-in-up no-padder">
                    <div className="bg-dark lter b-b rema-cs-xs w-full ">
                        <ol className="breadcrumb bc-1  m-b-none ">
                          <div className="container text-center">
                              <div className="row">
                                <div className="col">
                                  <Badge color="dark" style={{fontSize: 20}}>Get Bank Details</Badge>
                                </div>
                              </div>
                          </div> 
                        </ol>      
                    </div>
                  </div>
                </div>

                <div class="container">
                  <DropDown bankNameChange={this.bankNameChange} fields={fields} options={options} fieldNameChange={this.fieldNameChange} />  
                </div>
                <BanksDataTable bankData={bankData} loading={loading} />       
              </div>
              )}
    }
  export default BankDetails