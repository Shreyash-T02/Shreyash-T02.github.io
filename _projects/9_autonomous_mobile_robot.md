---
layout: page
title: Autonomous Mobile Robot — Localization, Planning & Control
description: Particle filter localization from LIDAR scan matching, an RRT planner with shortcut smoothing, and dual-axis PID closing the sense–plan–act loop
img: assets/img/projects/mobile-robot-nav.svg
importance: 2
category: Engineering
github: https://github.com/Shreyash-T02/Project_CSCI445
---

{% include figure.liquid loading="eager" path="assets/img/projects/mobile-robot-nav.svg" alt="Autonomous mobile robot with particle filter localization, RRT tree, smoothed path, and PID control loop" class="img-fluid rounded z-depth-1" %}

**University of Southern California** · CSCI 445 · Sept 2025 – Dec 2025

---

### The problem

An autonomous ground robot has to answer three questions continuously, and each one depends on the answer to the last: *Where am I? How do I get there? What do I command right now?*

The hard part is that none of the answers are exact. Odometry drifts. LIDAR returns are noisy. A path that was collision-free when planned may not be safe by the time the robot reaches it. I built all three layers — localization, planning, and control — as a single closed loop rather than three isolated exercises.

### Localization — particle filter

I implemented a **particle filter** localizing the robot on a known 2D occupancy map using **LIDAR scan matching**.

Each particle is a pose hypothesis. The motion model propagates them on odometry; the measurement model scores each one by how well the LIDAR scan it *would* see matches the scan actually observed. Resampling then concentrates particles where the evidence is strongest.

I used **low-variance resampling** specifically, rather than naive multinomial resampling. Naive resampling adds sampling noise that can discard good hypotheses purely by chance and accelerate particle deprivation; low-variance resampling draws with a single random offset across a systematic comb, which preserves diversity and is O(N) instead of O(N log N).

**Result:** pose convergence within a few exploratory motions, validated in **Gazebo** and visualised in **RViz**. The robot has to move to localize — a stationary robot in a symmetric corridor genuinely cannot tell where it is, and watching the particle cloud collapse the moment it rounds a corner is the clearest demonstration of that.

### Planning — RRT

I built a **rapidly-exploring random tree** planner over the same map:

- **Obstacle-padded collision checking** — obstacles are inflated by the robot's footprint plus a margin, so the planner can treat the robot as a point and still produce paths a physical robot can follow.
- **Shortcut smoothing** — raw RRT output is famously jagged, because it is built from random samples. A post-processing pass repeatedly attempts to connect non-adjacent waypoints directly, keeping the shortcut whenever the straight segment is collision-free.
- **Waypoint densification** — the smoothed path is re-sampled into closely spaced waypoints so the controller receives a continuous reference rather than sparse corners.
- **A reactive safety layer** monitors forward LIDAR returns independently of the plan, because a planner working from a static map cannot see anything that was not there when the map was made.

**Result:** consistently generated collision-free paths to goal in simulation.

### Control — dual-axis PID

A **dual-axis PID controller** regulates **heading** and **velocity** separately, publishing to ROS topics inside a closed sense–plan–act loop.

Splitting the axes matters: heading error and distance error have different units, different dynamics, and different failure modes. Coupling them into one gain makes a controller that either turns too slowly or overshoots on approach. Separated, the robot can turn toward the waypoint aggressively while approaching it conservatively.

Because localization runs continuously against LIDAR, the loop **corrects for odometry drift in real time** — the controller tracks the filtered pose estimate, not dead reckoning. This is the payoff for building all three layers together: drift that would compound without correction gets absorbed every cycle.

<div class="tech-stack">
  <span>Particle filter</span>
  <span>LIDAR scan matching</span>
  <span>Low-variance resampling</span>
  <span>RRT</span>
  <span>Path smoothing</span>
  <span>PID control</span>
  <span>ROS</span>
  <span>Gazebo</span>
  <span>RViz</span>
  <span>Python</span>
</div>
