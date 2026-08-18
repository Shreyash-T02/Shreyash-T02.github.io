---
layout: page
title: Flood Rescue Surveillance Quadcopter
description: Model predictive control over a 6-DOF dynamic model, with power and endurance analysis for sustained aerial surveillance
img: assets/img/projects/quadcopter-mpc.svg
importance: 5
category: Engineering
---

{% include figure.liquid loading="eager" path="assets/img/projects/quadcopter-mpc.svg" alt="Flood rescue quadcopter with MPC prediction horizon, cost function, and endurance model" class="img-fluid rounded z-depth-1" %}

**Project Lead** · Mumbai, India · June 2023 – Sept 2023

---

### The problem

In flood rescue, the constraint is rarely the camera — it is loiter time. A quadcopter that can only stay airborne for a few minutes cannot survey a district, and a controller that fights the wind aggressively burns the battery that endurance depends on.

So the design question is not "can it fly the trajectory" but **"can it fly the trajectory without spending energy it does not have"** — which makes it a control problem and a power problem simultaneously.

### Control approach

I implemented a **model predictive controller** inside a physics-based MATLAB simulation, built on a **6-DOF dynamic model** of the airframe.

MPC is the right tool here specifically because it optimises over a horizon rather than reacting instant to instant. At each step it solves for a control sequence minimising

$$J = \sum_{k=1}^{N}\|x_k - x_{ref}\|^{2}_{Q} + \|u_k\|^{2}_{R}$$

then applies only the first input and re-solves. The $$Q$$ and $$R$$ weights make the trade-off explicit and tunable: $$Q$$ penalises **state error**, $$R$$ penalises **control effort**. On a battery-limited vehicle that second term is not a mathematical formality — it is directly proportional to flight time.

A reactive controller has no way to express "get there, but do not thrash the motors." MPC does.

### Power and endurance analysis

Alongside the controller I ran **MATLAB flight simulations** characterising the propulsion chain:

- **Power consumption** across the flight envelope
- **ESC efficiency**, which varies substantially with throttle setting and is easy to assume away
- **Battery discharge behaviour** under realistic mission loads

Together these turned endurance from a specification sheet number into something predicted from the actual duty cycle the mission would impose — and fed back into how aggressively the controller could be tuned.

### Outcome

The simulation showed the MPC formulation tracking the reference trajectory while holding control effort down, with the endurance model quantifying what that restraint bought in flight time. Leading the project also meant owning the integration: airframe, sensing, and control had to agree on the same vehicle model for any of the analysis to mean anything.

<div class="tech-stack">
  <span>Model predictive control</span>
  <span>6-DOF dynamics</span>
  <span>MATLAB / Simulink</span>
  <span>Power &amp; endurance modelling</span>
  <span>Sensor integration</span>
  <span>Team leadership</span>
</div>
