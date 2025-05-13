import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Sentiment Analyzer",
    description: "A deep learning model that analyzes text sentiment in real-time using LSTM networks and attention mechanisms. Built with PyTorch and deployed with Flask.",
    video: {
      short: "https://example.com/videos/sentiment-short.mp4",
      long: "https://example.com/videos/sentiment-long.mp4"
    },
    technologies: ["Python", "PyTorch", "Flask", "NLP", "React"],
    image: "/projects/neural-network.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Tracker",
    description: "A distributed application tracking product journey from factory to consumer with immutable records. Built with Solidity smart contracts and Ethereum.",
    video: {
      short: "https://example.com/videos/blockchain-short.mp4",
      long: "https://example.com/videos/blockchain-long.mp4"
    },
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    image: "/projects/blockchain.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 3,
    title: "AR Educational Platform",
    description: "An augmented reality application for interactive learning experiences. Using ARKit and Unity to create immersive educational content.",
    video: {
      short: "https://example.com/videos/ar-short.mp4",
      long: "https://example.com/videos/ar-long.mp4"
    },
    technologies: ["Unity", "ARKit", "C#", "3D Modeling", "UX Design"],
    image: "/projects/ar-education.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 4,
    title: "Distributed Systems Simulator",
    description: "A visualization tool for distributed algorithms and consensus protocols. Simulates network partitions, node failures, and Byzantine scenarios.",
    video: {
      short: "https://example.com/videos/distributed-short.mp4",
      long: "https://example.com/videos/distributed-long.mp4"
    },
    technologies: ["Go", "D3.js", "WebSockets", "Docker", "Kubernetes"],
    image: "/projects/distributed-systems.jpg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Quantum Algorithm Visualizer",
    description: "An interactive platform for visualizing and understanding quantum algorithms. Includes simulations of Shor's, Grover's, and QAOA algorithms.",
    video: {
      short: "https://example.com/videos/quantum-short.mp4",
      long: "https://example.com/videos/quantum-long.mp4"
    },
    technologies: ["Python", "Qiskit", "TypeScript", "Three.js", "WebGL"],
    image: "/projects/quantum.jpg",
    liveUrl: "",
    githubUrl: ""
  }
];