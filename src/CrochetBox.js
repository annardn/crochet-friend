import "./style.css";

function CrochetBox(props) {
    return (
        <div  className="crochetBox">
            <div className="title">
                {props.title}
            </div>
            <div className="video">
                <iframe width="560" height="315" src={props.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default CrochetBox;