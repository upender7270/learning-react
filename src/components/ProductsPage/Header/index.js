import React from "react";
import { observer } from "mobx-react";

import ProductSort from "./ProductSort";

@observer
class Header extends React.Component {
	render() {
		const { productCount, onSelectSortBy } = this.props;
		return (
			<div className='flex justify-between items-center my-4'>
				<p className='hidden sm:flex' data-testid='products'>
					{productCount} Product(s) found.
				</p>
				<ProductSort onSelectSortBy={onSelectSortBy} />
			</div>
		);
	}
}
export default Header;
