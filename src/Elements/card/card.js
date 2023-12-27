import './card.css'


function Card(params) {
    return <div className=" col-md-6  col-lg-4">
        <div className="card p-3 text-center">
            <h3 className="cardTitle">{params.title}</h3>
            <p className="cardBody">{params.body}</p>
            <button className='btn btn-outline-primary w-25 m-auto'>Submit</button>
        </div>
    </div>   
}

export default Card;