---
layout: page
title: Thrust-Vectored Model Rocket
description: Active thrust vector control with gyroscope feedback and servo-actuated recovery — 384 N peak thrust, 320 N·s total impulse
img: assets/img/projects/tvc-rocket.svg
importance: 4
category: Engineering
---

{% include figure.liquid loading="eager" path="assets/img/projects/tvc-rocket.svg" alt="Thrust-vectored model rocket with gimbal geometry, PID feedback loop, and measured thrust curve" class="img-fluid rounded z-depth-1" %}

**Project Lead** · Mumbai, India · July 2024 – Dec 2024
Pre-print: [*Design and Development of a Model Rocket with Recovery System and Thrust Vectoring for Enhanced Performance and Stability*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5012956) — SSRN

---

### The problem

A conventional model rocket is stabilised by fins, which means it is only stable once it is moving fast enough for those fins to bite. In the first moments after ignition — the lowest-speed, highest-consequence part of the flight — it is effectively uncontrolled.

**Active thrust vector control** removes that dependency. By gimballing the motor itself, the vehicle can correct attitude from the instant of ignition, when aerodynamic surfaces do nothing at all.

### Control architecture

The motor is mounted in a **two-axis gimbal driven by servos**, with attitude sensed by a **gyroscope**. A **PID loop** closes between measured angular rate and commanded gimbal deflection.

The key design insight is the sign of the feedback: thrust vectoring is an inherently unstable configuration. The thrust vector acts *below* the centre of mass, so any deflection is self-amplifying unless the controller actively opposes it — the rocket is balancing on its exhaust, and the loop has to run fast enough to win that race.

### Recovery

A **servo-actuated parachute deployment system** handles recovery. Recovery is where most amateur rockets are actually lost, so it was treated as a primary subsystem rather than an afterthought: deployment reliability was tested independently of flight, because a recovery system that only works when everything else does is not a recovery system.

### Test campaign

Ground and static tests validated three things separately — thrust vectoring response, recovery deployment reliability, and overall stability under launch conditions.

**Measured results:**

| Metric | Value |
|---|---|
| Peak thrust | **384 N** |
| Total impulse | **320 N·s** |

Static testing matters here for the same reason it matters in propulsion generally: it decouples "did the motor perform as expected" from "did the controller respond correctly", so a bad flight has a diagnosable cause instead of a single ambiguous failure.

### What I took from it

This was my first real experience of a control loop where instability is the default state and the software is the only thing preventing it. It also made the case for instrumentation — without thrust data, "it flew badly" is an opinion; with it, it is a number you can design against.

<div class="tech-stack">
  <span>Thrust vector control</span>
  <span>PID control</span>
  <span>IMU / gyroscope</span>
  <span>Servo actuation</span>
  <span>CAD &amp; 3D printing</span>
  <span>Static testing</span>
</div>
