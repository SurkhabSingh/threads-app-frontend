import { useState } from "react";

const LandingPage = () => {
  
  const [threads] = useState([
    {
      id: 1,
      user: {
        name: "Jane Cooper",
        username: "janecooper",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      content:
        "Just launched my new portfolio website! Check it out and let me know what you think 🚀",
    },
    {
      id: 2,
      user: {
        name: "Alex Morgan",
        username: "alexm",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      },
      content:
        "The sunrise this morning was absolutely breathtaking. Nature never fails to amaze me 🌅",
    },
    {
      id: 3,
      user: {
        name: "Sarah Wilson",
        username: "sarahw",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      content:
        'Just finished reading "Atomic Habits". Highly recommend it to anyone looking to build better habits! 📚',
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-sm"></header>

      <main className="mx-auto max-w-2xl px-4 py-6">
        <div className="space-y-6">
          {threads.map((thread) => (
            <article
              key={thread.id}
              className="border-b border-neutral-800 pb-6"
            >
              <div className="flex gap-4">
                <img
                  src={thread.user.avatar}
                  alt={thread.user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{thread.user.name}</h3>
                      <p className="text-sm text-neutral-500">
                        @{thread.user.username}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-neutral-500">
                        {thread.timestamp}
                      </span>
                      <button className="text-neutral-500 hover:text-white">
                        •••
                      </button>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed">
                    {thread.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
