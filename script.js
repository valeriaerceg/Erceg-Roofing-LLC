// // Replace YOUR_API_KEY with your Yelp API key
// const apiKey = 'YuvwvuoFmTwppSZ3k-oVJvTIF9IxoN-9VtYJ3NHEYQBU-5x9E79uHVIFZTjbTZLazDsXzdoQTSXIpJcJ7nnPGI94HGPOGeg1noyyd5QRQdnmt5UIoFfazcZhnwwcqZHYx';

// // Replace YOUR_BUSINESS_ID with the ID of the business you want to fetch reviews for
// const businessId = 'erceg-roofing-tucson-3';

// // Construct the API endpoint URL
// const endpoint = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

// // Make a GET request to the API using the Fetch API
// fetch(endpoint, {
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     // Extract the reviews from the response
//     const reviews = data.reviews;

//     // Display the reviews on the page
//     const reviewsContainer = document.getElementById('yelp-reviews');
//     reviews.forEach(review => {
//       const reviewHTML = `
//         <div class="review">
//           <p>${review.text}</p>
//           <p class="rating">Rating: ${review.rating} stars</p>
//           <p class="user">${review.user.name}</p>
//           <a href="${review.url}" target="_blank">See on Yelp</a>
//         </div>
//       `;
//       reviewsContainer.innerHTML += reviewHTML;
//     });
//   });

//
$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/target-tucson-2/reviews',
    type: 'GET',
    headers: {
      'Authorization': 'Bearer uvwvuoFmTwppSZ3k-oVJvTIF9IxoN-9VtYJ3NHEYQBU-5x9E79uHVIFZTjbTZLazDsXzdoQTSXIpJcJ7nnPGI94HGPOGeg1noyyd5QRQdnmt5UIoFfazcZhnwwcqZHYx'
    },
    success: function(data) {
      // Extract the reviews from the response
      const reviews = data.reviews;
  
      // Display the reviews on the page
      const reviewsContainer = document.getElementById('yelp-reviews');
      reviews.forEach(review => {
        const reviewHTML = `
          <div class="review">
            <p>${review.text}</p>
            <p class="rating">Rating: ${review.rating} stars</p>
            <p class="user">${review.user.name}</p>
            <a href="${review.url}" target="_blank">See on Yelp</a>
          </div>
        `;
        reviewsContainer.innerHTML += reviewHTML;
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
      alert('Error fetching Yelp reviews');
    }
  });
  