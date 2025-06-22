import discord from "../../assets/logos/discord.png";
import openai from "../../assets/logos/openai.png";
import paypal from "../../assets/logos/paypal.png";
import slack from "../../assets/logos/slack.png";
import spotify from "../../assets/logos/spotify.png";
import youtube from "../../assets/logos/youtube.png";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

// const logos = [
//     "discord",
//     "openai",
//     "paypal",
//     "slack",
//     "spotify",
//     "youtube",
// ];

const logos = [
  { name: "discord", src: discord },
  { name: "openai", src: openai },
  { name: "paypal", src: paypal },
  { name: "slack", src: slack },
  { name: "spotify", src: spotify },
  { name: "youtube", src: youtube },
];

export const Brands = () => {
    return(
        <section>
            <Container className="space-y-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Title> Trusted by Industry Leaders</Title>
                </div>

                <div className="flex justify-center flex-wrap gap-4">
                    {logos.map((logo, key) => (
                        <div key={key} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
                        >
                            {/* <img 
                              src={`src/assets/logos/${logo}.png`} 
                              width="100" 
                              height="60"
                              alt={logo}
                              className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" */}
                              <img 
                                src={logo.src}
                                width="100"
                                height="60"
                                alt={logo.name}
                                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}