import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-list">
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-heading">{title}</p>
      <p className="similar-product-brand">by {brand}</p>
      <div className="similar-product-container">
        <p className="similar-product-price-heading">Rs {price}</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            className="similar-product-star"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
