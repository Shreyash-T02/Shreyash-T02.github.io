---
layout: page
title: 5-DOF Package Handling Arm
description: A 700 mm reach, 3 kg payload manipulator designed from torque budget to motion plan for end-of-line automation
img: assets/img/projects/package-handling-arm.svg
importance: 3
category: Engineering
---

{% include figure.liquid loading="eager" path="assets/img/projects/package-handling-arm.svg" alt="5-DOF package handling arm with reachable workspace envelope and joint torque budget" class="img-fluid rounded z-depth-1" %}

**Independent project** · Mumbai, India · Sept 2024 – Jan 2025

---

### The problem

At the end of a paint-can assembly line, filled cans have to move from a conveyor onto a pallet — repetitive, precise, and a bottleneck when done by hand. I set out to design a manipulator for that station end to end: not just the control code, and not just the CAD, but the full path from payload requirement to validated motion plan.

**Requirements:** 700 mm reach, 3 kg payload, ferrous cylindrical parts, industrial cell with fixed obstacles.

### Mechanical design

<div class="row justify-content-sm-center">
  <div class="col-sm-7 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/arm-cad-render.jpg" alt="CAD model of the 5-DOF package handling manipulator showing the base, shoulder and elbow joints" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The CAD assembly — bolted base plate, shoulder and elbow joint housings, and the driven link structure.
</div>

I designed a **5-DOF manipulator in SolidWorks**, choosing five degrees of freedom deliberately — pick-and-place onto a flat pallet does not require full six-DOF orientation control, and dropping the redundant axis removes a motor, a gearbox, and a failure mode.

The end effector is an **electromagnet** rather than a gripper. The parts are steel cans, so magnetic pickup eliminates the alignment tolerance a mechanical jaw would demand and releases instantly on command.

**Actuator sizing** came from a joint-by-joint torque and power analysis accounting for payload, link mass, and dynamic loading during acceleration — not just the static holding case, which is the usual way to under-spec a robot arm. Electronics packaging for the motors, drivers, and controllers was planned into the structure rather than bolted on afterwards.

### Kinematics and control

**Inverse kinematics** were solved to map Cartesian targets to joint angles, which then defined two things that matter more than the solution itself:

- the **reachable workspace** — the actual envelope, not the nominal reach sphere; and
- the **singular configurations** to be avoided, where the arm loses the ability to move in a direction and joint rates spike toward infinity.

Control was implemented with **ROS 2 and MoveIt**, handling motion planning, trajectory generation, and joint control, with waypoint-based sequencing for the pick-and-place cycle.

### Validation

The arm was simulated in **Gazebo** inside a representative industrial cell to confirm collision-free paths and smooth execution of the full cycle before any hardware commitment — catching reachability and interference problems while they were still free to fix.

<div class="tech-stack">
  <span>SolidWorks</span>
  <span>Inverse kinematics</span>
  <span>Workspace analysis</span>
  <span>Singularity avoidance</span>
  <span>Joint torque sizing</span>
  <span>ROS 2</span>
  <span>MoveIt</span>
  <span>Gazebo</span>
</div>
