import event1 from "../png/events/1.png";
import event2 from "../png/events/2.png";
import event3 from "../png/events/3.png";
import event4 from "../png/events/4.png";
import event5 from "../png/events/5.png";
// import event6 from "../png/events/6.png";
import event7 from "../png/events/7.png";
import event8 from "../png/events/8.png";
import event9 from "../png/events/9.png";
import event10 from "../png/events/10.png";
import event11 from "../png/events/11.png";
import event12 from "../png/events/12.png";
import event13 from "../png/events/13.png";
import event14 from "../png/events/14.png";
import event15 from "../png/events/15.png";
import event16 from "../png/events/16.png";
// import HackWave from "./HackWave.pdf";
import hackWave from "../rule/hackWave.pdf";
import robowar from "../rule/robowar.pdf";
import linebot from "../rule/linebot.pdf";
import event6 from "../png/events/linebot.jpg"








const events = [
  {
    image: event1,
    title: "Robo-Wars",
    description: "NITK is proud to present the first-of-its-kind RoboWars event in (<15 kg wireless category) South India, where teams of budding engineers, innovators, and tech enthusiasts from across the nation will come together to test their mettle in the world of robotics. ",
    // subtitle: "Subtitle for Event 1",
    firstCta: "First CTA for Event 1",
    secondCta: "Second CTA for Event 1",
    needRegister: true,
    rule:robowar,
    needRule: true,
  },
  {
    image: event2,
    title: "Bizzwave",
    description: "Get ready to ride the waves of business excitement at Bizzwaves, a thrilling three-day Management Fest packed with a diverse range of events spanning Finance, Human Resource, Marketing, and Analytics. Brace yourself for a whirlwind of knowledge, hands-on workshops, and thought-provoking symposiums. Join us and immerse yourself in the sizzle of business brilliance!",
    // subtitle: "Subtitle for Event 2",
    firstCta: "First CTA for Event 2",
    secondCta: "Second CTA for Event 2",
    needRegister: true,
    rule:hackWave,
    needRule:false, 
  },
  {
    image: event3,
    title: "Gaming",
    description: "Get ready to level up your gaming skills at our exhilarating gaming event! Join us for intense battles in popular titles like B.G.M.I, FIFA, and Valorant, where the competition is fierce, and the adrenaline is high. Whether you're a seasoned pro or a casual gamer, this event promises thrilling gameplay, camaraderie, and the chance to claim gaming glory.",
    subtitle: "Subtitle for Event 3",
    firstCta: "First CTA for Event 3",
    secondCta: "Second CTA for Event 3",
    needRegister: true,
    rule:hackWave,
    needRule: false,
  },
  {
    image: event4,
    title: "Proshowssss",
    description: "Prepare to be spellbound by the electrifying ProShows at ENGI 2023! Our stage is set to come alive with a lineup of extraordinary performances, featuring renowned artists and entertainers who will leave you in awe. From musical sensations to mind-bending illusions, these ProShows are the highlight of our festival, promising an unforgettable night of entertainment, laughter, and memories that will last a lifetime.",
    // subtitle: "Subtitle for Event 4",
    firstCta: "First CTA for Event 4",
    secondCta: "Second CTA for Event 4",
    needRegister: false,
    rule:hackWave,
    needRule: false,
  },
  {
    image: event5,
    title: "HackWave",
    description: "Embark on an exhilarating journey through the vast realm of Computer Science, where we offer you a thrilling blend of real-life challenges and immersive hands-on experiences with cutting-edge topics in Information Technology. Get ready to ignite your passion and unleash your potential in the exciting world of haCKATHON.",
    subtitle: "Subtitle for Event 5",
    firstCta: "First CTA for Event 5",
    secondCta: "Second CTA for Event 5",
    needRegister: true,
    rule:hackWave,
    needRule: true,
  },
  {
    image: event6,
    title: "Line Bot",
    description: "A line follower robot competition challenges participants to build autonomous robots that can follow a predetermined path, typically a black line on a white surface. These competitions focus on robotics, programming, and sensor integration skills. Participants compete to see whose robot can complete the course accurately and efficiently, often incorporating rules for speed and penalties for deviations from the path. ",
    subtitle: "Subtitle for Event 5",
    firstCta: "First CTA for Event 5",
    secondCta: "Second CTA for Event 5",
    needRegister: true,
    rule:linebot,
    needRule: true,
  },
];


export default events;