const apiKey = 'tugRQVuSVZlOBIrEkhN2nYEhSnbeaV1dmp_dwR-tbjIYzAidzPPRzxwb7RNC-CVdzLV6nJKAIhsD4IrvPhpsHA6lxDpq50IPvz31uwuSt0uW_kYpLkHSIPWYNIavW3Yx'

 const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response=>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;