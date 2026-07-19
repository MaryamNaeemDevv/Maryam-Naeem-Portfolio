export type SkillCategory =
  | "Programming Languages"
  | "Mobile Development"
  | "AI/ML"
  | "UI/UX & Design"
  | "Backend/Databases"
  | "DevOps/Tools"
  | "Other";

export type SkillNode = {
  id: string;
  label: string;
  category: SkillCategory;
  x: number;
  y: number;
  icon: string;
};

export type SkillEdge = {
  from: string;
  to: string;
};

export const skillCategories: SkillCategory[] = [
  "Programming Languages",
  "Mobile Development",
  "AI/ML",
  "UI/UX & Design",
  "Backend/Databases",
  "DevOps/Tools",
  "Other",
];

export const skillNodes: SkillNode[] = [
  { id: "c", label: "C", category: "Programming Languages", x: 14, y: 22, icon: "SiC" },
  { id: "cpp", label: "C++", category: "Programming Languages", x: 14, y: 38, icon: "SiCplusplus" },
  { id: "csharp", label: "C#", category: "Programming Languages", x: 14, y: 54, icon: "SiSharp" },
  { id: "javascript", label: "JavaScript", category: "Programming Languages", x: 24, y: 34, icon: "SiJavascript" },
  { id: "java", label: "Java", category: "Programming Languages", x: 28, y: 58, icon: "SiOpenjdk" },
  { id: "python", label: "Python", category: "Programming Languages", x: 26, y: 72, icon: "SiPython" },
  { id: "dart", label: "Dart", category: "Programming Languages", x: 32, y: 14, icon: "SiDart" },
  { id: "kotlin", label: "Kotlin", category: "Other", x: 36, y: 70, icon: "SiKotlin" },
  { id: "flutter", label: "Flutter", category: "Mobile Development", x: 48, y: 18, icon: "SiFlutter" },
  { id: "android", label: "Android", category: "Mobile Development", x: 36, y: 16, icon: "SiAndroid" },
  { id: "firebase", label: "Firebase", category: "Backend/Databases", x: 58, y: 24, icon: "SiFirebase" },
  { id: "tensorflow", label: "TensorFlow", category: "AI/ML", x: 72, y: 42, icon: "SiTensorflow" },
  { id: "opencv", label: "OpenCV", category: "AI/ML", x: 80, y: 60, icon: "SiOpencv" },
  { id: "sklearn", label: "scikit-learn", category: "AI/ML", x: 64, y: 64, icon: "SiScikitlearn" },
  { id: "huggingface", label: "Hugging Face", category: "AI/ML", x: 86, y: 76, icon: "SiHuggingface" },
  { id: "gemini", label: "Gemini API", category: "AI/ML", x: 90, y: 56, icon: "SiGooglegemini" },
  { id: "figma", label: "Figma", category: "UI/UX & Design", x: 70, y: 14, icon: "SiFigma" },
  { id: "nodejs", label: "Node.js", category: "Backend/Databases", x: 50, y: 52, icon: "SiNodedotjs" },
  { id: "php", label: "PHP", category: "Backend/Databases", x: 44, y: 44, icon: "SiPhp" },
  { id: "mysql", label: "MySQL", category: "Backend/Databases", x: 66, y: 50, icon: "SiMysql" },
  {
    id: "sqlserver",
    label: "SQL Server",
    category: "Backend/Databases",
    x: 54,
    y: 70,
    icon: "SiSqlalchemy",
  },
  { id: "docker", label: "Docker", category: "DevOps/Tools", x: 50, y: 86, icon: "SiDocker" },
  { id: "linux", label: "Linux", category: "DevOps/Tools", x: 64, y: 88, icon: "SiLinux" },
];

export const skillEdges: SkillEdge[] = [
  { from: "flutter", to: "dart" },
  { from: "flutter", to: "firebase" },
  { from: "flutter", to: "android" },
  { from: "nodejs", to: "mysql" },
  { from: "nodejs", to: "firebase" },
  { from: "php", to: "mysql" },
  { from: "sqlserver", to: "mysql" },
  { from: "tensorflow", to: "opencv" },
  { from: "opencv", to: "sklearn" },
  { from: "sklearn", to: "huggingface" },
  { from: "huggingface", to: "gemini" },
  { from: "c", to: "cpp" },
  { from: "cpp", to: "csharp" },
  { from: "java", to: "kotlin" },
  { from: "javascript", to: "nodejs" },
  { from: "python", to: "tensorflow" },
  { from: "python", to: "opencv" },
  { from: "python", to: "sklearn" },
  { from: "figma", to: "flutter" },
  { from: "figma", to: "javascript" },
  { from: "docker", to: "nodejs" },
  { from: "docker", to: "linux" },
  { from: "linux", to: "nodejs" },
];

export function getSkillNode(id: string): SkillNode {
  const node = skillNodes.find((item) => item.id === id);
  if (!node) {
    throw new Error(`Unknown skill node: ${id}`);
  }
  return node;
}
