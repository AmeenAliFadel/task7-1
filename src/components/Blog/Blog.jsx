import BlogCard from "../BlogCard/BlogCard"
import "./Blog.css"
import pic1 from './../../assets/images/blogThumb1_1.webp'
import pic2 from './../../assets/images/blogThumb1_2.webp'
import pic3 from './../../assets/images/blogThumb1_3.webp'
import smallImg1 from './../../assets/images/blogProfile1_1.webp'
import smallImg2 from './../../assets/images/blogProfile1_2.webp'
import smallImg3 from './../../assets/images/blogProfile1_3.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Blog() {
    return (
        <div className="blog container">
            <div className='title-blog'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <h5>BLOG & NEWS</h5>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className='title-blog2'>
                <h2>Elevating Businesses With IT Ingenuity</h2>
                <div className='buttons'>
                    <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
            <div className="BlogCardDivDad">
                <BlogCard
                    pic={pic2}
                    title={"Uncategorized"}
                    date={"MARCH 14, 2024"}
                    des={"Best And Fastest Data Server Ever "}
                    smallImg={smallImg2}
                    stay={true} />
                <BlogCard
                    pic={pic3}
                    title={"Technology"}
                    date={"MARCH 29, 2024"}
                    des={"Life won't One Beast Air Over Above All "}
                    smallImg={smallImg3}
                    stay={false} />
                <BlogCard
                    pic={pic1}
                    title={"Shared Hosting"}
                    date={"MARCH 24, 2024"}
                    des={"Attentive Was Born In 2015 Help Teams "}
                    smallImg={smallImg1}
                    stay={false} />
            </div>

        </div>
    )
}
