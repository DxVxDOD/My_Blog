const FirstEntry = () => {
  return (
    <main className={"flex flex-col items-center p-10 gap-10 "}>
      <h1 className={"text-3xl"}>Next.js, the second try</h1>
      <article className={"flex flex-col gap-6 max-w-3xl"}>
        <p>
          A little back story: Around the time when Next.js 13 came out with
          approx. 10 months ago I thought, “Pffff… I know React, I going to
          crush Next.js”.
        </p>
        <p>
          I did not “know” React, truth be told I have only built simple TODO
          apps on the front end using some external APIs. You can imagine how
          little I have understood about Next.js and how their routing system
          works, how to handle client side vs. server-side rendering, how to
          fetch data, and so on.
        </p>
        <p>
          I was completely lost I didn’t get the hype, and naturally, I watched
          videos explaining why Next.js is awesome. No surprise the reasons
          sound good on paper but they didn’t connect with me the way they’ve
          connected with others. That’s not until I watched ThePrimeagen talk
          about how bad it is to be a React developer, not a software developer.
          He gave the perfect example, of how beginners jump directly to Next.js
          because it is cool and shiny but they are not able to appreciate what
          Next.js does under the hood. They can’t even fandom how many layers of
          abstraction are under Next.js’s routing system.
        </p>
        <p>
          That was the moment when it hit me. I have no idea what I am doing, I
          haven’t even built a complex Front-End app let alone a Full-Stack one,
          what am I doing in Next.js?
        </p>
        <p>
          I’ve kept reflecting and I have realized a lot of things. I am not as
          good in React as I thought I was, I don’t know JavaScript as well as I
          thought I knew, and so on.
        </p>
        <p>
          So I have begun my journey to become a better software developer.
          While searching for learning material I stumbled upon the Helsinki
          Full-Stack Open Course. It is a free course provided by the University
          of Helsinki that anyone can take. It is also taught within the
          university so If you want you can apply for the credits after
          completing the course.
        </p>
        <p>
          Taking said course was the best decision ever. Not only did it help me
          escape tutorial hell, but it taught me how to tackle problems and how
          to develop features for my apps. Most importantly it showed me how to
          set up a Back-End with Express.js, basically how one would build a
          Full-Stack web app.
        </p>
        <p>
          While progressing through the course I kept connecting the pieces and
          started to understand why Next.js is attracting so many developers,
          and why it holds such a dominant position in the field.
        </p>
        <span className={'text-3xl flex justify-center font-bold pb-3'} >. . .</span>
        <p>
          To summarize all this, if you are thinking about learning Next.js I
          believe you must have a couple of projects already built and finished,
          have at least one Full-Stack project finished, have the fundamentals
          of JavaScript well-established, and understand React in a more
          in-depth fashion.
        </p>
      </article>
    </main>
  );
};

export default FirstEntry;
