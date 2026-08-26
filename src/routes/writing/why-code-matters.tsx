import { createFileRoute } from "@tanstack/react-router";
import { Figure, Post } from "@/components/Post";
import { posts } from "@/content";
import quote from "@/assets/why-code-matters/quote.png";

export const Route = createFileRoute("/writing/why-code-matters")({
  component: HelloWorld,
});

const meta = posts.find((p) => p.to === "/writing/why-code-matters")!;

function HelloWorld() {
  return (
    <Post title={meta.title} date={meta.date}>
      <p className="font-serif text-gray-500 py-5">
        This is my TED talk from the Fall 2025 Public Speaking Showcase at
        Boston University. Although some of this is already dated, I wanted to
        share it here because it is such a popular topic right now and I think a
        lot of the points in here still hold.
      </p>
      <p>
        <span className="font-serif font-semibold text-white">
          Who remembers when Google Translate first came out?
        </span>{" "}
        It was monumental. Suddenly, hundreds of languages were at your
        fingertips. I could finally speak fluent Swahili! Woohoo! Didn’t we all
        think, “Wow, learning languages is entirely obsolete now! I’ll never
        need to learn another language again!”
      </p>
      <p>
        Well, no, actually, nobody thought that. Because, as we know,
        translating a language is not the same as understanding a language. Just
        knowing the words of a language will never quite replace being able to
        think in that language.
      </p>
      <p>
        Today, we have an even bigger innovation: Large Language Models, or AI
        chatbots that can write code for us. And not just write basic code, but
        effortlessly create websites, apps, and algorithms at a speed that is
        far beyond any human programmer.
      </p>
      <p>
        Someone who has never coded a day in their life now has the programming
        capability of industry software engineers with just a few sentences. And
        for people who have learned to code, they no longer need to write it
        anymore; this new role is called being a “vibe coder”, where you sit
        back and prompt the AI to do the work for you.
      </p>
      <p>
        Overall, this is amazing: the barrier between imagination and reality
        when it comes to software has never been so thin.
      </p>
      <p>
        And just like with Google Translate, some people now ask, “Do we even
        need to learn programming anymore?”
      </p>
      <p>
        It is a fair question. Why would we need to learn a complex language
        when we can effectively create it through our own language, English, via
        an AI interpreter?
      </p>
      <p>
        Let’s look at Google Translate again. When it came out, nobody stopped
        learning languages. Why? Because speaking and thinking in a language is
        fundamentally different from pressing a button and translating words.
      </p>
      <p>
        Programming is no different. Coding is not just a technical skill. It is
        a way of thinking.
      </p>
      <p>
        I’ll tell you what I mean. When you're programming, you quickly learn
        that you can’t do everything all at once. Instead, one fundamental
        lesson is to break every problem down into smaller, solvable
        subproblems. That habit—breaking complexity into manageable pieces—is
        one of the most powerful critical-thinking skills you can develop.
      </p>
      <Figure
        alt="Image showing a problem being broken down"
        src="https://nickjanetakis.com/assets/blog/cards/breaking-down-problems-is-the-number-1-software-developer-skill.jpg"
        caption="This is exactly what happens in your head"
      />
      <p>
        You also learn cause and effect. You learn how to move from “what do I
        want?” to “what do I need to code so that it happens?”. Once you start
        looking at the world through this problem-solving lens, you can’t unsee
        it.
      </p>
      <p>
        And in turn, you become better at understanding problems. Better at
        breaking them down. You realize that almost every problem you have can
        be broken down.
      </p>
      <h2>Perseverance</h2>
      <p>
        Programming also teaches perseverance. One of the first things you learn
        when programming is to try and try again. I am in my third year of CS,
        and I can tell you for a fact, nothing works the first time. Programming
        is a cycle of experimenting, figuring out where you went wrong, and
        trying again. It teaches you resilience in a very hands-on way.
      </p>
      <p>
        So what I am trying to say is that you – yes, you – should go out and
        learn programming. But we also need to be teaching it.
      </p>
      <h2>Teaching</h2>
      <p>
        In the last decade, we’ve seen a significant rise in programming classes
        at the high school level, which means we are introducing more and more
        students to this way of thinking. Great!
      </p>
      <p>
        But this dangerous notion of “AI will just write all code for us” is
        threatening our progress. You have leaders like Jensen Huang, the CEO of
        Nvidia, saying that “programming is dead” and kids should learn to be
        farmers instead.
      </p>
      <Figure
        src={quote}
        alt="Quote from Jensen Huang saying that 'programming is dead' and kids should learn to be farmers instead."
        caption="👏"
      />
      <p>
        If we ignore this AI hype and focus on the real value of programming, we
        can encourage kids to be creative, to be critical thinkers, and to work
        with AI instead of just copying from it.
      </p>
      <h2>Collaboration</h2>
      <p>
        And that last part is really important: we need to remember that working
        with AI is not a one-way street. It’s not “tell the machine what to do,
        and it just magically works.” It’s collaborative. And collaboration
        requires clarity.
      </p>
      <p>
        If you don’t know what you’re actually asking for, the AI won’t give it
        to you. If you don’t understand the structure of the solution, you won’t
        recognize when the AI gets it wrong. And if you don’t understand the
        fundamentals, you can't push the boundaries of what AI can create.
      </p>
      <h2>Conclusions</h2>
      <p>
        The world we are stepping into is not one where AI replaces us, but one
        where AI amplifies us. One where AI lets us dream bigger and turn ideas
        into reality.
      </p>
      <p>
        But this future doesn’t build itself. So learn to code. Watch a tutorial
        video on YouTube. Go borrow a programming book from the library. Take an
        introductory computer science class.
      </p>
      <p>
        You will learn to think like a computer scientist and to work with AI
        like one.
      </p>
      <p>
        Because the more we understand these tools, the more extraordinary the
        world we can create with them.
      </p>
    </Post>
  );
}
