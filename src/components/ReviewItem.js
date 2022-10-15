

function ReviewItem(props) {
    return (
        <>
            <div class="review-item" style={{backgroundImage: `url(${props.src})`}}>
                <div className="review-item__content">
                    <div className="review-item__header">
                        <h4 className="review-item__name">{props.customerName}</h4>
                        <p className="review-item__date">{props.date}</p>
                    </div>
                    <div className="review-item__body">
                        <h2 className="review-item__title">{props.title}</h2>
                        <p className="review-item__text">{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItem