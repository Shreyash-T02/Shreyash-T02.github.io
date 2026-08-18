---
layout: page
title: In-Space Manipulation on a Microgravity Free-Flyer
description: Implementing a manipulator on an air-bearing free-flyer, with gripper designs and experiments to autonomously identify optimal grasp candidates
img: assets/img/projects/microgravity-freeflyer.svg
importance: 1
category: Research
---

{% include figure.liquid loading="eager" path="assets/img/projects/microgravity-freeflyer.svg" alt="Free-flying microgravity robot with manipulator, reaction torque coupling, and belief uncertainty" class="img-fluid rounded z-depth-1" %}

**USC Laboratory for Autonomous Systems in Exploration and Robotics (LASER)**
Graduate Student Researcher · with Prof. Keenan Albee · Nov 2025 – present

---

### The problem

Nearly every assumption that makes ground manipulation tractable comes from having a floor. A fixed base absorbs reaction forces; gravity gives a consistent preload; friction makes contact predictable. Remove all three and grasping becomes a fundamentally different problem.

On a free-flying robot the base floats. Every torque the arm applies is a torque back on the spacecraft, so reaching for an object rotates the robot away from it. Momentum is conserved across the whole system, which means **the arm and the base have to be considered together**. A grasp that would be trivial on a bench can push the target out of reach, or send the robot tumbling.

That makes the question *"which grasp should I attempt?"* far more consequential in space than on the ground — a bad grasp is not just a failed pick, it is a disturbance to the vehicle.

### What I work on

I am **implementing a manipulator on a microgravity free-flyer air-bearing robot**. An air-bearing testbed floats the robot on a thin cushion of air over a precision flat floor, removing friction in the plane — the standard way to reproduce the free-floating dynamics of orbit in a lab.

My work spans three connected pieces:

- **Developing the experimental setup** that makes grasping on the free-flyer measurable and repeatable, so results reflect the dynamics rather than the rig.
- **Optimized gripper designs** — the gripper is where the manipulation problem is actually won or lost. Its geometry and compliance determine which grasps tolerate the pose error that free-flyer dynamics inevitably introduce.
- **Characterizing grasping strategies** experimentally, and working toward **autonomously identifying optimal grasp candidates** for in-space manipulation — turning grasp selection from a hand-tuned choice into something the robot decides for itself.

### Why it interests me

This sits exactly where I want to work: a problem that cannot be solved purely in simulation or purely in hardware. Grasp selection is an autonomy question, but the answer depends on gripper geometry, contact mechanics, and how much disturbance the base can absorb — all hardware realities.

It is the same lesson from vehicle dynamics — the model and the machine have to be designed against each other — applied in a regime where the penalty for getting it wrong is much less forgiving.

<div class="tech-stack">
  <span>In-space manipulation</span>
  <span>Grasp characterization</span>
  <span>Gripper design</span>
  <span>Air-bearing testbed</span>
  <span>Free-flyer dynamics</span>
  <span>Contact dynamics</span>
  <span>Experimental design</span>
</div>

> This is active research. Detail here is kept to publicly describable scope.
