import MotionHoc from "./MotionHoc";
import "./Interests.scss"
import styled from "styled-components";

const Interest = styled.div`
display:flex;
width:100vw;
height:100vh;
background-color: #dabfde;
`;

const InterestsComponent = () => {
    return (
        <Interest>
        <section id="timeline">
            <div className="tl-item">
                
                <div className="tl-bg"><img src="https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200"/></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif">Art</p>
                </div>

                <div className="tl-content">
                <h1>Doodling Away</h1>
                <p>I thoroughly enjoy making doodles. It really brings out my creative side. I also occassionally enjoy sketching and painting.</p>
                </div>

            </div>

            <div class="tl-item">
                
                <div class="tl-bg"><img src="https://img3.goodfon.com/wallpaper/nbig/a/ba/smoke-dancer-dym-devushka-tanec.jpg" width="700px" height="700px"/></div>
                
                <div className="tl-year">
                <p class="f2 heading--sanSerif">Dance</p>
                </div>

                <div class="tl-content">
                <h1 class="f3 text--accent ttu">Like no one's Watching</h1>
                <p>If theres music, there needs to be a tap. I have enjoyed dancing as a child and even more so now. I forget my worries in the rhythm of the music. I have performed at some school and university events too and they are some of my best memories.</p>
                </div>

            </div>

            <div class="tl-item">
                
                <div class="tl-bg"><img src="https://i.pinimg.com/736x/6d/4b/80/6d4b809a6e1fb3745e7d76caee55a55c.jpg" height="850px"/></div>
                
                <div class="tl-year">
                <p class="f2 heading--sanSerif">Formula1</p>
                </div>

                <div class="tl-content">
                <h1 class="f3 text--accent ttu">Drive to Survive</h1>
                <p>Perseverance. Diligence. Determination. <br/>If there is an example of these words it perhaps has to be this. The tension is real. But thats what makes it the real deal.</p>
                </div>

            </div>

            <div class="tl-item">
                
                <div class="tl-bg"><img src="https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                
                <div class="tl-year">
                <p class="f2 heading--sanSerif">Film Fanatic?</p>
                </div>

                <div class="tl-content">
                <h1 class="f3 text--accent ttu">Here's Johnny!</h1>
                <p>If the pandemic has taught me something its that movies and tv shows are a man's best friend. I.E. after dogs and books ofcourse. I enjoy watching well made cinema, it definitely is like the ice cream on top feeling. </p>
                </div>

            </div>
        </section>
</Interest>
    )
}
const Interests = MotionHoc(InterestsComponent);

export default Interests;
