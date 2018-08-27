## Adidas Sneaker Product Page
After having an API deprecated from an earlier ecommerce project, I decided to do something similar but this time with a single product as most shopping/ecommerce API's hold data on almost way too many items at times. Additionally, it is quite difficult to find an ecommerce or shopping API for clothes/accessories without having to first sign-up as a partner or affiliate of the site or brand. Notably, many of these API's data is not organized efficiently, so any project requires some manipulation of the data response. Regardless, I chose to do an Adidas sneaker product which, at this time is wildly popular.

[Live Site](https://mighty-hollows-88646.herokuapp.com/)
> As this app is hosted on Heroku's free tier, please give it some time to load. Thank you for your patience.

![alt text](https://github.com/RajisteB/AdidasApp/blob/master/client/src/images/Adidas-SC.png)




#### Technology / Techniques Used
* Node
* Express
* SASS
* Javascript
* React
* Promises
* Third-Party API (Shop.com)
* Adobe Photoshop (Large Hero/Banner Images)
* AdobeXD (UI Mockup)

## Planning & Design
For the design, I once again used AdobeXD to first draw out a low-fidelty wireframe and then added in some visuals to create a high-fidelity wireframe. 


<img src="https://github.com/RajisteB/AdidasApp/blob/master/client/src/images/Lofi.jpg" width="48%" /> <img src="https://github.com/RajisteB/AdidasApp/blob/master/client/src/images/Adidas%20-%20Hi-Fi%20Wireframe.jpg" width="48%"/>


## Development 
Development was very straight-forward, only had 1 minor issue. 
> Parts of this project are still in development, notably the single product (animated) sidebar and corresponding data...

#### Issue(s):
There was a CORS (Cross-Origin Resource Sharing) issue that popped up initially when I hit the api's single product query. It was a bit confusing as all the other api routes worked just fined so I was a bit perplexed as to why exactly this data provider did not enable CORS on this one facet.

#### Solution(s):
I had encountered this issue before and knew that a proxy server could fix things in the meantime, thus, I decided to place all my API calls and logic in a Node/Express backend and have React get access through a proxy server, thus, fixing the issue. 
