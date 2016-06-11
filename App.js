import React from 'react';
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 

// var ReactBsTable = require("react-bootstrap-table");
// var BootstrapTable = ReactBsTable.BootstrapTable;
//var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class App extends React.Component {
	constructor(props) {
		super(props);
	// products will be presented by ReactBsTable
	this.state= {
		products: [
	{
		id: 1,
		name: "Product1",
		price: 120
	},{
		id: 2,
		name: "Product2",
		price: 80
	},{
		id: 3,
		name: "Product3",
		price: 207
	},{
		id: 4,
		name: "Product4",
		price: 100
	},{
		id: 5,
		name: "Product5",
		price: 150
	},{
		id: 6,
		name: "Product1",
		price: 160
	}
	]
}
};


render() {
	var selectRowProp = {
  mode: "radio", // or checkbox
  clickToSelect: true
};
	return (
		<div>
		<BootstrapTable data={this.state.products} pagination={true} insertRow={true} deleteRow={true} selectRow={selectRowProp}>
			<TableHeaderColumn isKey={true} dataField="id">Product ID</TableHeaderColumn>
			<TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
			<TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
		</BootstrapTable>
		</div>
		);
}
}

export default App;