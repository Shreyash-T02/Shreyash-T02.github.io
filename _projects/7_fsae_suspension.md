---
layout: page
title: Formula Student — Suspension & Steering
description: Leading a 12-engineer subsystem across three seasons — design, validation, manufacturing, and correlating track data against the vehicle model
img: assets/img/projects/fsae-car.jpg
importance: 6
category: Engineering
---

{% include figure.liquid loading="eager" path="assets/img/projects/fsae-car.jpg" alt="Orion Racing India electric Formula Student car at Formula Student Germany 2022" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  Formula Student Germany, 2022.
</div>

**Orion Racing India** · Suspension & Steering Subsystem Lead · Feb 2021 – Dec 2023

---

### The role

I led a **12-member subsystem team** on an electric Formula Student prototype across three competition seasons, running design reviews and sprint planning, and working across departments to validate integration points and resolve cross-system mechanical issues.

Suspension is an unusually good place to learn systems engineering, because it cannot be designed in isolation. Its hardpoints are constrained by the chassis, its unsprung mass by the drivetrain, its packaging by the bodywork — every decision is a negotiation with another subsystem.

### Design validation

A suspension geometry that only exists in CAD is a hypothesis. Every parameter that mattered was measured on the physical car:

- **Bump steer** — how much the wheels steer themselves through vertical travel
- **Camber and toe** measurement against the design targets
- **Centre of gravity** validation via tilt test, solving for CG height from corner weights and tilt angle
- **Anti-roll bar deflection** measured on the car under load

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/fsae-suspension-components.jpg" alt="Full set of manufactured suspension components — carbon fibre wishbones, uprights, rockers and hubs" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/fsae-machined-uprights.jpg" alt="Machined aluminium upright housings with micrometer for tolerance checking" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the complete suspension and steering set — carbon fibre wishbones, uprights, rockers, hubs. Right: machined housings during post-manufacture tolerance inspection.
</div>

Components were validated to destruction where it mattered: **static testing on the titanium anti-roll bar**, and **three-point bend testing on the carbon fibre suspension rods** to confirm the composite layup carried the loads the model predicted.

### Manufacturing

I modelled and manufactured the suspension and steering components myself in the college workshop and alongside professionals at **Godrej** and **Phillips Machine Tools**, including **4-axis CNC operation**. Processes spanned **gear hobbing** for the steering pinion, **milling** of the aluminium housings for the carbon fibre links, **anodizing**, and self-authored **toolpaths in Fusion 360** for the bevel casing — followed by tolerance inspection and testing on automotive-grade gears.

Owning a part from CAD through machining to inspection changes how you design. Tolerances stop being numbers on a drawing and start being the reason a part does or does not fit.

### Metrology: 3D scanning the chassis

{% include figure.liquid path="assets/img/projects/fsae-chassis-3dscan.jpg" alt="Formula Student space frame chassis covered in 3D scanning reference markers" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  The space frame prepared with reference markers for 3D scanning — the scanned point cloud was compared against the SolidWorks model to quantify manufacturing deviation.
</div>

We **3D scanned the welded chassis** and compared the point cloud against the SolidWorks assembly. Welded tube frames distort as they cool, and suspension hardpoints inherit that distortion — so the geometry the suspension actually sees is not the geometry that was drawn. Quantifying that deviation is the difference between a model that predicts and a model that flatters.

### The technical core: making the model tell the truth

{% include figure.liquid path="assets/img/projects/fsae-suspension.svg" alt="Double wishbone suspension geometry with camber curve and track data versus model correlation" class="img-fluid rounded z-depth-1" %}

The work I value most from this project was **correlating data acquisition logs against the theoretical vehicle model**.

A vehicle dynamics model predicts how the car should behave: how camber changes through travel, how load transfers under cornering, how the steering geometry responds. Then the car goes on track and the DAQ tells you what it *actually* did. Those two curves do not initially match.

Closing that gap is the entire exercise. It means finding which assumptions were wrong — compliance that was modelled as rigid, a friction term that mattered, a load case that never occurred in practice — and correcting the model until it earns the right to predict. Only then can it be used to tune the car for driver performance rather than to justify decisions already made.

**This is the experience that shapes how I approach simulation now.** A simulator that has never been contradicted by hardware is a hypothesis, not a tool.

### Analysis

Across seasons the subsystem work spanned **FEA and modal analysis**, **topology optimisation** for unsprung mass reduction, **FMEA** for failure-mode planning, and **additive manufacturing** for rapid iteration. I also led the **Cost and Manufacturing** event, owning cost analysis, process planning, and the design-for-manufacture decisions behind them.

### Results

{% include figure.liquid path="assets/img/projects/fsae-team.jpg" alt="Orion Racing India team with the car at Formula Student East, Hungary 2023" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  The team at Formula Student East, Hungary, 2023.
</div>

| Competition | Result |
| --- | --- |
| Formula Bharat (India) | **2nd overall — Electric category** |
| Formula Student East (Hungary) | **4th — Cost & Manufacturing** |

<div class="tech-stack">
  <span>Vehicle dynamics</span>
  <span>Data acquisition &amp; correlation</span>
  <span>3D scanning / metrology</span>
  <span>FEA</span>
  <span>Modal analysis</span>
  <span>Topology optimisation</span>
  <span>FMEA</span>
  <span>4-axis CNC</span>
  <span>Composites</span>
  <span>Team leadership</span>
</div>
