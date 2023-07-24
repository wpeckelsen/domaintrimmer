import PageCard from "../../Components/PageCard/PageCard";

function About(){
    return(

        <>
            <div className="about-page">
        <PageCard

            title="About this website"

            content={<>
                <p>Domain Trimmer! A personal hobby project of Wessel Peckelsen focused on simplifying the process of cleaning lists of messy domains.</p>
                <p>With this tool, you can transform messy domains into concise and visually appealing lists of URLs. </p>
                <p>I've done my best to come up with a smart regex pattern that shaves off the mess and returns a clean result!</p>
            </>}
        />

            </div>
        </>
    )
}

export default About;