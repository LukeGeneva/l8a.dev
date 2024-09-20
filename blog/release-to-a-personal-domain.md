# Release to a Personal Domain: Why You Need a Space That's Yours

description: Benefits of managing your own server for rapid deployment, prototyping, and building tailored solutions efficiently.

Sep 19, 2024

You need a place that is extremely easy to deploy to rapidly; a place where you
can use software that you have developed for yourself. Over time, you may find
that you want to release some projects to the public, and all you have to do at
that point is set the project up to be multi-user and share the URL.

A [nginx](https://www.f5.com/go/product/welcome-to-nginx) server configured to
serve multiple sites from the same box can work wonders for this, and I
recommend that every developer get familiar with managing their own box, or VPS.
You can do this on [Digital Ocean](https://www.digitalocean.com/) for less than
$10 a month, and easily scale up from there if you need to.

## Why Have Your Own Server?

I think there are at least a couple of reasons.

### It's Freeing

This could also be called, "It's Cheap," because I think cheap is very freeing.
Once you have a good setup going and have removed the barriers for deploying
projects and can do so at rapid speed, it really opens you up to solving all
kinds of problems for yourself.

When I started managing my own server, my mindset shifted from trying to create
software that solves problems for everyone to building tools specifically for my
own needs. This led to better software for myself, and often created more
focused, useful solutions for others.

I've long thought that software today is too focused on solving general problems
and should be more focused on solving very specific problems. I think that is
where it is most useful, but that is another post.

### It's Always On, Always Running

Take something like cron jobs. Immensely beneficial, but can be a bit
troublesome to work with in that:

1. Your personal device isn't always on.
2. Managed hosting solutions often make cron jobs tricky or unsupported.

If you work from a desktop or laptop, especially when mobile, your device isn’t
always running. This drove me away from using cron jobs for a long time, even
when they were clearly the right tool.

This limitation vanishes with an always-on server. Your cron jobs run reliably,
without interference.

Managed environments, in my experience, rarely handle cron jobs well. They
either don’t support them, or make setup so cumbersome that it’s not worth the
trouble. Running your own server eliminates these headaches.

### Rapid Prototyping

Maybe the biggest benefit to having your own spot is that, once it's set up, you
have the luxury of rapidly prototyping things, which is really where you want to
be as a programmer, developer, indie hacker, whatever you may call yourself. You
want to dispense with all the cruft and get down to brass tacks, which is
building things.

It's easy to obsess early and often about things that just don't matter, like
deployment. I'd say that it matters insomuch as it provides an easy way to get
things out the door and running. How you get from point A to point B may
"matter" in some sense, but it matters far less than actually getting to point
B. Getting to point B requires doing the work and building. Always be building.

## If You're Building, You're Winning

If there's one thing time has taught me, it's that you have to be building.
Building is moving forward. Building is putting in the work, and there's no
substitute for putting in the work. Obsessing over the details that don't
directly pertain to building is mostly spinning your wheels.

Fantasizing is like playing the lottery. Building is like investing. The
interest compounds over time. Do a little each day. Make a habit of it. You
won't believe where it will take you. But you have to do it. You can't just
think about it. You can't just write or read about it. Doing is the only option.
