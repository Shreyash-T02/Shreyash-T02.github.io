---
layout: about
title: about
permalink: /
subtitle: Robotics · Motion Planning · Model-Based Control · Simulation

profile:
  align: right
  image: profiles_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p><strong>M.S. Mechanical Engineering</strong></p>
    <p>University of Southern California</p>
    <p>Los Angeles, CA</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="availability-banner">
  <span class="pulse-dot"></span>
  <span>Actively seeking <strong>Summer 2026 robotics internships</strong> and new-grad roles — planning, controls, and simulation.</span>
</div>

I'm a robotics engineer and M.S. student at **USC**, working on the part of the problem where the math has to survive contact with the physical world: **motion planning, model-based control, and physics simulation**, running on hardware I've actually built and broken.

I did not start in robotics. I trained as a mechanical engineer and spent three years leading the suspension and steering subsystem for a [Formula Student team]({% link _projects/7_fsae_suspension.md %}) — designing it, machining it myself, then correlating data-acquisition logs against the theoretical vehicle model until the two agreed. That taught me something a simulator alone never would: a controller is only as good as the model underneath it, and models lie in specific, findable ways.

The turn came at [GreenDzine]({% link _projects/8_greendzine_tote_carrier.md %}), designing electric warehouse vehicles alongside an R&D team working on **autonomous warehouse robots**. Watching machines deal with a real facility — imperfect maps, unpredictable obstacles, the gap between what a planner assumes and what a floor contains — made the mechanical work feel like one half of a more interesting problem. I've been closing that gap ever since.

### What I'm working on

At the **[Laboratory for Autonomous Systems in Exploration and Robotics (LASER)](https://viterbi.usc.edu/)** with Prof. Keenan Albee, I'm implementing a manipulator on a **microgravity air-bearing free-flyer** — developing the experimental setup and gripper designs to characterize grasping strategies, and working toward autonomously identifying optimal grasp candidates for **in-space manipulation**.

It's an unforgiving regime. Every gripper force is a reaction force on the base, so a bad grasp isn't just a failed pick — it's a disturbance to the whole vehicle.

Before that, I worked with the hardware and propulsion teams at the **[Space Engineering Research Center](https://www.isi.edu/research-groups-serc/)** (USC ISI) on the **Leapfrog lunar lander** prototype, analyzing test data and proposing design iterations to improve landing stability.

### What I care about

Robots that work outside the lab. I'm drawn to problems where **planning under uncertainty** meets real actuators and real noise — manipulation with imperfect state estimates, control that degrades gracefully instead of failing hard, and simulation faithful enough that sim-to-real is engineering rather than luck.

If you're building robots that have to survive the real world, [I'd like to hear about it](mailto:thorats@usc.edu).
