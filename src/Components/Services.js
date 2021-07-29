import React from 'react'
import  "./Services.css"

const services = [
    
    {
        title: "Eye surgery",
        text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum officiis sapiente vero dicta nam et unde. Quaerat, eveniet ducimus natus dignissimos quidem nobis mollitia, facere eaque maiores molestias veritatis.",
        id:1,

    },
    {
        title: "Cancer diagnosis",
        text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum officiis sapiente vero dicta nam et unde. Quaerat, eveniet ducimus natus dignissimos quidem nobis mollitia, facere eaque maiores molestias veritatis.",
         id: 2,
    },
    {
        title: "Medical treatment",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum officiis sapiente vero dicta nam et unde.Quaerat, eveniet ducimus natus dignissimos quidem nobis mollitia, facere eaque maiores molestias veritatis.",
        id: 3,
    },
    {
        title: "Home healthcare",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum officiis sapiente vero dicta nam et unde.Quaerat, eveniet ducimus natus dignissimos quidem nobis mollitia, facere eaque maiores molestias veritatis.",
        id: 4,
    },
]

const Services = () => {
    return (
        <section className="services_container">
            <h1 className="section_title">Services we offer</h1>

            <div className="services">
                <div className="">
                    {services.map(({title,text,id}) => {
                        return (
                            <div key={id}  className="single_service">

                                <h2 className="sevice-title">{title}</h2>
                                <p className="service-info">{text}</p>
                            </div>
                            )
                    })}
                   
                </div>
            </div>

        </section>
    )
}

export default Services
