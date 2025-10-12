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
    name: "Abhishek Mohandas",
    title: "Generative AI & Software Engineer",
    location: "Tucson, AZ",
    email: "abhishekm@arizona.edu",
    phone: "+1 (520) 245-2686",
    summary:
      "I am a Master’s student in Data Science at the University of Arizona. With a strong foundation in AI, software engineering, and systems, I am driven to deliver innovative, reliable solutions with determination and precision.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abhishekmohandas/" },
      { label: "GitHub", url: "https://github.com/itsabhishekm" },
      {
        label: "Resume",
        url: "https://drive.google.com/file/d/1blC_eg7T2-vfT6iMFXyzU_jOun6OZiuV/view?usp=sharing",
      },
    ],
  },
  skills: [
  {
    title: "Languages",
    items: [
      "Python",
      "SQL",
      "Java",
      "R",
      "Scala"
    ],
  },
  {
    title: "Generative AI & Machine Learning",
    items: [
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "MCP",
      "FAISS",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Pandas / NumPy",
      "spaCy"
    ],
  },
  {
    title: "Data Engineering & Orchestration",
    items: [
      "PySpark",
      "Databricks",
      "Data Lake",
      "Snowflake",
      "PostgreSQL",
      "MongoDB"
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    items: [
      "Docker",
      "AWS (S3, ECR, EC2, Lambda, Fargate)",
      "Azure (ADF, ADLS Gen2, Synapse, Databricks)",
      "Grafana Cloud",
      "Jenkins",
      "FastAPI",
      "HPC",
      "Vercel",
      "GitHub"
    ],
  },
 
],
  experiences: [
    {
      company: "Ernst and Young",
      role: "GenAI Advanced Data Analyst/Engineer",
      duration: "July 2023 – December 2024",
      location: "Onsite",
      description: [
        "Built end-to-end RAG pipelines for payroll analytics across 50+ clients by fine-tuning GPT-4, reducing manual effort by ~90%.",
        "Deployed liquidity risk forecasting agents using LangGraph and Gradient Boosting models, boosting accuracy 74-87% and saving over 48 hours of manual work.",
        "Enhanced enterprise risk detection capacity using Isolation Forest, automating validation workflows and enabling onboarding of 10 new entities.",
        "Leveraged HPC with multi-GPU training to achieve 2× faster experimentation cycles, accelerating deployment and onboarding 5 additional clients in Q3."
      ],
      tech: [
        "LangChain",
        "LangGraph",
        "HuggingFace",
        "GPT-4",
        "PySpark",
        "Snowflake",
        "Databricks",
        "Azure",
        "FastAPI"
      ],
    },
    {
      company: "Agappe Diagnostics",
      role: "R&D – Data Science Intern",
      duration: "October 2022 – April 2023",
      location: "Onsite",
      description: [
        "Developed a deep learning model for vein mapping on NIR imagery, improving pixel accuracy by ~93% and reducing clinical failure rates by ~40%.",
        "Fine-tuned HuggingFace based transformer-model for large-scale sales text analytics, automating review insights and cutting R&D workload by ~70%.",
        "Performed large-scale sales data analysis on AWS cloud infrastructure, accelerating analytics pipelines and enabling faster business insights."
      ],
      tech: [
        "HuggingFace",
        "Deep Learning: CNN",
        "PyTorch",
        "Keras",
        "RoBERTa",
        "CUDA",
        "REST API",
        "Databricks",
        "AWS",
        "Docker",
        "Jenkins"
      ],
    },
  ],
  projects: [
    {
      id: "medquery",
      name: "MedQuery – RAG Based Clinical Assistant",
      timeline: "Mar 2024 – Jul 2024",
      headline: "Generative AI medical assistant enabling secure, context-aware insights from unstructured reports.",
      summary:
        "A retrieval-augmented clinical assistant that transforms unstructured medical PDFs into an intelligent, searchable knowledge base using Mistral and LangChain. Designed to assist healthcare teams with fast, reliable information access through semantic search and Q&A.",
      problem:
        "Medical teams faced challenges accessing insights from large volumes of unstructured PDFs, leading to time-intensive manual searches and fragmented knowledge retrieval.",
      approach:
        "Developed a RAG pipeline using HuggingFace Mistral and sentence transformers to embed and index medical documents in FAISS. Deployed in AWS using Jenkins-driven CI/CD pipeline.",
      impact:
        "Reduced document retrieval time by over 80%, improved accuracy of clinical queries, and delivered a scalable, secure AI assistant deployable across hospital systems.",
      tech: [
        "LangChain",
        "HuggingFace Mistral",
        "FAISS",
        "RAG",
        "Jenkins",
        "Docker",
        "Aqua Trivy",
        "AWS (ECR & Runner)",
        "Flask",
        "HTML",
        "CSS",
        ],
    },
    {
      id: "intellex",
      name: "Intellex – Multi-Agent Decision System",
      timeline: "Apr 2024 – Aug 2024",
      headline: "Autonomous multi-agent framework enabling real-time financial and medical reasoning.",
      summary:
        "A LangGraph-powered multi-agent platform integrating Gemma-2 and LLaMA-3 to deliver intelligent insights across finance and healthcare domains. Agents collaborate through reasoning chains to interpret market trends and medical literature for contextual decision support.",
      problem:
        "Professionals faced fragmented insights between financial metrics and medical references, requiring a unified AI system capable of multi-domain reasoning.",
      approach:
        "Developed coordinated agents using LangChain and LangGraph to analyze stock and interpret medical domains. Deployed in AWS using Jenkins CI/CD pipelines.",
      impact:
        "Delivered a scalable, multi-domain AI assistant capable of performing real-time, context-aware analysis with improved interpretability and response depth.",
      tech: [
        "LangChain",
        "LangGraph",
        "LLaMA-3",
        "Gemma-2",
        "Phidata",
        "yFinance API",
        "Tavily",
        "FastAPI",
        "SonarQube",
        "AWS (ECR & Fargate)",
      ],
    },

    {
      id: "shinraRec",
      name: "ShinraRec – AI Based Recommendation Engine",
      timeline: "Jun 2024 – Sep 2024",
      headline: "RAG-based recommendation system for contextual, domain-aware content discovery.",
      summary:
        "A retrieval-augmented recommendation engine built with LLaMA-3 and LangChain, transforming structured and unstructured datasets into a semantic knowledge base for intelligent query matching and content personalization.",
      problem:
        "Traditional recommendation systems lacked contextual understanding, limiting their accuracy and adaptability in knowledge-heavy domains.",
      approach:
        "Implemented a RAG architecture using LLaMA-3, sentence transformers and ChromaDB for semantic indexing. Orchestrated via Kubernetes on GCP VMs, and monitored with Grafana Cloud.",
      impact:
        "Enhanced recommendation relevance and contextual precision, achieving higher interpretability and reducing latency in real-time query retrieval by over 60%.",
      tech: [
        "LangChain",
        "LLaMA-3",
        "RAG",
        "ChromaDB",
        "GCP VM",
        "Grafana Cloud",
        "Minikube",
        "Docker",
        "GitHub (SCM)",
        "Streamlit",
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
      title: "One Concept per Neuron: The Quest for Monosemanticity in Neural Networks",
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
      credential: "Master of Science In Data Science",
      location: "Tucson, Arizona",
      timeline: "2025 – 2026",
      highlights: [
        "Currently working at the intersection of Generative AI, Agentic AI, Model Context Protocol (MCP), and the interpretability, reasoning, and monosemanticity of Large Language Models, with a focus on clarity, reliability, and faithful AI systems.",
        "Graduate coursework in Applied NLP, Neural Networks, Machine learning, Data Mining, and SQL/NoSQL Databases.",
      ],
    },
    {
      institution: "Rajagiri School of Engineering and Technology",
      credential: "Bachelor of Technology in Electronics and Communication Engineering",
      location: "Kochi",
      timeline: "2019 – 2023",
      highlights: [
        "Led student teams as a part of institutional research combining NLP and machine learning models for retention analysis, automated data pipelines, and curriculum development in data science.",
        "Graduated with coursework of Speech and Audio Processing, Machine learning, Computer Vision, Information Theory and Coding.",
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
