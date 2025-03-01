import React from "react";
import { Book, Info } from "lucide-react";

import { Button } from "./components/ui/button";



type SplashProps = {
  handleReady: () => void;
};

const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  return (
    <main className="w-full h-full flex items-center justify-center bg-primary-200 p-4 bg-[length:auto_50%] lg:bg-auto bg-colorWash bg-no-repeat bg-right-top">
      <div className="flex flex-col gap-8 lg:gap-12 items-center max-w-full lg:max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
          Welcome To AI Voice Agency By Ricky!
        </h1>


        <div className="max-w-full lg:max-w-2xl flex flex-col gap-6">
          
          <p className="lg:text-lg text-primary-600">
            <b>Hello, Welcome to AI Voice Agency By Ricky.</b><br></br><br></br>
            <Button onClick={handleReady}>Let's talk with me!</Button><br></br><br></br>
            This voice chatbot was made by <b>Ricky</b>.
            He is a talented AI engineer. He has rich experience in AI engineering including ML intergration, Chatbot development for various AI powerd solutions.
            <br></br>
            <br></br>
            He says "Speed is important for voice AI interfaces. Humans expect fast responses in normal conversation. In this project it showcases low-latency LLM interaction, aiming to achieve 500ms voice-to-voice response times."
          </p>
        </div>

        {/* TODO: Uncomment this line to implement yourself */}


        <div className="h-[1px] bg-primary-300 w-full" />

        <footer className="flex flex-col lg:flex-row lg:gap-2">
          <Button variant="light" asChild>
            <a
              href="https://github.com/RichardFelix999/"
              className="text-indigo-600"
            >
              <Info className="size-6" />
              Go to Ricky's Portfolio
            </a>
          </Button>
          <Button variant="light" asChild>
            <a
              href="https://github.com/RichardFelix999/ai-voice-agency"
              className="text-indigo-600"
            >
              <Book className="size-6" />
              View source code
            </a>
          </Button>
          {/* <Button variant="light" asChild>
            <a
              href="https://docs.cerebrium.ai/v4/examples/realtime-voice-agents"
              className="text-indigo-600"
            >
              <Rocket className="size-6" />
              Follow Me
            </a>
          </Button> */}
        </footer>
      </div>
    </main>
  );
};

export default Splash;
