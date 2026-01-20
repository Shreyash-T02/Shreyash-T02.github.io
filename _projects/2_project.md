---
layout: page
title: Package Handling Robotic Arm for Pick and Place Operations
description:  Design and control of 5 DOF Robotic Manipulator with electro magnetic end effector 
              Passion Project | September 2024 – January 2025 | Mumbai, India
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---
In this project, I have designed a 5DOF Package handling robot to be deployed at the end  of an assembly line in order to boost productivity. The robot is equipped with an electromagnetic end effector to efficiently and accurately move the packed product(paint cans) to its appropriate  location.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    TMechanical build 
</div>

Description:

-> Designed a 5-DOF robotic manipulator for automated pick-and-place operations with a 700 mm reach and 3 kg payload capacity.

-> Performed torque and power calculations for each joint to support motor selection, considering payload, link mass, and dynamic loading; planned electronics packaging for motors, drivers, and controllers.

-> Performed Inverse Kinematics (IK) analysis to calculate joint angles, define the workspace, and avoid kinematic singularities.

-> Integrated ROS 2 with MoveIt for motion planning, trajectory generation, and joint control.

-> Simulated the robotic arm in Gazebo to validate collision-free paths and smooth pick-and-place execution in a industrial cell environment.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>
Technologies Used:

-> SolidWorks (Mechanical Design & Assembly)
-> ROS 2
-> MoveIt Motion Planning Framework
-> Gazebo Simulation
-> Inverse Kinematics & Workspace Analysis
-> Robot Control & Trajectory Planning(Waypoint control)

{% endraw %}
