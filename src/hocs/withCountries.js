import React from 'react'

// WithCountries using render prop technique
class WithCountries extends React.Component {
   state = {
      countries: []
   }

   componentDidMount() {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(response => {
            return response.json()
         })
         .then(json => {
            this.setState({
               countries: json
            })
         })
   }
   render() {
      const { countries } = this.state
      if (this.state.countries.length === 0) {
         return <div>Countries list is loading</div>
      }
      // return <WrappedComponent countries={countries} {...this.props} />;
      return this.props.children({ countries: countries })
   }
}

export { WithCountries }
