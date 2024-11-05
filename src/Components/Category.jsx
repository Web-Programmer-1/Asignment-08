import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({categoryItem }) {

    const {image,id, title} = categoryItem
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/AllData/${id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
