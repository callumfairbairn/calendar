# Writeup

## Overview

This was a surprisingly challenging task! A fun one though. I think my solution
is ok, but I would make improvements if I were to spend longer on it. I normally use
TDD and have full test coverage, but due to the fact that the UI is not interactive,
I didn't feel that it was necessary here. I did however TDD the addRows function as it
is the highest complexity part of the app - the rest is mostly styling. I think tests
are great - they give you the security to refactor at will whilst knowing that you
haven't lost any functionality and act as living documentation, but here I didn't think
that they were appropriate.

## Design decisions

I chose to use Tailwind as it's quick to set up, very customisable and easy to tweak styles
for experimentation purposes. However, it didn't completely suit my needs which is why I 
had to use inline styles occasionally. I would rather not two methods of styling, and given
more time I would try to remedy this.

I favour readability over conciseness, which is why I preferred to write the Hours as
```
<Hour>07:00</Hour>
<Hour>08:00</Hour>
<Hour>09:00</Hour>
<Hour>10:00</Hour>
...
```
Given the fact that we're telling the app how many hours there are on the calendar (it's
not dynamic), I'd prefer simplicity like this over a map. A map would reduce duplication,
but would increase cognitive load when someone else (or me in the future) is reading the code.

I tried to extract any logic which is not immediately comprehensible into a single
responsibility function or variable to help readability. I'm aware that reducers can be
hard to understand, but I needed access to the most recent updated value in my map
so that I could calculate the correct row which an event should be in.

## Challenges

For me, the most challenging part was making sure that events were rendered side by
side when they overlap. I created two columns, and put events in the second column if they
would overlap with an event in the first column. This isn't great as it only allows for two
overlapping events at any one time. With more time, I would have solved this issue by making
the number of columns dynamic based on the highest number of overlapping events.

## Other things I'd do differently

In a lot of places, I have hardcoded values such as "20px", "3rem" etc. This isn't great as
it makes the app much less responsive to different screen widths, and harder to extend. 
If I were to carry on working on this project, I would centralise spacing values, and 
make them all change together as the screen width hits different breakpoints.

Another issue is long event titles. I have locked event bubble heights into place so that a long
title doesn't accidentally increase the length of an event making it seem like it lasts for longer
than it does, but text can still overflow. I would try to minimise this by reducing text size if
it is about to overflow.

## Feedback

I thought this was a good challenge - it wasn't too easy, and it made me think
a lot which is good. It tested my CSS and algorithmic skills, but I think it was
pretty heavy on the CSS. It would have been nice to have a problem which was easier
to render, but had some kind of user interface so that I could use React state changes,
useEffect, React Testing Library etc. (which is incidentally the part of Frontend 
development which I enjoy the most!).
