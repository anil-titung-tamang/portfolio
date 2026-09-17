const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Repos & Contributions",
    link: "#repos",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Research Papers" },
  { value: 45, suffix: "+", label: "Completed Projects" },
  { value: 4.8, suffix: " M+", label: "Data Samples" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/github.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/huggingface.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/kaggle.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/mysql.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/numpy.png",
  },
  {
    imgPath: "/images/logos/pandas.png",
  },
  {
    imgPath: "/images/logos/postgre.png",
  },
  {
    imgPath: "/images/logos/pytorch.png",
  },
  {
    imgPath: "/images/logos/tensorflow.png",
  },
];

const projects = [
  {
    title: "On-Device AI Emergency Response System",
    description:
      "A Flutter-based emergency-detection app fusing fine-tuned audio ML with GPS, accelerometer & gyroscope data for sub-3s alert latency.",
    image: "/images/project1.jpg",
    alt: "jibansetu",
    bgColor: "bg-[#e0f2ff]",
  },
  {
    title: "AI-Powered Health Assistant",
    description:
      "A Django app with XGBoost risk-prediction models and EasyOCR/TrOCR pipelines digitizing hospital records into actionable insights.",
    image: "/images/project2.jpg",
    alt: "Medimate",
    bgColor: "bg-[#ffefdb]",
  },
  {
    title: "AI-Powered Pregnancy Health Assistant",
    description:
      "A Django app with psychometric assessment and OCR-digitized records tailored for pregnancy health tracking.",
    image: "/images/project3.jpg",
    alt: "MeriAama",
    bgColor: "bg-[#ffe7eb]",
  },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Django Development",
    imgPath: "/images/logos/django.png",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/moby_dock_docker_whale.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Hugging Face",
    modelPath: "/models/hugging_face.glb",
    scale: 3.74,
    position: [-2.41, 0, 0],
    rotation: [0, 0, 0],
  },
  {
    name: "AI/ML Engineering",
    modelPath: "/models/ai-themed_computer_chip-optimized.glb",
    scale: 2.99,
    rotation: [0, 0, 0],
  },
  {
    name: "Voice Engineering",
    modelPath: "/models/speech_bubble.glb",
    scale: 0.01,
    rotation: [0, 0, 0],
  },
  {
    name: "Flutter",
    modelPath: "/models/flutter.glb",
    scale: 30,
    rotation: [0, 0, 0],
  },
  {
    name: "Firebase",
    modelPath: "/models/firebase_logo.glb",
    scale: 45,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS",
    modelPath: "/models/aws_logo.glb",
    scale: 0.45,
    position: [-0.16, -2.16, 0],
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Serving as a board member for Nepal's sovereign AI ecosystem initiative, engineering data infrastructure and evaluation pipelines for Nepali-optimized LLMs used in education and national AI policy.",
    images: [
      "/images/experience/himalaya/h1.jpeg",
      "/images/experience/himalaya/h2.jpeg",
      "/images/experience/himalaya/h3.jpeg",
      "/images/experience/himalaya/h4.jpeg",
      "/images/experience/himalaya/h5.jpeg",
    ],
    logoPath: "/images/logo1.png",
    title: "Board Member & Part-time Data Engineer — Himalaya AI Research Lab",
    date: "May 2026 - Present",
    responsibilities: [
      "Engineering data infrastructure and evaluation pipelines for Nepali-optimized LLMs used in education and national AI policy.",
      "Supervising engineering interns on Supervised Fine-Tuning (SFT), RLVR dataset curation, and voice/speech data pipelines.",
      "Presented on AI development in Nepal before the German Ambassador to Nepal, representing Himalaya AI Research Lab.",
    ],
  },
  {
    review:
      "Contributing AI/ML research support to a Southeast Asia-based nonprofit focused on responsible innovation, AI ethics, and technology governance across Asia.",
    images: [
      "/images/experience/ketemu/k1.png",
      "/images/experience/ketemu/k2.png",
      "/images/experience/ketemu/k3.png",
    ],
    logoPath: "/images/logo2.png",
    title: "AI Researcher Intern — KETEMU",
    date: "June 2026 - Present",
    responsibilities: [
      "Contributing AI/ML research support to a Southeast Asia nonprofit (HQ: Jakarta, Indonesia) focused on responsible innovation, AI ethics, and technology governance.",
      "Remote collaboration across a multi-country research team on tech-ethics-focused initiatives.",
    ],
  },
  {
    review:
      "Led the college's technical club, organizing flagship events and running hands-on developer workshops for students.",
    images: Array.from(
      { length: 22 },
      (_, i) => `/images/experience/creators-club/${i + 1}.jpeg`
    ),
    logoPath: "/images/logo3.png",
    title: "Technical Lead — Creators Club, Kantipur City College",
    date: "2023 - 2026",
    responsibilities: [
      "Led the college's technical club; organized and hosted flagship events including GameJam (a game-development event) and Voices & Vision (a public-speaking event).",
      "Conducted hands-on workshops on Django and Git/GitHub for student developers.",
      "Built and exhibited Smart Socket, an IoT-based project, at the KCC Exhibition 2024 as part of a hardware initiative.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const repoShowcase = [
  {
    name: "gymkhana",
    mentions: "@HimalayaAI — Multilingual RLVR Environment Framework",
    review:
      "Built a synthetic-data and RLVR gym that runs GRPO-style parallel rollout groups per task, verifies outputs, assigns rewards, and exports reward-filtered SFT/ShareGPT training data with full task/rollout provenance. Pluggable task environments span Nepali/English transliteration, instruction-following, math reasoning, multi-hop QA, and sandboxed software-engineering tasks.",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/HimalayaAI/gymkhana",
  },
  {
    name: "JibanSetu",
    mentions: "On-Device AI Emergency Response System",
    review:
      "Engineered an end-to-end multimodal emergency-detection pipeline (sub-3s alert latency) fusing fine-tuned audio ML with GPS, accelerometer, and gyroscope sensor data. Fine-tuned YAMNet achieving 91.8% accuracy and 92.2% weighted F1, vs. a 78.2% CNN spectrogram baseline.",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/anil-titung-tamang/JibanSetu",
  },
  {
    name: "dataspeech-nepali",
    mentions: "Speech Dataset Annotation Infrastructure",
    review:
      "Adapted the Data-Speech pipeline for Nepali TTS, engineering a custom Devanagari syllable fallback via espeak-ng to replace English G2P dependencies. Automated extraction of acoustic metrics (PESQ, STOI, SI-SDR, pitch, SNR, reverberation) calibrated to Nepali speech for Parler-TTS conditioning.",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/anil-titung-tamang/dataspeech-nepali",
  },
  {
    name: "nepali-oov-tts-benchmark",
    mentions: "Low-Resource Data Pipeline",
    review:
      "Built an OOV discovery/benchmarking framework (4.5pp gap: 22.6% OOV IER vs. 18.1% IV IER) and targeted recording-data pipelines for categorized fine-tuning — the first benchmark of its kind for Nepali TTS.",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/anil-titung-tamang/nepali-oov-tts-benchmark",
  },
  {
    name: "tamang-tokenizer",
    mentions: "NLP Infrastructure, Low-Resource Language Tech",
    review:
      "A custom tokenizer and subword segmentation scheme for Tamang, a low-resource Himalayan language, supporting future language-model training and NLP infrastructure for underrepresented languages.",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/anil-titung-tamang/tamang-tokenizer",
  },
  {
    name: "himalaya-gemma-nepali-asr-demo",
    mentions: "🤗 Hugging Face Space — Live Nepali Speech-to-Text Demo",
    review:
      "An interactive Space transcribing Nepali speech to text in real time, built on a Gemma-based Nepali ASR model developed at Himalaya AI Research Lab.",
    imgPath: "/images//logos/huggingface.png",
    link: "https://huggingface.co/spaces/Titung/himalaya-gemma-nepali-asr-demo",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/an_titung?igsh=bjJzaXNxbjE5OGVm",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/share/14DvVdnwbJ1/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/urtitung",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anil-titung-tamang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  projects,
  counterItems,
  expCards,
  expLogos,
  repoShowcase,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};