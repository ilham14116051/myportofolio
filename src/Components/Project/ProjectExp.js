import 'bootstrap/dist/css/bootstrap.min.css';


function CardProject(props) {
    return (
        <div className="project mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={props.image} className="img-fluid rounded-start logo" alt="logo" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.detail}</p>
                        <p className="card-text"><small class="text-muted">At {props.location} ( {props.date} )</small></p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}

function Project() {
    return (
        <div>
            <CardProject 
                title="Intern Full-stack web development"
                image="Images/boga.png"
                detail="Web-based inventory information system"
                location="PT. Boga Berkah Lestari"
                date="September, 2021 - October, 2021"
            />
            <CardProject title="Project Final Full-stack web development"
                image="Images/lampungpet.png"
                detail="Web-based veterinary medical record information system"
                location="Lampung Pet Clinic"
                date="January, 2022 - July, 2022"
                />
        </div>
    );
}

export default Project;

