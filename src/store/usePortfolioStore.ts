import { create } from "zustand";
import type { PortfolioData, Project } from "../types/portfolio";

interface PortfolioState {
  data: PortfolioData;
  activeProjectId: string | null;
  setActiveProject: (projectId: string | null) => void;
  getActiveProject: () => Project | null;
}

const portfolioData: PortfolioData = {
  profile: {
    name: "Arun Sanyal",
    title: "Generative AI & Software Engineer",
    location: "Tucson, AZ",
    email: "arunsanyals@gmail.com",
    phone: "+1 (520) 256-6448",
    summary:
      "I am a Computer Engineering graduate and Master’s student in Computer Science at the University of Arizona. With a strong foundation in AI, software engineering, and systems, I am driven to deliver innovative, reliable solutions with determination and precision.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/arun-sanyal/" },
      { label: "GitHub", url: "https://github.com/ArunSanyal" },
      {
        label: "Resume",
        url: "https://cdn.youware.com/files/arun-sanyal-resume.pdf",
      },
    ],
  },
  skills: [
    {
      title: "Languages",
      items: [
        "Python",
        "Java",
        "C",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Dart",
        "Bash",
      ],
    },
    {
      title: "Frameworks & Platforms",
      items: [
        "React",
        "Tailwind CSS",
        "Vite",
        "Flutter",
        "Firebase",
        "Android",
        "Unreal Engine 5",
      ],
    },
    {
      title: "Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "HuggingFace Transformers",
        "LangChain",
        "LangGraph",
        "RAG Pipelines",
        "OpenCV",
        "Pandas/NumPy",
        "Streamlit",
      ],
    },
    {
      title: "DevOps & Infra",
      items: [
        "AWS (EC2, S3, Lambda)",
        "Docker",
        "Vercel",
        "Firebase Hosting",
        "HPC"
      ],
    },
  ],
  experiences: [
    {
      company: "Konsultera Solutions Pvt. Ltd.",
      role: "GenAI R&D Intern – Software/ML Intern",
      duration: "Feb 2025 – Jul 2025",
      location: "Onsite",
      description: [
        "Built end-to-end LLM pipelines for field extraction across 500+ PDFs using schema-driven prompts, cutting manual effort by ~60%.",
        "Deployed LangGraph agents and knowledge graphs to orchestrate validation and dataset creation workflows, boosting accuracy 50–60%.",
        "Fine-tuned Gemini, Qwen, and LLaMA models on DocVQA-scale datasets and shipped production-ready Streamlit PoCs for enterprise rollouts.",
        "Leveraged HPC with multi-GPU training to achieve 3× faster experimentation and delivery cycles.",
      ],
      tech: [
        "LangChain",
        "LangGraph",
        "HuggingFace",
        "Gemini",
        "Qwen",
        "Streamlit",
        "Pandas",
        "AWS",
      ],
    },
  ],
  projects: [
    {
      id: "herbalvista",
      name: "HerbalVista – Immersive Ayurvedic Learning",
      timeline: "Jul 2024 – May 2025",
      headline: "Photorealistic 3D herbal garden with conversational AI teachers.",
      summary:
        "A cross-platform learning experience blending photogrammetry, Unreal Engine, and GenAI to teach Ayurvedic botany to children.",
      problem:
        "Learning Ayurvedic plants lacked engaging, immersive experiences that could scale globally.",
      approach:
        "Captured real plants via photogrammetry, built an Unreal Engine world, and embedded ConvAI agents with RAG knowledge to power multilingual Q&A.",
      impact:
        "Delivered an interactive curriculum with real-time assessments and a companion React web app for bookmarks and progress tracking.",
      tech: [
        "Unreal Engine 5",
        "RealityCapture",
        "ConvAI",
        "LangChain",
        "React",
        "TypeScript",
        "Vite",
      ],
      links: [
        {
          label: "Design Journal",
          url: "https://www.notion.so/herbalvista-case-study",
        },
      ],
    },
    {
      id: "food-safety",
      name: "AI-Powered Food Safety Detection",
      timeline: "Jan 2024 – May 2024",
      headline: "Computer vision and LLMs for real-time allergen detection.",
      summary:
        "Scans packaging and manual inputs to flag harmful ingredients, delivering predictive health insights with Streamlit dashboards.",
      problem:
        "Reading ingredient lists is error-prone, especially for individuals managing chronic conditions.",
      approach:
        "Combined MobileNetV2 classification, OCR pipelines, and Gemini-generated risk analysis inside a friendly Streamlit UI.",
      impact:
        "Unlocked proactive food safety awareness with high-accuracy detection and intuitive visualizations.",
      tech: [
        "TensorFlow",
        "MobileNetV2",
        "OpenCV",
        "Gemini API",
        "Streamlit",
        "Plotly",
        "Python",
      ],
    },
    {
      id: "catalogue",
      name: "LLM-driven Product Extraction & Cataloguing",
      timeline: "Jan 2025 – Mar 2025",
      headline: "Automated SKU pipelines for enterprise procurement teams.",
      summary:
        "Transforms supplier PDFs into structured catalogs with precision filtering, image crops, and auto-enriched metadata.",
      problem:
        "Procurement teams spent hours manually extracting SKU details from inconsistent documents.",
      approach:
        "Developed a dual-agent GenAI workflow with schema enforcement and Tavily-powered enrichment wrapped in a Streamlit workspace.",
      impact:
        "Delivered 90%+ clean outputs, reproducible folder structures, and containerized deployments ready for enterprise scale.",
      tech: [
        "LangChain",
        "HuggingFace",
        "Streamlit",
        "Python",
        "Tavily",
      ],
    },
  ],
  blog: [
    {
      id: "rag-playbooks",
      title: "Opening the Black Box: LLM Explainability & Reasoning",
      publishedOn: "AUG 2025",
      excerpt:
        "I’ve explored the full spectrum of explainability methods for large language models post-hoc (like feature attribution with LIME, SHAP, and attention visualization), intrinsic interpretability, and model-specific probing. Alongside these, I studied reasoning approaches that help uncover how and why LLMs reach conclusions. By combining these perspectives, I gained a deeper understanding of transparency in AI: making models not only powerful, but also trustworthy and accountable.",
      tags: ["InterpretableMachineLearning", "ExplainableAI", "LLMReasoning"],
    },
    {
      id: "photogrammetry",
      title: "One Concept per Neuron: The Quest for Monosemantic AI",
      publishedOn: "SEP 2025",
      excerpt:
        "Neural networks often encode messy, overlapping features where a single neuron can mean many different things. The idea of monosemanticity is to make each feature represent a single, clear concept. Techniques like dictionary learning break down hidden activations into sparse, interpretable pieces, offering a map of what’s going on inside the model. If successful, this work could make AI more predictable, transparent, and controllable moving us closer to models that think in ways we can fully understand.",
      tags: ["Monosemanticity", "AIInterpretability", "DictionaryLearning"],
    },
    {
      id: "model-evals",
      title: "Tracing Thought Paths: Attribution Graphs in Transformers",
      publishedOn: "SEP 2025",
      excerpt:
        "Attribution graphs and circuit analysis reveal how ideas flow inside language models. Instead of just looking at the final output, these methods map which neurons, attention heads, and connections carried the reasoning process. By uncovering these hidden pathways, researchers can see how models represent analogies, syntax, or factual knowledge. This not only deepens our understanding of AI reasoning but also opens the door to safer, more interpretable systems.",
      tags: ["AttributionGraphs", "TransformerCircuits", "AIExplainability"],
    },
  ],
  education: [
    {
      institution: "University of Arizona",
      credential: "M.S. Computer Science",
      location: "Tucson, Arizona",
      timeline: "2025 – 2027",
      highlights: [
        "Graduate coursework in algorithms, networking, and software engineering.",
        "Exploring research intersections between GenAI reliability and human-centered design.",
      ],
    },
    {
      institution: "Fr. Conceicao Rodrigues College of Engineering",
      credential: "B.E. Computer Engineering (Honours in Blockchain)",
      location: "Bandra, Mumbai",
      timeline: "2021 – 2025",
      highlights: [
        "Graduated with CGPA 8.66 focusing on systems design, machine intelligence, and decentralized tech.",
        "Led student teams across hackathons, game jams, and AI product sprints.",
      ],
    },
  ],
};

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  data: portfolioData,
  activeProjectId: portfolioData.projects[0]?.id ?? null,
  setActiveProject: (projectId) => set({ activeProjectId: projectId }),
  getActiveProject: () => {
    const { data, activeProjectId } = get();
    if (!activeProjectId) return null;
    return data.projects.find((project) => project.id === activeProjectId) ?? null;
  },
}));
