import type { IconType } from "react-icons";
// removed unused FaMicrochip import
import {
  SiAndroid,
  SiC,
  SiCplusplus,
  SiSharp,
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGooglegemini,
  SiHuggingface,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiOpencv,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiScikitlearn,
  SiSqlalchemy,
  SiTensorflow,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const iconMap: Record<string, IconType> = {
  SiC,
  SiCplusplus,
  SiSharp,
  SiKotlin,
  SiDart,
  SiJavascript,
  SiPython,
  SiAndroid,
  SiFlutter,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiHuggingface,
  SiGooglegemini,
  SiFigma,
  SiFirebase,
  SiSqlalchemy,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiDocker,
  SiLinux,
  SiOpenjdk,
  TbBrain,
};

type SkillIconProps = {
  name: string;
  className?: string;
};

export function SkillIcon({ name, className = "" }: SkillIconProps) {
  const Icon = iconMap[name] ?? TbBrain;
  return <Icon className={className} aria-hidden="true" />;
}
