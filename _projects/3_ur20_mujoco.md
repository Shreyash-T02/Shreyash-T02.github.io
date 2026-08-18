---
layout: page
title: UR20 Assembly Cell in MuJoCo
description: A full ROS 2 manipulation stack — DH kinematics, geometric Jacobian, and damped least-squares IK — driving a UR20 through washing machine assembly
img: assets/img/projects/ur20-mujoco.svg
importance: 1
category: Engineering
github: https://github.com/Shreyash-T02/UR20-washing-machine-assembly-mujoco
---

{% include figure.liquid loading="eager" path="assets/img/projects/ur20-mujoco.svg" alt="UR20 manipulator in MuJoCo with Jacobian matrix and IK convergence plot" class="img-fluid rounded z-depth-1" %}

**Independent project** · Spring 2026
[View the code on GitHub →](https://github.com/Shreyash-T02/UR20-washing-machine-assembly-mujoco)

---

### The problem

Industrial assembly is a good stress test for a manipulation stack because the tolerances are real. Placing a drum into a washing machine chassis is not a free-space reaching problem — it demands accurate kinematics, well-conditioned joint configurations, and a controller that tracks a trajectory rather than approximating it.

I wanted to build that stack myself rather than call into an existing planner, so the kinematics are written from first principles and validated against the simulator.

### What I built

A **ROS 2 Humble** workspace simulating a **Universal Robots UR20** in an assembly cell, with physics running in **MuJoCo 3.x** through the `mujoco_ros2_control` hardware plugin and joint control handled by `ros2_control`'s `JointTrajectoryController`.

Three kinematics nodes run alongside the simulation:

| Node | Subscribes | Publishes |
|---|---|---|
| `fk_node` | `/joint_states` | `/fk/ee_pose` |
| `jacobian_node` | `/joint_states` | `/kinematics/jacobian`, `/kinematics/manipulability` |
| `ik_node` | `/ik/target_pose` | `/…/joint_trajectory` |

**Forward kinematics** are built from a Denavit–Hartenberg parameterisation, producing the full transform chain to the end effector.

**The geometric Jacobian** is computed live, and from it a manipulability index $$w = \sqrt{\det(JJ^{T})}$$ — a scalar that collapses toward zero as the arm approaches a singularity. Watching it drop as the arm extends is the clearest possible signal that a configuration is about to become uncontrollable.

**Inverse kinematics** uses **damped least squares**, which trades a small amount of tracking accuracy for numerical stability near singularities — exactly where a naive pseudo-inverse blows up:

$$\Delta q = J^{T}\left(JJ^{T} + \lambda^{2}I\right)^{-1}\Delta x$$

with $$\lambda = 0.05$$, iterating to a 1 mm position and ~0.57° orientation tolerance.

### Results

- **Sub-millimetre convergence** on reachable Cartesian targets, verified by a round-trip test: command a pose, read the FK output back, feed it in as a new IK target, and confirm the arm does not move.
- **FK agrees with TF2 to within ~1 mm**, cross-checked against `tf2_echo` rather than trusted on its own.
- **Joint states publish at 500 Hz**, with trajectories tracked smoothly through the controller.
- **Fully containerised** — `docker compose up` reproduces the entire environment, MuJoCo build included, so the result does not depend on my machine.

### What I learned

The bugs were rarely in the maths. A single-shot IK target would silently vanish because ROS 2's default VOLATILE QoS drops messages published before DDS discovery completes — a distributed-systems problem wearing a robotics costume. Getting a simulator, a control framework, and a physics engine to agree on time, frames, and units is most of the actual work.

<div class="tech-stack">
  <span>ROS 2 Humble</span>
  <span>MuJoCo 3.x</span>
  <span>ros2_control</span>
  <span>Damped least squares IK</span>
  <span>DH kinematics</span>
  <span>Python</span>
  <span>Docker</span>
  <span>RViz2</span>
</div>
