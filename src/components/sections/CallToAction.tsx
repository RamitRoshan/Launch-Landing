import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      
      <Container>
        <div className="relative rounded-2xl overflow-hidden">

          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8 font-semibold">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading-1">
              Quick Start your {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                own AI
              </span>{" "}
              Business
            </h1>

            <Paragraph className="pt-10 text-lg sm:text-xl">
              Leverage our AI-powered platform to revolutionize your digital
              marketing efforts. Get data-driven insights and automation at your
              fingertips.
            </Paragraph>
            
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button className="text-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600 hover:text-white"> Get In Touch</Button>
            </div>

          </div>
          
        </div>
      </Container>

    </section>
  );
};