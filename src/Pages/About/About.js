import PageCard from "../../Components/PageCard/PageCard";

function About(){

    //         <div className= {className}>
    //                 <h2>{title}</h2>
    //                 <p>{subtitle}</p>
    //                 <div className="content">{content}</div>
    //             </div>
    return(

        <>
            <div className="about-page">
        <PageCard

            title="About this website"

            content={<>
                <p>Welcome to Domain Trimmer, a personal hobby project of Wessel Peckelsen focused on simplifying the process of cleaning lists of messy domains.</p>
                <p>With this tool, you can transform messy domains into concise and visually appealing lists of URLs. </p>
                <p>I've done my best to come up with a smart regex pattern that shaves off the mess and returns a clean result!</p>
            </>}
        />

            </div>
        </>
    )
}

export default About;