import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';


class BusinessList extends React.Component {
	render() {
		console.log(typeof this.props.businesses);
		const businessList = this.props.businesses.map(business => {return (<Business business={business} key={business.key} />)});
		return(
			<div className="BusinessList">
			{businessList}
			</div>
		)
	}
}

export default BusinessList;