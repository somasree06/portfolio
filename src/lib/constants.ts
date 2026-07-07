export const siteConfig = {
  name: "Somasree V",
  title: "AI Technical Lead",
  description: "Building Intelligent AI Systems for the Future",
  url: "https://somasree.vercel.app",
  email: "somasreevelayutham@gmail.com",
  github: "",
  linkedin: "https://in.linkedin.com/in/somasree-v-1110a9203",
  twitter: "",
  medium: "",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" },
];

export const specializations = [
  "Agentic AI",
  "RAG Systems",
  "Multi-Agent Orchestration",
  "LangChain & LangGraph",
  "AWS Bedrock",
  "MCP Tools",
  "Human-in-the-Loop AI",
  "Multimodal AI",
  "LLM Applications",
];

export const skills = {
  "AI & Generative AI": [
    "Generative AI",
    "LLM Applications",
    "Prompt Engineering",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "RAG Pipelines",
    "MCP Tools",
    "Pydantic AI",
    "Multimodal AI",
    "Hugging Face",
    "LLM Fine-tuning (LoRA/PEFT)",
  ],
  "Vector Search": [
    "FAISS",
    "Pinecone",
    "Chroma",
  ],
  "Cloud & Infrastructure": [
    "AWS Bedrock (Claude)",
    "Titan Embeddings",
    "AWS Lambda",
    "Amazon S3",
    "Kubernetes",
    "Docker",
    "CI/CD Pipelines",
    "Serverless Architecture",
    "Event-Driven Architecture",
  ],
  "Backend Development": [
    "Python",
    "Node.js",
    "FastAPI",
    "FastMCP",
    "REST APIs",
    "Async Processing",
    "PostgreSQL",
    "MySQL",
    "MSSQL",
  ],
  "Frontend Development": [
    "React.js",
    "HTML5",
    "CSS3",
    "JavaScript",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Postman",
    "JIRA",
    "Azure OpenAI",
    "Databricks",
    "VS Code",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Agentic AI Data Integrity Suite",
    description:
      "An enterprise data integrity platform powered by Agentic AI and autonomous validation agents with Human-in-the-Loop workflows for location enrichment in data quality pipelines.",
    category: "Agentic AI",
    image: "/projects/data-integrity.jpg",
    technologies: ["LangGraph", "Pydantic AI", "MCP Tools", "Vector Search", "Python", "FastAPI"],
    challenges: [
      "Designing stateful multi-agent workflows with conditional routing",
      "Ensuring sequential execution (address verification before enrichment)",
      "Building Human-in-the-Loop approval checkpoints",
    ],
    solution:
      "Built multi-agent workflows using LangGraph with stateful orchestration and conditional routing. Implemented dynamic pipeline updates based only on user-approved actions with vector search for intelligent dataset recommendations.",
    outcome: "Improved data consistency, reduced manual pipeline configuration effort significantly",
    featured: true,
  },
  {
    id: 2,
    title: "Multimodal Video Intelligence Platform",
    description:
      "A multimodal AI platform for semantic understanding of video content using AWS Bedrock Data Automation, enabling natural language querying over video data.",
    category: "Multimodal AI",
    image: "/projects/video-intelligence.jpg",
    technologies: ["AWS Bedrock BDA", "AWS Lambda", "Vector Search", "BM25", "Python", "LLMs"],
    challenges: [
      "Converting unstructured video data into searchable knowledge",
      "Implementing semantic chunking aligned with scene boundaries",
      "Building hybrid retrieval (vector + keyword search)",
    ],
    solution:
      "Built automated pipelines for video-to-transcript conversion and scene detection. Implemented semantic chunking aligned with timestamps and hybrid retrieval using vector search and BM25.",
    outcome: "Reduced manual video analysis time by ~40%",
    featured: true,
  },
  {
    id: 3,
    title: "Enterprise Excel RAG Platform",
    description:
      "A scalable RAG system for querying large volumes of Excel documents with agent-based query handling and multi-step reasoning using ReAct pattern.",
    category: "RAG",
    image: "/projects/excel-rag.jpg",
    technologies: ["LangChain", "PostgreSQL", "Titan Embeddings", "FastAPI", "React", "Python"],
    challenges: [
      "Processing thousands of enterprise Excel files at scale",
      "Enabling multi-step reasoning for complex queries",
      "Optimizing chunking and embeddings for tabular data",
    ],
    solution:
      "Built ingestion pipelines with structure-aware parsing and embedding generation. Developed agent-based query handling using LangChain with tool-calling and ReAct pattern for complex queries.",
    outcome: "Improved answer accuracy by ~30–35%, delivered conversational querying interface",
    featured: true,
  },
  {
    id: 4,
    title: "ETL Automation Platform",
    description:
      "An AI-driven ETL automation platform that generates pipelines from source-to-target mappings using multi-agent workflows for bronze, silver, and gold layer generation.",
    category: "Agentic AI",
    image: "/projects/etl-automation.jpg",
    technologies: ["LangGraph", "LangChain", "Databricks", "Python", "Human-in-the-Loop"],
    challenges: [
      "Schema profiling across diverse data sources",
      "LLM-assisted mapping and transformation logic generation",
      "Human-in-the-Loop validation at each pipeline stage",
    ],
    solution:
      "Developed multi-agent workflows using LangGraph for bronze, silver, and gold layer generation. Implemented schema profiling with LLM-assisted mapping and automated Databricks notebook generation.",
    outcome: "Reduced manual ETL development effort by over 50%",
    featured: true,
  },
  {
    id: 5,
    title: "Insurance Policy Q&A Chatbot",
    description:
      "A Generative AI–powered conversational assistant for insurance policy queries with RAG pipeline and guardrails for safe, accurate responses.",
    category: "RAG",
    image: "/projects/insurance-chatbot.jpg",
    technologies: ["AWS Bedrock", "Claude", "RAG", "FastAPI", "React", "PostgreSQL"],
    challenges: [
      "Converting large unstructured policy PDFs into searchable knowledge",
      "Preventing incorrect advisory or policy commitments",
      "Enabling escalation to human agents with context preservation",
    ],
    solution:
      "Built a RAG pipeline to retrieve policy clauses and generate context-aware responses. Applied guardrails and response constraints with backend API integration for user-specific policy details.",
    outcome: "Reduced query resolution time significantly, improved customer experience",
    featured: true,
  },
  {
    id: 6,
    title: "Enterprise Logistics Platform",
    description:
      "A logistics and transportation management system with real-time shipment tracking, event-driven notifications, and operational dashboards.",
    category: "Full Stack",
    image: "/projects/logistics.jpg",
    technologies: ["Node.js", "React", "AWS SNS/SQS", "PostgreSQL", "REST APIs"],
    challenges: [
      "High-volume data processing for concurrent tracking",
      "Real-time alerts for shipment milestones",
      "Optimizing backend performance at scale",
    ],
    solution:
      "Designed event-driven notification system using AWS SNS and SQS. Built real-time dashboards for shipment visibility with optimized SQL queries for high-volume processing.",
    outcome: "Reduced manual coordination, improved API performance for large-scale tracking",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "AI Technical Lead",
    company: "ZEB",
    period: "April 2025 - Present",
    description:
      "Leading AI/ML initiatives including Agentic AI platforms, multimodal video intelligence, and enterprise RAG systems. Managing containerized AI workloads on Kubernetes with CI/CD pipelines.",
    achievements: [
      "Leading development of Agentic AI Data Integrity Suite with autonomous validation agents",
      "Architected video-to-text intelligence platform using AWS Bedrock Data Automation",
      "Engineered large-scale RAG system for processing thousands of enterprise Excel files",
      "Managing containerized AI workloads using Kubernetes clusters with CI/CD pipelines",
    ],
    technologies: ["AWS Bedrock", "LangGraph", "MCP Tools", "Kubernetes", "Python", "FastAPI"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "AVA Software Pvt Ltd, Chennai",
    period: "Aug 2022 - March 2025",
    description:
      "Designed and developed full stack web applications across AI and enterprise platforms. Implemented RAG-based AI features and built data pipelines with AWS services.",
    achievements: [
      "Built RAG-based AI features using AWS Claude models and Titan embeddings",
      "Developed full stack web applications with React.js and Node.js",
      "Built data ingestion and storage pipelines using S3 and relational databases",
      "Delivered production-ready features and authored technical documentation",
    ],
    technologies: ["Python", "React.js", "Node.js", "AWS", "PostgreSQL", "REST APIs"],
  },
];

export const certifications: {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}[] = [];

export const blogPosts: {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
}[] = [];

export const architectures = [
  {
    id: 1,
    title: "RAG Pipeline Architecture",
    description: "End-to-end retrieval augmented generation with hybrid search",
    nodes: [
      { id: "doc", label: "Documents", x: 50, y: 100 },
      { id: "chunk", label: "Chunking", x: 250, y: 100 },
      { id: "embed", label: "Embedding", x: 450, y: 100 },
      { id: "vector", label: "Vector DB", x: 650, y: 100 },
      { id: "query", label: "Query", x: 50, y: 300 },
      { id: "retrieve", label: "Retrieval", x: 250, y: 300 },
      { id: "rerank", label: "Re-rank", x: 450, y: 300 },
      { id: "llm", label: "LLM", x: 650, y: 300 },
      { id: "response", label: "Response", x: 650, y: 200 },
    ],
    connections: [
      ["doc", "chunk"],
      ["chunk", "embed"],
      ["embed", "vector"],
      ["query", "retrieve"],
      ["vector", "retrieve"],
      ["retrieve", "rerank"],
      ["rerank", "llm"],
      ["llm", "response"],
    ],
  },
  {
    id: 2,
    title: "Multi-Agent Architecture",
    description: "Hierarchical agent orchestration with Human-in-the-Loop",
    nodes: [
      { id: "supervisor", label: "Supervisor", x: 400, y: 50 },
      { id: "agent1", label: "Research Agent", x: 150, y: 200 },
      { id: "agent2", label: "Validation Agent", x: 400, y: 200 },
      { id: "agent3", label: "Action Agent", x: 650, y: 200 },
      { id: "memory", label: "Shared Memory", x: 400, y: 350 },
      { id: "tools", label: "MCP Tools", x: 150, y: 350 },
      { id: "output", label: "Human Review", x: 650, y: 350 },
    ],
    connections: [
      ["supervisor", "agent1"],
      ["supervisor", "agent2"],
      ["supervisor", "agent3"],
      ["agent1", "memory"],
      ["agent2", "memory"],
      ["agent3", "memory"],
      ["agent1", "tools"],
      ["agent3", "output"],
    ],
  },
  {
    id: 3,
    title: "ETL Automation Pipeline",
    description: "AI-driven ETL with multi-agent bronze/silver/gold layers",
    nodes: [
      { id: "input", label: "Source Data", x: 100, y: 50 },
      { id: "profile", label: "Schema Profiling", x: 350, y: 50 },
      { id: "llm", label: "LLM Mapping", x: 600, y: 50 },
      { id: "bronze", label: "Bronze Layer", x: 150, y: 200 },
      { id: "silver", label: "Silver Layer", x: 400, y: 200 },
      { id: "gold", label: "Gold Layer", x: 650, y: 200 },
      { id: "hitl", label: "Human Validation", x: 400, y: 350 },
      { id: "output", label: "Databricks", x: 700, y: 350 },
    ],
    connections: [
      ["input", "profile"],
      ["profile", "llm"],
      ["llm", "bronze"],
      ["bronze", "silver"],
      ["silver", "gold"],
      ["bronze", "hitl"],
      ["silver", "hitl"],
      ["hitl", "gold"],
      ["gold", "output"],
    ],
  },
];
