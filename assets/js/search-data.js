// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Robots, controllers, and the simulations that had to agree with hardware — research first, then the engineering that got me there.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Experience, education, and skills. Download the one-page PDF from the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-wrapped-the-thrust-vectored-model-rocket-384-n-peak-thrust-and-320-n-s-total-impulse-across-the-static-test-campaign-rocket",
          title: 'Wrapped the thrust-vectored model rocket: 384 N peak thrust and 320 N·s total...',
          description: "",
          section: "News",},{id: "news-started-my-m-s-in-mechanical-engineering-at-usc-and-joined-the-laser-lab-with-prof-keenan-albee-working-on-microgravity-robotics",
          title: 'Started my M.S. in Mechanical Engineering at USC and joined the LASER lab...',
          description: "",
          section: "News",},{id: "news-joined-the-space-engineering-research-center-at-usc-isi-as-a-graduate-student-researcher-on-the-leapfrog-lunar-lander-prototype",
          title: 'Joined the Space Engineering Research Center at USC ISI as a Graduate Student...',
          description: "",
          section: "News",},{id: "news-released-the-ur20-assembly-cell-a-ros-2-mujoco-manipulation-stack-with-damped-least-squares-ik-converging-to-sub-millimetre-error-mechanical-arm",
          title: 'Released the UR20 assembly cell — a ROS 2 + MuJoCo manipulation stack...',
          description: "",
          section: "News",},{id: "projects-in-space-manipulation-on-a-microgravity-free-flyer",
          title: 'In-Space Manipulation on a Microgravity Free-Flyer',
          description: "Implementing a manipulator on an air-bearing free-flyer, with gripper designs and experiments to autonomously identify optimal grasp candidates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_microgravity_freeflyer.html";
            },},{id: "projects-leapfrog-lunar-lander",
          title: 'Leapfrog Lunar Lander',
          description: "Test-data analysis and design iteration on a thrust-controlled powered-descent prototype",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_leapfrog_lander.html";
            },},{id: "projects-ur20-assembly-cell-in-mujoco",
          title: 'UR20 Assembly Cell in MuJoCo',
          description: "A full ROS 2 manipulation stack — DH kinematics, geometric Jacobian, and damped least-squares IK — driving a UR20 through washing machine assembly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_ur20_mujoco.html";
            },},{id: "projects-5-dof-package-handling-arm",
          title: '5-DOF Package Handling Arm',
          description: "A 700 mm reach, 3 kg payload manipulator designed from torque budget to motion plan for end-of-line automation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_package_handling_arm.html";
            },},{id: "projects-thrust-vectored-model-rocket",
          title: 'Thrust-Vectored Model Rocket',
          description: "Active thrust vector control with gyroscope feedback and servo-actuated recovery — 384 N peak thrust, 320 N·s total impulse",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_tvc_rocket.html";
            },},{id: "projects-flood-rescue-surveillance-quadcopter",
          title: 'Flood Rescue Surveillance Quadcopter',
          description: "Model predictive control over a 6-DOF dynamic model, with power and endurance analysis for sustained aerial surveillance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_quadcopter_mpc.html";
            },},{id: "projects-formula-student-suspension-amp-steering",
          title: 'Formula Student — Suspension &amp;amp; Steering',
          description: "Leading a 12-engineer subsystem across three seasons — design, validation, manufacturing, and correlating track data against the vehicle model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_fsae_suspension.html";
            },},{id: "projects-warehouse-tote-carrier-vehicles",
          title: 'Warehouse Tote-Carrier Vehicles',
          description: "Designing electric intralogistics vehicles for 100,000+ sq ft warehouses — and the R&amp;D floor that moved me from mechanical design into robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_greendzine_tote_carrier.html";
            },},{id: "projects-autonomous-mobile-robot-localization-planning-amp-control",
          title: 'Autonomous Mobile Robot — Localization, Planning &amp;amp; Control',
          description: "Particle filter localization from LIDAR scan matching, an RRT planner with shortcut smoothing, and dual-axis PID closing the sense–plan–act loop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_autonomous_mobile_robot.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%6F%72%61%74%73@%75%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Shreyash-T02", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shreyash-thorat-6b372b225", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
