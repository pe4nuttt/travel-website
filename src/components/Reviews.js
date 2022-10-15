import './Reviews.css'
import ReviewItem from './ReviewItem'

function Reviews() {
    return (
        <div className="review">
            <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>
            <div className="review__container">
                <ul className="review__items">
                    <ReviewItem
                        src="images/customer-1.jpg"
                        customerName="Kyle Walker" 
                        date="May 24, 2020"
                        title="Best holliday ever"
                        text="Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec."
                    />
                    <ReviewItem
                        src="images/customer-2.jpg"
                        customerName="Kyle Walker" 
                        date="May 24, 2020"
                        title="Best holliday ever"
                        text="Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec."
                    />
                    <ReviewItem
                        src="images/customer-3.webp"
                        customerName="Kyle Walker" 
                        date="May 24, 2020"
                        title="Best holliday ever"
                        text="Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec."
                    />
                    <ReviewItem
                        src="images/customer-4.webp"
                        customerName="Kyle Walker" 
                        date="May 24, 2020"
                        title="Best holliday ever"
                        text="Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Reviews