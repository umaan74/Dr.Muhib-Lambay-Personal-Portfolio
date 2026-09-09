import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoading } from "../../context/LoadingProvider";

const AcademicRobotScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 300;

    const isMobile = window.innerWidth < 768;

    // Track resources for clean disposal
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    const registerGeo = <T extends THREE.BufferGeometry>(geo: T): T => {
      geometries.push(geo);
      return geo;
    };

    const registerMat = <T extends THREE.Material>(mat: T): T => {
      materials.push(mat);
      return mat;
    };

    // 1. Scene & Fog Setup (Dark Academic Theme)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060814, 0.038);

    // 2. Camera Setup (Properly framed to show full robot + dais)
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.15, isMobile ? 8.4 : 7.2);

    // 3. Renderer with strict containment
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.maxWidth = "100%";
    container.appendChild(renderer.domElement);

    // 4. Lighting System (Academic Research Lab Aesthetics)
    const ambientLight = new THREE.AmbientLight(0x0e172e, 1.2);
    scene.add(ambientLight);

    // Key Light: Cool Cyan-White from top right
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    // Rim Light: Violet / Purple from rear left (creates beautiful rim silhouettes)
    const rimLight = new THREE.DirectionalLight(0xa855f7, 1.2);
    rimLight.position.set(-4, 4, -4);
    scene.add(rimLight);

    // Soft fill from below
    const fillLight = new THREE.DirectionalLight(0x00e5ff, 0.4);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // 5. Materials Palette
    // Matte Titanium Shell (Main armor)
    const armorMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.85,
        roughness: 0.35,
      })
    );

    // Dark Graphite Joint & Mechanical Internals
    const jointMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.5,
      })
    );

    // Bright Cyan Active Telemetry / Accents
    const cyanGlowMat = registerMat(
      new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
      })
    );

    // Subtle Purple Secondary Research Accents
    const purpleAccentMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        metalness: 0.7,
        roughness: 0.4,
        emissive: 0x8b5cf6,
        emissiveIntensity: 0.3,
      })
    );

    // Reflective Optical Visor (Deep Midnight Glass)
    const visorGlassMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: 0x030712,
        metalness: 0.95,
        roughness: 0.15,
      })
    );

    // Platform Base Material
    const daisMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: 0x090e24,
        metalness: 0.8,
        roughness: 0.5,
      })
    );

    // 6. Master Robot & Environment Group
    const masterGroup = new THREE.Group();
    // Shift slightly down so the entire figure and dais are perfectly vertically balanced
    masterGroup.position.set(0, -0.15, 0);
    scene.add(masterGroup);

    // ==========================================
    // A. LAB CALIBRATION DAIS & COMPUTER VISION SCAN
    // ==========================================
    const daisY = -2.05;

    // Dais Platform Disc
    const daisGeo = registerGeo(new THREE.CylinderGeometry(2.1, 2.2, 0.08, 36));
    const daisMesh = new THREE.Mesh(daisGeo, daisMat);
    daisMesh.position.y = daisY;
    masterGroup.add(daisMesh);

    // Concentric Calibration Rings
    const ringOuterGeo = registerGeo(new THREE.RingGeometry(1.8, 1.83, 40));
    const ringMat = registerMat(
      new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
      })
    );
    const ringOuter = new THREE.Mesh(ringOuterGeo, ringMat);
    ringOuter.rotation.x = -Math.PI / 2;
    ringOuter.position.y = daisY + 0.045;
    masterGroup.add(ringOuter);

    const ringInnerGeo = registerGeo(new THREE.RingGeometry(1.1, 1.12, 32));
    const ringInner = new THREE.Mesh(ringInnerGeo, ringMat);
    ringInner.rotation.x = -Math.PI / 2;
    ringInner.position.y = daisY + 0.045;
    masterGroup.add(ringInner);

    // Holographic Coordinate Crosshairs
    const crossPoints = [
      new THREE.Vector3(-1.9, daisY + 0.046, 0),
      new THREE.Vector3(1.9, daisY + 0.046, 0),
      new THREE.Vector3(0, daisY + 0.046, -1.9),
      new THREE.Vector3(0, daisY + 0.046, 1.9),
    ];
    const crossGeo = registerGeo(new THREE.BufferGeometry().setFromPoints(crossPoints));
    const crossMat = registerMat(
      new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.25,
      })
    );
    const crossLines = new THREE.LineSegments(crossGeo, crossMat);
    masterGroup.add(crossLines);

    // Computer Vision LiDAR / Sweep Line on Dais
    const cvScanGroup = new THREE.Group();
    cvScanGroup.position.y = daisY + 0.048;
    masterGroup.add(cvScanGroup);

    const sweepPts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(1.8, 0, 0)];
    const sweepGeo = registerGeo(new THREE.BufferGeometry().setFromPoints(sweepPts));
    const sweepMat = registerMat(
      new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.75,
      })
    );
    const sweepLine = new THREE.Line(sweepGeo, sweepMat);
    cvScanGroup.add(sweepLine);

    // Target reticle at sweep tip
    const reticleGeo = registerGeo(new THREE.RingGeometry(0.06, 0.09, 16));
    const reticleMesh = new THREE.Mesh(reticleGeo, cyanGlowMat);
    reticleMesh.rotation.x = -Math.PI / 2;
    reticleMesh.position.x = 1.8;
    cvScanGroup.add(reticleMesh);

    // ==========================================
    // B. ROBOT BODY HIERARCHY
    // ==========================================
    const robotBodyGroup = new THREE.Group();
    masterGroup.add(robotBodyGroup);

    // 1. FEET & MAGNETIC ANCHORS
    const footGeo = registerGeo(new THREE.BoxGeometry(0.28, 0.1, 0.5));
    const leftFoot = new THREE.Mesh(footGeo, armorMat);
    leftFoot.position.set(-0.38, daisY + 0.09, 0.05);
    robotBodyGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeo, armorMat);
    rightFoot.position.set(0.38, daisY + 0.09, 0.05);
    robotBodyGroup.add(rightFoot);

    // Cyan magnetic soles trim
    const soleGeo = registerGeo(new THREE.BoxGeometry(0.26, 0.02, 0.46));
    const leftSole = new THREE.Mesh(soleGeo, cyanGlowMat);
    leftSole.position.set(-0.38, daisY + 0.05, 0.05);
    robotBodyGroup.add(leftSole);

    const rightSole = new THREE.Mesh(soleGeo, cyanGlowMat);
    rightSole.position.set(0.38, daisY + 0.05, 0.05);
    robotBodyGroup.add(rightSole);

    // 2. LOWER LEGS (CALVES & HYDRAULICS)
    const calfGeo = registerGeo(new THREE.CylinderGeometry(0.09, 0.11, 0.65, 12));
    const leftCalf = new THREE.Mesh(calfGeo, jointMat);
    leftCalf.position.set(-0.38, daisY + 0.45, 0);
    robotBodyGroup.add(leftCalf);

    const rightCalf = new THREE.Mesh(calfGeo, jointMat);
    rightCalf.position.set(0.38, daisY + 0.45, 0);
    robotBodyGroup.add(rightCalf);

    // Calf front armor plates
    const shinArmorGeo = registerGeo(new THREE.BoxGeometry(0.18, 0.45, 0.12));
    const leftShin = new THREE.Mesh(shinArmorGeo, armorMat);
    leftShin.position.set(-0.38, daisY + 0.45, 0.08);
    robotBodyGroup.add(leftShin);

    const rightShin = new THREE.Mesh(shinArmorGeo, armorMat);
    rightShin.position.set(0.38, daisY + 0.45, 0.08);
    robotBodyGroup.add(rightShin);

    // 3. KNEE SERVO JOINTS
    const kneeGeo = registerGeo(new THREE.CylinderGeometry(0.12, 0.12, 0.18, 16));
    const leftKnee = new THREE.Mesh(kneeGeo, armorMat);
    leftKnee.rotation.z = Math.PI / 2;
    leftKnee.position.set(-0.38, daisY + 0.82, 0.02);
    robotBodyGroup.add(leftKnee);

    const rightKnee = new THREE.Mesh(kneeGeo, armorMat);
    rightKnee.rotation.z = Math.PI / 2;
    rightKnee.position.set(0.38, daisY + 0.82, 0.02);
    robotBodyGroup.add(rightKnee);

    // 4. UPPER LEGS (THIGHS)
    const thighGeo = registerGeo(new THREE.CylinderGeometry(0.11, 0.1, 0.65, 12));
    const leftThigh = new THREE.Mesh(thighGeo, jointMat);
    leftThigh.position.set(-0.35, daisY + 1.2, 0.02);
    robotBodyGroup.add(leftThigh);

    const rightThigh = new THREE.Mesh(thighGeo, jointMat);
    rightThigh.position.set(0.35, daisY + 1.2, 0.02);
    robotBodyGroup.add(rightThigh);

    // Thigh armor shells
    const thighArmorGeo = registerGeo(new THREE.BoxGeometry(0.22, 0.48, 0.16));
    const leftThighArmor = new THREE.Mesh(thighArmorGeo, armorMat);
    leftThighArmor.position.set(-0.35, daisY + 1.2, 0.1);
    robotBodyGroup.add(leftThighArmor);

    const rightThighArmor = new THREE.Mesh(thighArmorGeo, armorMat);
    rightThighArmor.position.set(0.35, daisY + 1.2, 0.1);
    robotBodyGroup.add(rightThighArmor);

    // 5. PELVIS / LOWER CHASSIS
    const pelvisGeo = registerGeo(new THREE.BoxGeometry(0.85, 0.26, 0.45));
    const pelvisMesh = new THREE.Mesh(pelvisGeo, armorMat);
    pelvisMesh.position.set(0, daisY + 1.62, 0);
    robotBodyGroup.add(pelvisMesh);

    // Pelvis telemetry status bar
    const pelvisLedGeo = registerGeo(new THREE.BoxGeometry(0.3, 0.04, 0.02));
    const pelvisLed = new THREE.Mesh(pelvisLedGeo, cyanGlowMat);
    pelvisLed.position.set(0, daisY + 1.62, 0.23);
    robotBodyGroup.add(pelvisLed);

    // ==========================================
    // C. TORSO & UPPER BODY (Animates with breathing)
    // ==========================================
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, daisY + 1.76, 0);
    robotBodyGroup.add(torsoGroup);

    // Spine Vertebrae (Articulated mechanics)
    const spineGeo = registerGeo(new THREE.CylinderGeometry(0.14, 0.16, 0.35, 12));
    const spineMesh = new THREE.Mesh(spineGeo, jointMat);
    spineMesh.position.set(0, 0.18, -0.02);
    torsoGroup.add(spineMesh);

    // Main Chest Chassis
    const chestGeo = registerGeo(new THREE.BoxGeometry(1.02, 0.72, 0.52));
    const chestMesh = new THREE.Mesh(chestGeo, armorMat);
    chestMesh.position.set(0, 0.65, 0);
    torsoGroup.add(chestMesh);

    // Upper Chest Armor Plate (Angular bevel)
    const chestPlateGeo = registerGeo(new THREE.BoxGeometry(0.9, 0.38, 0.12));
    const chestPlate = new THREE.Mesh(chestPlateGeo, armorMat);
    chestPlate.position.set(0, 0.78, 0.24);
    torsoGroup.add(chestPlate);

    // AI Neural Core (Illuminated Central Quantum Core)
    const coreApertureGeo = registerGeo(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 24));
    const coreAperture = new THREE.Mesh(coreApertureGeo, jointMat);
    coreAperture.rotation.x = Math.PI / 2;
    coreAperture.position.set(0, 0.62, 0.28);
    torsoGroup.add(coreAperture);

    // Pulsing Core Glass
    const coreEmitterGeo = registerGeo(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 24));
    const coreEmitter = new THREE.Mesh(coreEmitterGeo, cyanGlowMat);
    coreEmitter.rotation.x = Math.PI / 2;
    coreEmitter.position.set(0, 0.62, 0.31);
    torsoGroup.add(coreEmitter);

    // Subtle Core Point Light
    const coreLight = new THREE.PointLight(0x00e5ff, 1.2, 2.5);
    coreLight.position.set(0, 0.62, 0.45);
    torsoGroup.add(coreLight);

    // Chest Status Strip (Purple AI telemetry)
    const chestStripGeo = registerGeo(new THREE.BoxGeometry(0.48, 0.03, 0.02));
    const chestStrip = new THREE.Mesh(chestStripGeo, purpleAccentMat);
    chestStrip.position.set(0, 0.88, 0.31);
    torsoGroup.add(chestStrip);

    // Clavicle / Shoulder Mount Caps
    const shoulderMountGeo = registerGeo(new THREE.CylinderGeometry(0.16, 0.16, 0.22, 16));
    const leftCollar = new THREE.Mesh(shoulderMountGeo, jointMat);
    leftCollar.rotation.z = Math.PI / 2;
    leftCollar.position.set(-0.58, 0.82, 0);
    torsoGroup.add(leftCollar);

    const rightCollar = new THREE.Mesh(shoulderMountGeo, jointMat);
    rightCollar.rotation.z = Math.PI / 2;
    rightCollar.position.set(0.58, 0.82, 0);
    torsoGroup.add(rightCollar);

    // ==========================================
    // D. HEAD & COMPUTER VISION SENSOR ARRAY
    // ==========================================
    const neckGeo = registerGeo(new THREE.CylinderGeometry(0.1, 0.12, 0.18, 12));
    const neckMesh = new THREE.Mesh(neckGeo, jointMat);
    neckMesh.position.set(0, 1.08, 0);
    torsoGroup.add(neckMesh);

    // Head Pivot Group (Tracks mouse cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.25, 0);
    torsoGroup.add(headGroup);

    // Main Helmet / Head Chassis
    const helmetGeo = registerGeo(new THREE.BoxGeometry(0.52, 0.48, 0.54));
    const helmetMesh = new THREE.Mesh(helmetGeo, armorMat);
    headGroup.add(helmetMesh);

    // Curved Panoramic Vision Visor Screen
    const visorGeo = registerGeo(new THREE.BoxGeometry(0.44, 0.22, 0.14));
    const visorMesh = new THREE.Mesh(visorGeo, visorGlassMat);
    visorMesh.position.set(0, 0.02, 0.24);
    headGroup.add(visorMesh);

    // Computer Vision Optical Eye Scanning Array (Moves horizontally)
    const eyeRayGeo = registerGeo(new THREE.BoxGeometry(0.18, 0.04, 0.02));
    const eyeRay = new THREE.Mesh(eyeRayGeo, cyanGlowMat);
    eyeRay.position.set(0, 0.02, 0.32);
    headGroup.add(eyeRay);

    // Dual Stereo LiDAR / Depth Lenses
    const lensGeo = registerGeo(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 16));
    const leftLens = new THREE.Mesh(lensGeo, cyanGlowMat);
    leftLens.rotation.x = Math.PI / 2;
    leftLens.position.set(-0.16, 0.16, 0.26);
    headGroup.add(leftLens);

    const rightLens = new THREE.Mesh(lensGeo, cyanGlowMat);
    rightLens.rotation.x = Math.PI / 2;
    rightLens.position.set(0.16, 0.16, 0.26);
    headGroup.add(rightLens);

    // Side Telemetry Sensor Fin (Academic Research Detail)
    const finGeo = registerGeo(new THREE.BoxGeometry(0.04, 0.24, 0.16));
    const finMesh = new THREE.Mesh(finGeo, armorMat);
    finMesh.position.set(0.28, 0.14, -0.05);
    headGroup.add(finMesh);

    const finLedGeo = registerGeo(new THREE.SphereGeometry(0.025, 8, 8));
    const finLed = new THREE.Mesh(finLedGeo, cyanGlowMat);
    finLed.position.set(0.29, 0.24, -0.05);
    headGroup.add(finLed);

    // ==========================================
    // E. ARMS & INTERACTIVE RESEARCH GESTURE
    // ==========================================
    // Left Arm (Relaxed at side with subtle idle motion)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.62, 0.82, 0);
    torsoGroup.add(leftArmGroup);

    const armGeo = registerGeo(new THREE.CylinderGeometry(0.09, 0.08, 0.42, 12));
    const leftBicep = new THREE.Mesh(armGeo, jointMat);
    leftBicep.position.set(0, -0.25, 0);
    leftArmGroup.add(leftBicep);

    const leftForearmGroup = new THREE.Group();
    leftForearmGroup.position.set(0, -0.5, 0);
    leftArmGroup.add(leftForearmGroup);

    const forearmGeo = registerGeo(new THREE.BoxGeometry(0.14, 0.38, 0.14));
    const leftForearm = new THREE.Mesh(forearmGeo, armorMat);
    leftForearm.position.set(0, -0.2, 0.02);
    leftForearmGroup.add(leftForearm);

    // Left Mechanical Hand
    const handGeo = registerGeo(new THREE.BoxGeometry(0.12, 0.14, 0.08));
    const leftHand = new THREE.Mesh(handGeo, jointMat);
    leftHand.position.set(0, -0.42, 0.02);
    leftForearmGroup.add(leftHand);

    // Right Arm (Raised in academic/research gesture toward data stream)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.62, 0.82, 0);
    torsoGroup.add(rightArmGroup);

    // Angled forward in gesture
    rightArmGroup.rotation.x = -0.38;
    rightArmGroup.rotation.z = -0.22;

    const rightBicep = new THREE.Mesh(armGeo, jointMat);
    rightBicep.position.set(0, -0.25, 0);
    rightArmGroup.add(rightBicep);

    const rightForearmGroup = new THREE.Group();
    rightForearmGroup.position.set(0, -0.5, 0);
    rightForearmGroup.rotation.x = -0.35;
    rightForearmGroup.rotation.y = 0.25;
    rightArmGroup.add(rightForearmGroup);

    const rightForearm = new THREE.Mesh(forearmGeo, armorMat);
    rightForearm.position.set(0, -0.2, 0.02);
    rightForearmGroup.add(rightForearm);

    // Right Hand (Open palm facing upward holding holographic data)
    const rightHand = new THREE.Mesh(handGeo, jointMat);
    rightHand.position.set(0, -0.42, 0.04);
    rightForearmGroup.add(rightHand);

    // Palm Emitter Node
    const palmNodeGeo = registerGeo(new THREE.SphereGeometry(0.035, 12, 12));
    const palmNode = new THREE.Mesh(palmNodeGeo, cyanGlowMat);
    palmNode.position.set(0, -0.42, 0.09);
    rightForearmGroup.add(palmNode);

    // ==========================================
    // F. FLOATING AIML HOLOGRAPHIC RESEARCH ELEMENTS
    // ==========================================
    const holoGroup = new THREE.Group();
    // Positioned floating just above the right hand
    holoGroup.position.set(0.72, 0.65, 0.55);
    torsoGroup.add(holoGroup);

    // Mini Holographic Neural Graph (connected nodes)
    const holoNodes: THREE.Mesh[] = [];
    const holoNodePositions: THREE.Vector3[] = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.24, 0.18, 0.12),
      new THREE.Vector3(-0.2, 0.22, -0.1),
      new THREE.Vector3(0.18, -0.18, -0.15),
      new THREE.Vector3(-0.22, -0.14, 0.14),
      new THREE.Vector3(0.02, 0.35, 0.02),
    ];

    const hNodeGeo = registerGeo(new THREE.SphereGeometry(0.04, 12, 12));
    holoNodePositions.forEach((pos, idx) => {
      const mesh = new THREE.Mesh(hNodeGeo, idx % 2 === 0 ? cyanGlowMat : purpleAccentMat);
      mesh.position.copy(pos);
      holoGroup.add(mesh);
      holoNodes.push(mesh);
    });

    // Holographic Connection Filaments
    const filamentIndices = [
      [0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 5], [3, 4]
    ];
    const filamentPts: number[] = [];
    filamentIndices.forEach(([a, b]) => {
      filamentPts.push(
        holoNodePositions[a].x, holoNodePositions[a].y, holoNodePositions[a].z,
        holoNodePositions[b].x, holoNodePositions[b].y, holoNodePositions[b].z
      );
    });

    const filamentGeo = registerGeo(new THREE.BufferGeometry());
    filamentGeo.setAttribute("position", new THREE.Float32BufferAttribute(filamentPts, 3));
    const filamentMat = registerMat(
      new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.6,
      })
    );
    const filamentLines = new THREE.LineSegments(filamentGeo, filamentMat);
    holoGroup.add(filamentLines);

    // Ambient floating research telemetry dust
    const dustCount = isMobile ? 30 : 60;
    const dustGeo = registerGeo(new THREE.BufferGeometry());
    const dustPos = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 5;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 4.5 + 0.2;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = registerMat(
      new THREE.PointsMaterial({
        size: isMobile ? 0.05 : 0.04,
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })
    );
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    masterGroup.add(dustPoints);

    // Complete loader
    setLoading(100);

    // ==========================================
    // G. MOUSE TRACKING & PROCEDURAL ANIMATION
    // ==========================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newW = containerRef.current.clientWidth || 440;
      const newH = containerRef.current.clientHeight || 300;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // IntersectionObserver to pause when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // 1. Idle Breathing & Subtle Balance Sway
      const breath = Math.sin(elapsedTime * 1.5);
      robotBodyGroup.position.y = breath * 0.035;
      torsoGroup.rotation.x = breath * 0.015;

      // 2. Head Cursor Tracking (Intelligent Observation)
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      headGroup.rotation.y = currentMouseX * 0.45;
      headGroup.rotation.x = -currentMouseY * 0.28 + breath * 0.01;
      headGroup.rotation.z = Math.sin(elapsedTime * 0.8) * 0.015;

      // Subtle torso lean toward cursor
      torsoGroup.rotation.y = currentMouseX * 0.15;

      // 3. Eye Optical Scanner Sweep inside Visor
      eyeRay.position.x = Math.sin(elapsedTime * 2.8) * 0.11;

      // 4. Core Light Pulse
      const corePulse = 0.85 + Math.sin(elapsedTime * 3) * 0.25;
      coreLight.intensity = corePulse * 1.2;

      // 5. Left Arm Subtle Idle Sway
      leftArmGroup.rotation.x = Math.sin(elapsedTime * 1.2) * 0.04;
      leftArmGroup.rotation.z = Math.sin(elapsedTime * 0.9) * 0.02;

      // 6. Right Arm Subtle Gestural Float
      rightArmGroup.rotation.x = -0.38 + Math.sin(elapsedTime * 1.4) * 0.04;

      // 7. Computer Vision Ground LiDAR Sweep
      cvScanGroup.rotation.y = elapsedTime * 0.85;

      // 8. Holographic Research Graph Orbit & Pulse
      holoGroup.rotation.y = elapsedTime * 0.35;
      holoGroup.position.y = 0.65 + Math.sin(elapsedTime * 2) * 0.03;

      // Pulse floating holographic nodes
      holoNodes.forEach((node, i) => {
        node.position.y = holoNodePositions[i].y + Math.sin(elapsedTime * 2.5 + i) * 0.02;
      });

      // 9. Ambient Dust Drift
      dustPoints.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Thorough Disposal Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <div className="academic-scene-container" aria-hidden="true">
      <div className="academic-scene-canvas" ref={containerRef} />
    </div>
  );
};

export default AcademicRobotScene;
