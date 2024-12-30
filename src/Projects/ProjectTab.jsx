import Carousel from "../CarouselComponent/Carousel";
import Title from "../Title";

export default function ProjectTab(){
    let styles={
        // backgroundColor:"#F0F0F0"
    }
    return(
        <div style={styles}>
         
            <Title Title="Projects"/>
            <Carousel/>
        </div>
    );
}