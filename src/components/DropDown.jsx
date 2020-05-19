import React from 'react';
import Spinner from './Spinner';
import Select from 'react-select';

class DropDown extends React.Component {

    render()
    {
        return(
            <div class="row">
                <div class="col-sm-3">
                    <Select
                        onChange={this.props.bankNameChange}
                        options={this.props.options}
                        placeholder="Select City"/>
                </div>
                <div class="col-sm-3">
                    <Select
                        onChange={this.props.fieldNameChange}
                        options={this.props.fields}
                        placeholder="Select Fields"/>
                </div>
            </div>
        )}
}

export default DropDown