const apiKey = 'loGd9_ukzGcroN63d0OR6DIrjkQHbugN_O_grkX_sW18G6GSbFhSTap3CYR-wliVQcHW3oBwIKdIQl8MaSQFqMCKGXB3inI8B8DgNggEqMiZkS5M_8Gq6D9HnrXoW3Yx';

const Yelp = {
	search(term, location, sortBy) 
	{
		const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
		console.log(url);
		return fetch
		(
			url,
			{
				headers: {
					Authorization:`Bearer ${apiKey}`
				}
			}
		).then
		(
			response => {
				return response.json();
			}
		).then
		(
			jsonResponse => {
				if (jsonResponse.businesses) 
				{
					return (jsonResponse.businesses.map(business => {return({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories.alias,
						rating: business.rating,
						reviewCount: business.review_count 	
					});}));					
				}
			}
		);
	}
}

export default Yelp;